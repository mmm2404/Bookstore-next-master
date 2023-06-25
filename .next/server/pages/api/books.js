"use strict";
(() => {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 7349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    let maxResults = 6;
    const { subject , startIndex  } = req.query;
    const apiURL = "https://www.googleapis.com/books/v1/volumes?";
    const apiKey = "AIzaSyAYv6TrMmr1DRuHh5PRlztKi-ATjoGNPMU";
    const gbooksReqParams = new URLSearchParams();
    gbooksReqParams.set("q", `Subject:${subject}`);
    gbooksReqParams.set("key", `${apiKey}`);
    gbooksReqParams.set("startIndex", `${startIndex}`);
    gbooksReqParams.set("maxResults", `${maxResults}`);
    gbooksReqParams.set("langRestrict", `en`);
    gbooksReqParams.set("filter", `paid-ebooks`);
    const response = await fetch(`${apiURL}${gbooksReqParams.toString()}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    const booksData = await response.json();
    res.status(200).send({
        booksData
    });
    if (!req.query.subject) {
        res.status(400).send({
            error: true,
            message: "No subject in query params"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7349));
module.exports = __webpack_exports__;

})();