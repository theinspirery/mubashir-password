!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "d4a909aa-9983-4229-9366-c5e719ed9d24",
        e._sentryDebugIdIdentifier = "sentry-dbid-d4a909aa-9983-4229-9366-c5e719ed9d24")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "browserflow-extension@1.0.5"
},
( () => {
    "use strict";
    const e = "Browserflow"
      , t = "/settings"
      , n = (Object.fromEntries(["account", "billing", "integrations"].map((e => [e, `${t}/${e}`]))),
    `${e}:REMOVE`);
    function i() {
        const e = () => window.dispatchEvent(new Event("locationchange"));
        return window.addEventListener("hashchange", e),
        window.addEventListener("popstate", e),
        function() {
            function t(e, t) {
                return function(...n) {
                    const i = e.apply(this, n);
                    return t(...n),
                    i
                }
            }
            window.history.pushStateOriginal = window.history.pushState,
            window.history.replaceStateOriginal = window.history.replaceState,
            window.history.pushState = t(window.history.pushState, e),
            window.history.replaceState = t(window.history.replaceState, e)
        }(),
        () => {
            window.removeEventListener("hashchange", e),
            window.removeEventListener("popstate", e),
            window.history.pushState = window.history.pushStateOriginal,
            window.history.replaceState = window.history.replaceStateOriginal
        }
    }
    !function() {
        const e = i();
        t = () => {
            e()
        }
        ,
        document.addEventListener(n, ( () => t()), {
            once: !0
        });
        var t
    }()
}
)();
