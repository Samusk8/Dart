(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[981], {
    3264: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return c
            }
        });
        var i, r = t(2209), o = t(4278).Z.button(i || (i = (0,
        r.Z)(["\n  -webkit-tap-highlight-color: transparent;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  border: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 1.25rem;\n  font-weight: 600;\n  height: ", ";\n  justify-content: center;\n  margin: 0;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n  width: ", ";\n\n  :active {\n    transform: scale(0.95);\n    filter: brightness(1.2);\n  }\n"])), (function(n) {
            return n.reverse ? "white" : n.theme.colors.primary.main
        }
        ), (function(n) {
            return n.reverse ? "1px solid ".concat(n.theme.colors.primary.main) : "none"
        }
        ), (function(n) {
            return n.reverse ? n.theme.colors.primary.main : "white"
        }
        ), (function(n) {
            var e;
            return null !== (e = n.height) && void 0 !== e ? e : "50px"
        }
        ), (function(n) {
            var e;
            return null !== (e = n.width) && void 0 !== e ? e : "150px"
        }
        )), a = t(5893);
        function c(n) {
            var e = n.children
              , t = n.onClick
              , i = n.width
              , r = n.height
              , c = n.reverse;
            return (0,
            a.jsx)(o, {
                onClick: t,
                width: i,
                height: r,
                reverse: c,
                children: e
            })
        }
    },
    7012: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return p
            }
        });
        var i, r, o = t(7294), a = t(2209), c = t(4278), s = c.Z.button(i || (i = (0,
        a.Z)(["\n  border-width: 0.25px;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n  border-style: ", ";\n  border-radius: ", ";\n\n  @media only screen and (min-width: 768px) {\n    :hover {\n      filter: brightness(0.9);\n    }\n  }\n"])), (function(n) {
            return n.active ? n.theme.colors.primary.main : "white"
        }
        ), (function(n) {
            return n.theme.colors.primary.main
        }
        ), (function(n) {
            return n.active ? "white" : n.theme.colors.primary.main
        }
        ), (function(n) {
            return n.index === n.length - 1 ? "solid" : "solid none solid solid"
        }
        ), (function(n) {
            return function(n) {
                var e = "0px 0px 0px 0px";
                return 0 === n.index ? e = "12px 0px 0px 12px" : n.index === n.length - 1 && (e = "0px 12px 12px 0px"),
                e
            }(n)
        }
        )), l = t(5893), u = function(n) {
            var e, t = n.index, i = n.changeValue, r = n.data, o = n.buttonValue, a = n.active;
            return (0,
            l.jsx)(s, {
                active: a,
                index: t,
                length: Object.keys(r).length,
                onClick: function() {
                    return i(o)
                },
                tabIndex: -1,
                children: null !== (e = Object.values(r)[t].text) && void 0 !== e ? e : Object.values(r)[t]
            })
        }, d = o.memo(u, (function(n, e) {
            return n.active === e.active && n.data === e.data
        }
        )), h = c.Z.div(r || (r = (0,
        a.Z)(["\n  display: flex;\n  height: 50px;\n  margin-bottom: 20px;\n  width: ", ";\n"])), (function(n) {
            return n.width
        }
        )), f = function(n) {
            var e = n.data
              , t = n.changeData
              , i = n.type
              , r = n.initValue
              , a = n.newValue
              , c = void 0 === a ? r : a
              , s = n.width
              , u = void 0 === s ? "100%" : s
              , f = (0,
            o.useState)(c)
              , p = f[0]
              , m = f[1];
            (0,
            o.useEffect)((function() {
                m(c)
            }
            ), [c]);
            var b = function(n) {
                var e = n === p ? r : n;
                m(e),
                t(i, e)
            };
            return (0,
            l.jsx)(h, {
                width: u,
                children: Object.keys(e).map((function(n, t) {
                    var i, r = null !== (i = Object.values(e)[t].data) && void 0 !== i ? i : Object.values(e)[t], o = p === r ? "contained" : "";
                    return (0,
                    l.jsx)(d, {
                        index: t,
                        changeValue: b,
                        data: e,
                        buttonValue: r,
                        active: o
                    }, "button ".concat(n))
                }
                ))
            })
        }, p = o.memo(f, (function(n, e) {
            return n.newValue === e.newValue && n.data === e.data
        }
        ))
    },
    5579: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return m
            }
        });
        var i, r, o, a = t(7294), c = t(2209), s = t(5463), l = t(2611), u = t(4278), d = u.Z.div(i || (i = (0,
        c.Z)(["\n  animation-duration: 0.5s;\n  animation-name: framesOpacity;\n  background-color: rgba(31, 32, 41, 0.75);\n  display: block;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100vh;\n  justify-content: center;\n  left: 0;\n  margin: 0 auto;\n  overflow-x: hidden;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 100;\n\n  @keyframes framesOpacity {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n"]))), h = u.Z.div(r || (r = (0,
        c.Z)(["\n  align-self: center;\n  animation-duration: 0.5s;\n  animation-name: framesAll;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 12px 25px 0 rgba(199, 175, 189, 0.25);\n  display: block;\n  margin: 0 auto;\n  max-width: 500px;\n  overflow: hidden;\n  pointer-events: auto;\n  position: relative;\n  width: 90%;\n  z-index: 101;\n\n  @media ", " {\n    width: 40%;\n  }\n\n  @keyframes framesAll {\n    from {\n      transform: scale(0);\n      opacity: 0;\n    }\n\n    to {\n      transform: scale(1);\n      opacity: 1;\n    }\n  }\n"])), l.U.noMobile), f = u.Z.div(o || (o = (0,
        c.Z)(["\n  padding: ", ";\n  z-index: 102;\n  width: 100%;\n"])), s.s), p = t(5893);
        function m(n) {
            var e = n.children
              , t = n.goOut
              , i = (0,
            a.useRef)()
              , r = function(n) {
                i.current.contains(n.target) || t()
            };
            return (0,
            a.useEffect)((function() {
                return document.addEventListener("mousedown", r),
                function() {
                    document.removeEventListener("mousedown", r)
                }
            }
            ), []),
            (0,
            p.jsx)(d, {
                children: (0,
                p.jsx)(h, {
                    ref: i,
                    children: (0,
                    p.jsx)(f, {
                        children: e
                    })
                })
            })
        }
    },
    2026: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var i, r, o = t(2209), a = t(4278), c = a.Z.header(i || (i = (0,
        o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.5em;\n  margin-bottom: 1em;\n  border-bottom: 1px solid black;\n  width: 100%;\n"]))), s = a.Z.h1(r || (r = (0,
        o.Z)(["\n  font-size: 1.5em;\n  font-weight: 600;\n  margin: 0;\n"]))), l = t(5893);
        function u(n) {
            var e = n.children
              , t = n.points
              , i = t ? t.toFixed(2) : "";
            return (0,
            l.jsxs)(c, {
                children: [(0,
                l.jsx)(s, {
                    children: e
                }), (0,
                l.jsx)(s, {
                    children: i
                })]
            })
        }
    },
    1433: function(n, e, t) {
        "use strict";
        t.d(e, {
            Z: function() {
                return b
            }
        });
        var i = t(2809)
          , r = t(7294)
          , o = t(5893);
        function a(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function c(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(t), !0).forEach((function(e) {
                    (0,
                    i.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        function s(n) {
            return (0,
            o.jsx)("svg", c(c({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 21",
                width: "1em",
                height: "1em"
            }, n), {}, {
                children: (0,
                o.jsx)("path", {
                    d: "M14 7h-1V5A5 5 0 003 5v2H2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2zM5 5a3 3 0 016 0v2H5zm9 14H2V9h12zm-6-3a2 2 0 10-2-2 2 2 0 002 2z"
                })
            }))
        }
        var l, u, d = t(6251), h = t(2209), f = t(4278), p = f.Z.button(l || (l = (0,
        h.Z)(["\n  align-content: center;\n  align-items: center;\n  border-style: solid;\n  border-width: 0.25px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n  justify-content: center;\n  margin: 0;\n  position: relative;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n\n  @media only screen and (min-width: 768px) {\n    :hover {\n      filter: brightness(0.9);\n    }\n  }\n"])), (function(n) {
            return function(n) {
                var e, t = n.theme.colors.primary, i = n.active ? t.main : "white", r = n.active ? "white" : t.main, o = null !== (e = n.width) && void 0 !== e ? e : "100%", a = "0px", c = "solid none none solid";
                return n.left && n.right ? (a = "12px",
                c = "solid") : n.left || n.right ? n.left ? (a = "12px 0px 0px 12px",
                c = "solid") : n.right && (a = "0px 12px 12px 0px",
                c = "solid solid solid none") : (a = "0px",
                c = "solid solid solid none"),
                "\n    background-color: ".concat(i, ";\n    border-color: ").concat(t.main, ";\n    border-radius: ").concat(a, ";\n    border-style: ").concat(c, ";\n    color: ").concat(r, ";\n    width: ").concat(o, ";")
            }(n)
        }
        )), m = f.Z.div(u || (u = (0,
        h.Z)(["\n  margin: 0;\n  padding-left: 5%;\n  opacity: 0.8;\n"]))), b = function(n) {
            var e = n.active
              , t = n.changeValue
              , i = n.lock
              , a = void 0 !== i && i
              , c = n.width
              , l = void 0 === c ? "100%" : c
              , u = n.children
              , h = n.left
              , f = void 0 !== h && h
              , b = n.right
              , x = void 0 !== b && b
              , g = (0,
            r.useState)(e)
              , v = g[0]
              , y = g[1];
            (0,
            r.useEffect)((function() {
                y(e)
            }
            ), [e]);
            return (0,
            o.jsxs)(p, {
                active: v,
                onClick: function() {
                    a || (t(),
                    y(!v))
                },
                tabIndex: -1,
                width: l,
                left: f,
                right: x,
                children: [u, a && (0,
                o.jsx)(m, {
                    children: (0,
                    o.jsx)(s, {
                        fill: "white",
                        height: d.EA.small,
                        width: d.EA.small
                    })
                })]
            })
        }
    },
    5463: function(n, e, t) {
        "use strict";
        t.d(e, {
            s: function() {
                return i
            }
        });
        var i = "4%"
    },
    7834: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            default: function() {
                return D
            }
        });
        var i, r = t(2809), o = t(3789), a = t(5988), c = t(9008), s = t(4602), l = t(1433), u = t(8141), d = t(7294), h = function(n) {
            var e = n.replace(/[A-Z0-9]/g, (function(n) {
                return " ".concat(n)
            }
            ))
              , t = e.charAt(0).toUpperCase() + e.slice(1);
            return " " === t[0] ? t.slice(1) : t
        }, f = t(2209), p = t(4278).Z.div(i || (i = (0,
        f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))), m = t(5893), b = t(3539).spins;
        function x(n) {
            var e = n.changeValue
              , t = s.store.getState()
              , i = t.programReducer
              , r = t.spinReducer
              , o = r.type
              , a = i.program.technical.length
              , c = [];
            b.find((function(n) {
                return "ALL" === n.code
            }
            )).bonus.forEach((function(n) {
                var e = r.technicalType;
                "comboSpin" === e && i.finishCombo && (e = "newComboSpin"),
                n.combo && n.combo.includes(e) && (c.length > 0 && c[c.length - 1].length % 2 === 0 || 0 === c.length ? c.push([n]) : c[c.length - 1].push(n))
            }
            )),
            b.find((function(n) {
                return n.code === o
            }
            )).bonus.forEach((function(n) {
                c.length > 0 && c[c.length - 1].length % 2 === 0 || 0 === c.length ? c.push([n]) : c[c.length - 1].push(n)
            }
            ));
            var d = function(n) {
                return n.combo && n.combo.includes("comboSpin") && (0,
                u.Gx)().includes(n.name)
            };
            return (0,
            m.jsx)(m.Fragment, {
                children: c.map((function(n) {
                    var t = 2 === n.length ? o + n[0].name + n[1].name : o + n[0].name;
                    return (0,
                    m.jsx)(p, {
                        children: n.map((function(n) {
                            var t = r.bonus.includes(n.name) || (0,
                            u.Gx)().includes(n.name);
                            return (0,
                            m.jsx)(l.Z, {
                                changeValue: function() {
                                    return e(n.name)
                                },
                                active: t,
                                width: "45%",
                                lock: d(n),
                                left: !0,
                                right: !0,
                                children: h(n.name)
                            }, o + n.name)
                        }
                        ))
                    }, t + a)
                }
                ))
            })
        }
        var g = t(3264)
          , v = t(7012)
          , y = t(5882)
          , w = {
            SOLO_SPIN: {
                text: y.wt.SOLO_SPIN.text,
                data: y.wt.SOLO_SPIN.data
            },
            COMBO_SPIN: {
                text: y.wt.COMBO_SPIN.text,
                data: y.wt.COMBO_SPIN.data
            }
        }
          , j = "NL"
          , O = t(9704)
          , Z = t(2765)
          , k = t(8294)
          , S = t(4651)
          , P = t(5463)
          , _ = t(2611)
          , V = t(2026)
          , N = t(5579);
        function C(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function E(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? C(Object(t), !0).forEach((function(e) {
                    (0,
                    r.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        function D() {
            var n = (0,
            O.I0)()
              , e = s.store.getState()
              , t = e.programReducer
              , i = e.spinReducer
              , r = (0,
            d.useState)([i, 1])[1]
              , h = (0,
            d.useState)(!1)
              , f = h[0]
              , p = h[1]
              , b = function e(o, a) {
                if ("type" === o) {
                    var c = (0,
                    u.Gx)();
                    (i.bonus.length > 0 || c !== i.bonus) && e("bonus", c)
                }
                n((0,
                k.b)({
                    type: o,
                    newData: a
                })),
                r([i, (0,
                u.Af)(t)])
            }
              , C = (0,
            S.useRouter)().query.id
              , D = function() {
                return p(!1)
            }
              , M = (0,
            d.useState)(0)
              , I = M[0]
              , A = M[1];
            return (0,
            m.jsxs)(m.Fragment, {
                children: [(0,
                m.jsx)(c.default, {
                    children: (0,
                    m.jsxs)("title", {
                        className: a.default.dynamic([["1889188455", [P.s, _.U.noMobile]]]),
                        children: ["Spins ", C, " - RollArt Simulator"]
                    })
                }), (0,
                m.jsxs)("main", {
                    className: a.default.dynamic([["1889188455", [P.s, _.U.noMobile]]]),
                    children: [(0,
                    m.jsx)(V.Z, {
                        children: "SPINS"
                    }), (0,
                    m.jsxs)("div", {
                        className: a.default.dynamic([["1889188455", [P.s, _.U.noMobile]]]),
                        children: [(0,
                        m.jsx)(v.Z, {
                            data: function() {
                                var n = (0,
                                u.Af)();
                                return E(E({}, w), {}, {
                                    COMBO_SPIN: E(E({}, w.COMBO_SPIN), {}, {
                                        text: "".concat(w.COMBO_SPIN.text, " ").concat(n)
                                    })
                                })
                            }(),
                            changeData: b,
                            type: "technicalType",
                            initValue: y.wt.SOLO_SPIN.data,
                            newValue: i.technicalType,
                            width: "46%"
                        }), (0,
                        m.jsx)(l.Z, {
                            changeValue: function() {
                                b("noLevel", !i.noLevel)
                            },
                            active: i.noLevel,
                            width: "23%",
                            left: !0,
                            right: !0,
                            children: j
                        })]
                    }), (0,
                    m.jsx)(v.Z, {
                        data: y.rb,
                        changeData: b,
                        type: "type",
                        initValue: y.rb.UPRIGHT,
                        newValue: i.type
                    }), "soloSpin" === i.technicalType && (0,
                    m.jsx)(v.Z, {
                        data: y.zM,
                        changeData: b,
                        type: "qoe",
                        initValue: 0,
                        newValue: i.qoe
                    }), (0,
                    m.jsxs)("div", {
                        className: a.default.dynamic([["1889188455", [P.s, _.U.noMobile]]]) + " botones",
                        children: [(0,
                        m.jsx)(g.Z, {
                            onClick: function(e) {
                                e.preventDefault();
                                var t = s.store.getState().spinReducer;
                                n((0,
                                Z.Xg)(t)),
                                n((0,
                                k.tB)());
                                var o = (0,
                                u.Gx)();
                                (i.bonus.length > 0 || o !== i.bonus) && b("bonus", o),
                                r([i, (0,
                                u.Af)()])
                            },
                            width: "45%",
                            children: "ADD"
                        }), !t.finishCombo && ("newComboSpin" === t.program.technical[t.program.technical.length - 1].technicalType || "comboSpin" === t.program.technical[t.program.technical.length - 1].technicalType) && (0,
                        m.jsx)(g.Z, {
                            onClick: function(n) {
                                n.preventDefault(),
                                p(!0)
                            },
                            width: "45%",
                            children: "SET QOE COMBO"
                        })]
                    }), (0,
                    m.jsx)(x, {
                        changeValue: function(e) {
                            var t = s.store.getState().spinReducer.bonus;
                            if (t.includes(e)) {
                                var i = t.indexOf(e);
                                t.splice(i, 1),
                                n((0,
                                k.b)({
                                    type: "bonus",
                                    newData: (0,
                                    o.Z)(t)
                                }))
                            } else
                                n((0,
                                k.b)({
                                    type: "bonus",
                                    newData: [].concat((0,
                                    o.Z)(t), [e])
                                }))
                        }
                    }), f && (0,
                    m.jsxs)(N.Z, {
                        goOut: D,
                        children: [(0,
                        m.jsx)(V.Z, {
                            children: "QOE FOR COMBO SPIN"
                        }), (0,
                        m.jsx)(v.Z, {
                            data: y.zM,
                            changeData: function(n, e) {
                                A(e)
                            },
                            type: "qoe",
                            initValue: 0,
                            newValue: i.qoe
                        }), (0,
                        m.jsx)("section", {
                            className: a.default.dynamic([["1889188455", [P.s, _.U.noMobile]]]) + " buttonPopup",
                            children: (0,
                            m.jsx)(g.Z, {
                                onClick: function() {
                                    n((0,
                                    Z.aQ)()),
                                    n((0,
                                    Z.EY)(I)),
                                    i.bonus.length > 0 && b("bonus", []),
                                    r([i, (0,
                                    u.Af)()]),
                                    D()
                                },
                                width: "45%",
                                children: "OK"
                            })
                        })]
                    })]
                }), (0,
                m.jsx)(a.default, {
                    id: "1889188455",
                    dynamic: [P.s, _.U.noMobile],
                    children: [".botones.__jsx-style-dynamic-selector{margin-bottom:20px;}", "div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "main.__jsx-style-dynamic-selector{padding:".concat(P.s, ";font-size:3.75vw;}"), "@media screen and ".concat(_.U.noMobile, "{main.__jsx-style-dynamic-selector{font-size:16px;}}"), ".buttonPopup.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]
                })]
            })
        }
    },
    2106: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/simulations/[id]/spins", function() {
            return t(7834)
        }
        ])
    },
    9008: function(n, e, t) {
        n.exports = t(639)
    }
}, function(n) {
    n.O(0, [774, 888, 179], (function() {
        return e = 2106,
        n(n.s = e);
        var e
    }
    ));
    var e = n.O();
    _N_E = e
}
]);
