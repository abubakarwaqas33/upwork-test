"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var JobCard = function (_a) {
    var jobTitle = _a.jobTitle, companyName = _a.companyName, shortDesc = _a.shortDesc, className = _a.className;
    return (React.createElement(reactstrap_1.Card, { body: true, className: "" + className },
        React.createElement(reactstrap_1.CardTitle, { tag: "h5" }, jobTitle),
        React.createElement(reactstrap_1.CardSubtitle, { tag: "h6", className: "mb-2 text-muted" }, companyName),
        React.createElement(reactstrap_1.CardText, null, shortDesc)));
};
exports["default"] = JobCard;
