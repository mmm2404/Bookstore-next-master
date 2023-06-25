"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const validate = (email, password)=>{
    if (password.length < 6) {
        return false;
    }
    return true;
};
function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send({
            error: true,
            message: "Only POST"
        });
    }
    const { email , password  } = req.body;
    const validatedInfo = validate(email, password);
    if (!validatedInfo) {
        res.status(400).send({
            error: true,
            message: "Email or password are incorrect"
        });
    } else {
        res.status(200).send({
            success: true,
            token: "testToken"
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
var __webpack_exports__ = (__webpack_exec__(6476));
module.exports = __webpack_exports__;

})();