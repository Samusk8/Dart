(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[158], {
    3264: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return c
            }
        });
        var i, r = t(2209), o = t(4278).Z.button(i || (i = (0,
        r.Z)(["\n  -webkit-tap-highlight-color: transparent;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  border: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 1.25rem;\n  font-weight: 600;\n  height: ", ";\n  justify-content: center;\n  margin: 0;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n  width: ", ";\n\n  :active {\n    transform: scale(0.95);\n    filter: brightness(1.2);\n  }\n"])), (function(e) {
            return e.reverse ? "white" : e.theme.colors.primary.main
        }
        ), (function(e) {
            return e.reverse ? "1px solid ".concat(e.theme.colors.primary.main) : "none"
        }
        ), (function(e) {
            return e.reverse ? e.theme.colors.primary.main : "white"
        }
        ), (function(e) {
            var n;
            return null !== (n = e.height) && void 0 !== n ? n : "50px"
        }
        ), (function(e) {
            var n;
            return null !== (n = e.width) && void 0 !== n ? n : "150px"
        }
        )), a = t(5893);
        function c(e) {
            var n = e.children
              , t = e.onClick
              , i = e.width
              , r = e.height
              , c = e.reverse;
            return (0,
            a.jsx)(o, {
                onClick: t,
                width: i,
                height: r,
                reverse: c,
                children: n
            })
        }
    },
    7012: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return f
            }
        });
        var i, r, o = t(7294), a = t(2209), c = t(4278), l = c.Z.button(i || (i = (0,
        a.Z)(["\n  border-width: 0.25px;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n  border-style: ", ";\n  border-radius: ", ";\n\n  @media only screen and (min-width: 768px) {\n    :hover {\n      filter: brightness(0.9);\n    }\n  }\n"])), (function(e) {
            return e.active ? e.theme.colors.primary.main : "white"
        }
        ), (function(e) {
            return e.theme.colors.primary.main
        }
        ), (function(e) {
            return e.active ? "white" : e.theme.colors.primary.main
        }
        ), (function(e) {
            return e.index === e.length - 1 ? "solid" : "solid none solid solid"
        }
        ), (function(e) {
            return function(e) {
                var n = "0px 0px 0px 0px";
                return 0 === e.index ? n = "12px 0px 0px 12px" : e.index === e.length - 1 && (n = "0px 12px 12px 0px"),
                n
            }(e)
        }
        )), d = t(5893), s = function(e) {
            var n, t = e.index, i = e.changeValue, r = e.data, o = e.buttonValue, a = e.active;
            return (0,
            d.jsx)(l, {
                active: a,
                index: t,
                length: Object.keys(r).length,
                onClick: function() {
                    return i(o)
                },
                tabIndex: -1,
                children: null !== (n = Object.values(r)[t].text) && void 0 !== n ? n : Object.values(r)[t]
            })
        }, u = o.memo(s, (function(e, n) {
            return e.active === n.active && e.data === n.data
        }
        )), h = c.Z.div(r || (r = (0,
        a.Z)(["\n  display: flex;\n  height: 50px;\n  margin-bottom: 20px;\n  width: ", ";\n"])), (function(e) {
            return e.width
        }
        )), p = function(e) {
            var n = e.data
              , t = e.changeData
              , i = e.type
              , r = e.initValue
              , a = e.newValue
              , c = void 0 === a ? r : a
              , l = e.width
              , s = void 0 === l ? "100%" : l
              , p = (0,
            o.useState)(c)
              , f = p[0]
              , x = p[1];
            (0,
            o.useEffect)((function() {
                x(c)
            }
            ), [c]);
            var m = function(e) {
                var n = e === f ? r : e;
                x(n),
                t(i, n)
            };
            return (0,
            d.jsx)(h, {
                width: s,
                children: Object.keys(n).map((function(e, t) {
                    var i, r = null !== (i = Object.values(n)[t].data) && void 0 !== i ? i : Object.values(n)[t], o = f === r ? "contained" : "";
                    return (0,
                    d.jsx)(u, {
                        index: t,
                        changeValue: m,
                        data: n,
                        buttonValue: r,
                        active: o
                    }, "button ".concat(e))
                }
                ))
            })
        }, f = o.memo(p, (function(e, n) {
            return e.newValue === n.newValue && e.data === n.data
        }
        ))
    },
    7777: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return j
            }
        });
        var i, r, o, a, c, l, d = t(3789), s = t(318), u = t(4602), h = t(5882), p = t(2209), f = t(4278), x = f.Z.div(i || (i = (0,
        p.Z)(["\n  margin: 0;\n  margin-bottom: 0.5em;\n  padding: 0;\n  width: 100%;\n  display: flex;\n"]))), m = f.Z.div(r || (r = (0,
        p.Z)(["\n  height: 1.5em;\n  width: 1.5em;\n  margin-top: 0.5em;\n  display: flex;\n"]))), b = f.Z.div(o || (o = (0,
        p.Z)(["\n  position: relative;\n  width: calc(100% - 1.5em);\n  margin-left: 0.5em;\n  right: 0;\n"]))), y = f.Z.div(a || (a = (0,
        p.Z)(["\n  display: flex;\n  font-size: 1.5em;\n  font-weight: 500;\n  height: 1.5em;\n  margin-bottom: 0.1em;\n  position: relative;\n"]))), g = f.Z.div(c || (c = (0,
        p.Z)(["\n  position: absolute;\n  right: 0;\n"]))), w = f.Z.div(l || (l = (0,
        p.Z)(["\n  margin-left: 0.25em;\n  font-size: 0.9em;\n  color: ", ";\n"])), (function(e) {
            return e.theme.colors.disable
        }
        )), v = t(5893);
        function j(e) {
            var n = e.listId
              , t = e.technicalElement
              , i = u.store.getState().programReducer
              , r = t.base
              , o = t.codeVisible
              , a = t.name
              , c = t.qoe
              , l = t.qoeAdj
              , p = t.technicalType
              , f = t.total
              , j = Object.entries(h.wt).find((function(e) {
                var n = (0,
                s.Z)(e, 2);
                n[0];
                return n[1].data === p
            }
            ))[1]
              , O = null
              , Z = (0,
            d.Z)(i.program.technical.slice(0, n + 1)).reverse();
            "newComboSpin" === t.technicalType || "newComboJump" === t.technicalType ? O = 1 : "comboSpin" === t.technicalType ? O = Z.findIndex((function(e) {
                return "newComboSpin" === e.technicalType
            }
            )) + 1 : "comboJump" === t.technicalType && (O = Z.findIndex((function(e) {
                return "newComboJump" === e.technicalType
            }
            )) + 1);
            var P = O ? "".concat(j.text, " ").concat(O) : j.text;
            return (0,
            v.jsxs)(x, {
                children: [(0,
                v.jsx)(m, {
                    children: j.icon && (0,
                    v.jsx)(j.icon, {
                        height: "24px",
                        width: "24px"
                    })
                }), (0,
                v.jsxs)(b, {
                    children: [(0,
                    v.jsxs)(y, {
                        children: [j.code, ": ", o, (0,
                        v.jsx)(g, {
                            children: f.toFixed(2)
                        })]
                    }), (0,
                    v.jsxs)(w, {
                        children: [P, ": ", a, ", QOE: ", c]
                    }), (0,
                    v.jsxs)(w, {
                        children: ["Base: ", r.toFixed(2), ", OQE Adj: ", l.toFixed(2), ", Score: ", f.toFixed(2)]
                    })]
                })]
            })
        }
    },
    2026: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return s
            }
        });
        var i, r, o = t(2209), a = t(4278), c = a.Z.header(i || (i = (0,
        o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.5em;\n  margin-bottom: 1em;\n  border-bottom: 1px solid black;\n  width: 100%;\n"]))), l = a.Z.h1(r || (r = (0,
        o.Z)(["\n  font-size: 1.5em;\n  font-weight: 600;\n  margin: 0;\n"]))), d = t(5893);
        function s(e) {
            var n = e.children
              , t = e.points
              , i = t ? t.toFixed(2) : "";
            return (0,
            d.jsxs)(c, {
                children: [(0,
                d.jsx)(l, {
                    children: n
                }), (0,
                d.jsx)(l, {
                    children: i
                })]
            })
        }
    },
    1433: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return m
            }
        });
        var i = t(2809)
          , r = t(7294)
          , o = t(5893);
        function a(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function c(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? a(Object(t), !0).forEach((function(n) {
                    (0,
                    i.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function l(e) {
            return (0,
            o.jsx)("svg", c(c({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 21",
                width: "1em",
                height: "1em"
            }, e), {}, {
                children: (0,
                o.jsx)("path", {
                    d: "M14 7h-1V5A5 5 0 003 5v2H2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2zM5 5a3 3 0 016 0v2H5zm9 14H2V9h12zm-6-3a2 2 0 10-2-2 2 2 0 002 2z"
                })
            }))
        }
        var d, s, u = t(6251), h = t(2209), p = t(4278), f = p.Z.button(d || (d = (0,
        h.Z)(["\n  align-content: center;\n  align-items: center;\n  border-style: solid;\n  border-width: 0.25px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  justify-content: center;\n  margin: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n\n  @media only screen and (min-width: 768px) {\n    :hover {\n      filter: brightness(0.9);\n    }\n  }\n"])), (function(e) {
            return function(e) {
                var n, t = e.theme.colors.primary, i = e.active ? t.main : "white", r = e.active ? "white" : t.main, o = null !== (n = e.width) && void 0 !== n ? n : "100%", a = "0px", c = "solid none none solid";
                return e.left && e.right ? (a = "12px",
                c = "solid") : e.left || e.right ? e.left ? (a = "12px 0px 0px 12px",
                c = "solid") : e.right && (a = "0px 12px 12px 0px",
                c = "solid solid solid none") : (a = "0px",
                c = "solid solid solid none"),
                "\n    background-color: ".concat(i, ";\n    border-color: ").concat(t.main, ";\n    border-radius: ").concat(a, ";\n    border-style: ").concat(c, ";\n    color: ").concat(r, ";\n    width: ").concat(o, ";")
            }(e)
        }
        )), x = p.Z.div(s || (s = (0,
        h.Z)(["\n  margin: 0;\n  padding-left: 5%;\n  opacity: 0.8;\n"]))), m = function(e) {
            var n = e.active
              , t = e.changeValue
              , i = e.lock
              , a = void 0 !== i && i
              , c = e.width
              , d = void 0 === c ? "100%" : c
              , s = e.children
              , h = e.left
              , p = void 0 !== h && h
              , m = e.right
              , b = void 0 !== m && m
              , y = (0,
            r.useState)(n)
              , g = y[0]
              , w = y[1];
            (0,
            r.useEffect)((function() {
                w(n)
            }
            ), [n]);
            return (0,
            o.jsxs)(f, {
                active: g,
                onClick: function() {
                    a || (t(),
                    w(!g))
                },
                tabIndex: -1,
                width: d,
                left: p,
                right: b,
                children: [s, a && (0,
                o.jsx)(x, {
                    children: (0,
                    o.jsx)(l, {
                        fill: "white",
                        height: u.EA.small,
                        width: u.EA.small
                    })
                })]
            })
        }
    },
    5463: function(e, n, t) {
        "use strict";
        t.d(n, {
            s: function() {
                return i
            }
        });
        var i = "4%"
    },
    1632: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return E
            }
        });
        var i = t(2809)
          , r = t(5988)
          , o = t(9008)
          , a = t(3264)
          , c = t(7012);
        var l = t(5882)
          , d = {
            SOLO_JUMP: {
                text: l.wt.SOLO_JUMP.text,
                data: l.wt.SOLO_JUMP.data
            },
            COMBO_JUMP: {
                text: l.wt.COMBO_JUMP.text,
                data: l.wt.COMBO_JUMP.data
            }
        }
          , s = {
            under: {
                text: "<",
                data: l.lx.UNDER
            },
            half: {
                text: "<<",
                data: l.lx.HALF
            },
            downgraded: {
                text: "<<<",
                data: l.lx.DOWNGRADED
            }
        }
          , u = {
            SINGLE: {
                text: "SINGLE",
                data: l.dd.SINGLE
            },
            DOUBLE: {
                text: "DOUBLE",
                data: l.dd.DOUBLE
            },
            TRIPLE: {
                text: "TRIPLE",
                data: l.dd.TRIPLE
            },
            QUAD: {
                text: "QUAD",
                data: l.dd.QUAD
            }
        }
          , h = (l.JZ.NO_JUMP,
        function(e, n) {
            if (null == e)
                return {};
            var t, i, r = function(e, n) {
                if (null == e)
                    return {};
                var t, i, r = {}, o = Object.keys(e);
                for (i = 0; i < o.length; i++)
                    t = o[i],
                    n.indexOf(t) >= 0 || (r[t] = e[t]);
                return r
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (i = 0; i < o.length; i++)
                    t = o[i],
                    n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
            }
            return r
        }(l.JZ, ["NO_JUMP"]))
          , p = t(4602)
          , f = t(9704)
          , x = t(2765)
          , m = t(6469)
          , b = t(4651)
          , y = t(1835)
          , g = t(7294)
          , w = t(1433)
          , v = t(6763)
          , j = t(5463)
          , O = t(2611)
          , Z = t(2026)
          , P = (t(7777),
        t(5893));
        function k(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function _(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? k(Object(t), !0).forEach((function(n) {
                    (0,
                    i.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var M = new v.Z({
            technicalType: l.wt.COMBO_JUMP.data,
            type: l.JZ.NO_JUMP,
            turn: 0,
            rotation: 0,
            qoe: 0
        });
        function E() {
            var e = (0,
            f.I0)()
              , n = p.store.getState()
              , t = n.jumpReducer
              , i = n.programReducer
              , v = (0,
            g.useState)([!1, t, (0,
            y.J)(i)])
              , k = v[0]
              , E = v[1]
              , J = function(n, i) {
                e((0,
                m.Wq)({
                    type: n,
                    newData: i
                })),
                E([!1, t, k[2]])
            }
              , D = (0,
            b.useRouter)().query.id;
            return (0,
            P.jsxs)(P.Fragment, {
                children: [(0,
                P.jsx)(o.default, {
                    children: (0,
                    P.jsxs)("title", {
                        className: r.default.dynamic([["4199341067", [j.s, O.U.noMobile]]]),
                        children: ["Jumps ", D, " - RollArt Simulator"]
                    })
                }), (0,
                P.jsxs)("main", {
                    className: r.default.dynamic([["4199341067", [j.s, O.U.noMobile]]]),
                    children: [(0,
                    P.jsx)(Z.Z, {
                        children: "JUMPS"
                    }), (0,
                    P.jsxs)("div", {
                        className: r.default.dynamic([["4199341067", [j.s, O.U.noMobile]]]),
                        children: [(0,
                        P.jsx)(c.Z, {
                            data: _(_({}, d), {}, {
                                COMBO_JUMP: _(_({}, d.COMBO_JUMP), {}, {
                                    text: "".concat(d.COMBO_JUMP.text, " ").concat((0,
                                    y.J)(i))
                                })
                            }),
                            changeData: J,
                            type: "technicalType",
                            initValue: l.wt.SOLO_JUMP.data,
                            newValue: t.technicalType,
                            width: "45%"
                        }), (0,
                        P.jsxs)("section", {
                            className: r.default.dynamic([["4199341067", [j.s, O.U.noMobile]]]),
                            children: ["Lz" === t.type && !k[0] && (0,
                            P.jsx)(w.Z, {
                                changeValue: function() {
                                    e((0,
                                    m.Wq)({
                                        type: "noEdge",
                                        newData: !t.noEdge
                                    })),
                                    E([k[0], t, k[2]])
                                },
                                active: t.noEdge,
                                width: "50%",
                                left: !0,
                                children: "!"
                            }), (0,
                            P.jsx)(w.Z, {
                                changeValue: function() {
                                    k[0] ? E([!1, t, k[2]]) : E([!0, "NJ", k[2]])
                                },
                                active: k[0],
                                width: "50%",
                                right: !0,
                                left: "Lz" !== t.type || k[0],
                                children: l.JZ.NO_JUMP
                            })]
                        })]
                    }), (0,
                    P.jsx)(c.Z, {
                        data: h,
                        changeData: J,
                        type: "type",
                        initValue: l.JZ.AXEL,
                        newValue: k[0] ? "NJ" : t.type
                    }), (0,
                    P.jsx)(c.Z, {
                        data: u,
                        changeData: J,
                        type: "turn",
                        initValue: l.dd.SINGLE,
                        newValue: t.turn
                    }), (0,
                    P.jsx)(c.Z, {
                        data: s,
                        changeData: J,
                        type: "rotation",
                        initValue: l.lx.FULL,
                        newValue: t.rotation
                    }), (0,
                    P.jsx)(c.Z, {
                        data: l.zM,
                        changeData: J,
                        type: "qoe",
                        initValue: 0,
                        newValue: t.qoe
                    }), (0,
                    P.jsxs)("div", {
                        className: r.default.dynamic([["4199341067", [j.s, O.U.noMobile]]]),
                        children: [(0,
                        P.jsx)(a.Z, {
                            onClick: function(n) {
                                n.preventDefault();
                                var r = p.store.getState().jumpReducer;
                                k[0] ? e((0,
                                x.De)(M)) : e((0,
                                x.De)(r)),
                                e((0,
                                m.Si)()),
                                E([k[0], t, (0,
                                y.J)(i)])
                            },
                            width: "45%",
                            children: "ADD"
                        }), !i.finishCombo && ("newComboJump" === i.program.technical[i.program.technical.length - 1].technicalType || "comboJump" === i.program.technical[i.program.technical.length - 1].technicalType) && (0,
                        P.jsx)(a.Z, {
                            onClick: function(n) {
                                n.preventDefault(),
                                e((0,
                                x.aQ)()),
                                E([k[0], t, (0,
                                y.J)(i)])
                            },
                            width: "45%",
                            children: "FINISH COMBO"
                        })]
                    })]
                }), (0,
                P.jsx)(r.default, {
                    id: "4199341067",
                    dynamic: [j.s, O.U.noMobile],
                    children: ["div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "main.__jsx-style-dynamic-selector{padding:".concat(j.s, ";font-size:3.75vw;}"), "@media screen and ".concat(O.U.noMobile, "{main.__jsx-style-dynamic-selector{font-size:16px;}}"), "section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:45%;}"]
                })]
            })
        }
    },
    4907: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/simulations/[id]/jumps", function() {
            return t(1632)
        }
        ])
    },
    9008: function(e, n, t) {
        e.exports = t(639)
    }
}, function(e) {
    e.O(0, [774, 888, 179], (function() {
        return n = 4907,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
