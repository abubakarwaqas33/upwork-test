"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/globals.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("nprogress/nprogress.css");
var react_1 = require("react");
var router_1 = require("next/router");
var nprogress_1 = require("nprogress");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    react_1.useEffect(function () {
        router_1["default"].events.on("routeChangeStart", function () { return nprogress_1["default"].start(); });
        router_1["default"].events.on("routeChangeComplete", function () { return nprogress_1["default"].done(); });
        router_1["default"].events.on("routeChangeError", function () { return nprogress_1["default"].done(); });
    }, []);
    return React.createElement(Component, __assign({}, pageProps));
}
exports["default"] = MyApp;
