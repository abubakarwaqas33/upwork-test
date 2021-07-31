"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var reactstrap_1 = require("reactstrap");
var card_1 = require("../../components/card/card"); // reuseable component
var JobPage_module_scss_1 = require("./JobPage.module.scss");
var searchpopup_1 = require("../../components/searchpopup/searchpopup"); //Re-useable filter
var filters_1 = require("../../constants/filters");
var JobPage = function (_a) {
    var jobs = _a.jobs;
    var _b = react_1.useState(false), isHighlight = _b[0], setHighlight = _b[1];
    var router = router_1.useRouter();
    var setSearchJobs = function (day, companyName) {
        if (day === void 0) { day = ''; }
        if (companyName === void 0) { companyName = ''; }
        var query = router.query;
        day ? setHighlight(true) : setHighlight(false);
        router.push({
            pathname: '/test/jobs',
            query: {
                day: day,
                companyName: companyName || query.companyName
            }
        });
    };
    var onChangeCompanyName = function (_a) {
        var target = _a.target;
        var query = router.query;
        var day = query.day;
        var companyName = target.value;
        setSearchJobs(day, companyName);
    };
    var displayRecentJobs = function () { return (react_1["default"].createElement("div", { className: "d-flex justify-content-start justify-content-between " + JobPage_module_scss_1["default"].recentJobs },
        react_1["default"].createElement("div", { className: JobPage_module_scss_1["default"].recentJob + " " + (isHighlight ? JobPage_module_scss_1["default"].isOpacity : '') + " ", onClick: function () { return setSearchJobs('7d'); } }, "7 days"),
        react_1["default"].createElement("div", { className: JobPage_module_scss_1["default"].recentJob + " " + JobPage_module_scss_1["default"].removeFilter, onClick: function () { return setSearchJobs(); } }, "Clear"))); };
    var displayByCompanyNames = function () { return (react_1["default"].createElement("div", { className: "search-companyname" },
        react_1["default"].createElement(reactstrap_1.FormGroup, null,
            react_1["default"].createElement(reactstrap_1.Input, { type: "select", name: "companyName", onChange: onChangeCompanyName }, jobs && jobs.map(function (job, index) { return react_1["default"].createElement("option", { value: job.companyName, key: index }, job.companyName); }))))); };
    return (react_1["default"].createElement("div", { className: JobPage_module_scss_1["default"].jobPage },
        react_1["default"].createElement(reactstrap_1.Container, null,
            react_1["default"].createElement("h3", { className: "display-6 mb-4 highlightHeading" }, "DEVELOPER JOBS NEAR ME"),
            react_1["default"].createElement("div", { className: JobPage_module_scss_1["default"].searchFilters + " d-flex justify-content-start" }, filters_1.filterLists.map(function (filterMethod, index) {
                return (react_1["default"].createElement("div", { className: JobPage_module_scss_1["default"].searchBtns + " mb-2", key: index },
                    react_1["default"].createElement(reactstrap_1.Button, { id: filterMethod.target, type: "button" }, filterMethod.btnText),
                    react_1["default"].createElement(searchpopup_1["default"], { trigger: filterMethod.trigger, headerText: filterMethod.headerText, target: filterMethod.target, className: JobPage_module_scss_1["default"].popOverJobFilter }, // this condition expand when more filter add and function should be component
                    // but I use function because it's small task
                    filterMethod.target === 'filterCompanyName' ?
                        displayByCompanyNames() :
                        displayRecentJobs())));
            })),
            react_1["default"].createElement("div", { className: "display-jobs" },
                react_1["default"].createElement(reactstrap_1.Row, null, jobs && jobs.length > 0 && jobs.map(function (job, index) { return (react_1["default"].createElement(reactstrap_1.Col, { lg: "6", key: index, className: "mb-4" },
                    react_1["default"].createElement(card_1["default"], { companyName: job.companyName, jobTitle: job.jobTitle, shortDesc: job.shortDesc }))); }))))));
};
exports["default"] = JobPage;
