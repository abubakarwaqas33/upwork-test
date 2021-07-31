"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var SearchPopUp = function (_a) {
    var trigger = _a.trigger, className = _a.className, headerText = _a.headerText, children = _a.children, _b = _a.target, target = _b === void 0 ? '' : _b;
    return (React.createElement(reactstrap_1.UncontrolledPopover, { trigger: trigger, placement: "bottom", target: target, className: "" + className },
        React.createElement(reactstrap_1.PopoverHeader, null, headerText),
        React.createElement(reactstrap_1.PopoverBody, null, children)));
};
exports["default"] = SearchPopUp;
