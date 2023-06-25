(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
// EXTERNAL MODULE: ./src/store/cartSlice.ts
var cartSlice = __webpack_require__(558);
;// CONCATENATED MODULE: ./src/store/store.ts




// <reference types="redux-persist" />
const persistConfig = {
    key: "root",
    storage: (storage_default())
};
const rootReducer = (0,toolkit_.combineReducers)({
    cart: cartSlice/* default */.ZP
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);
const setupStore = ()=>(0,toolkit_.configureStore)({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        external_redux_persist_namespaceObject.FLUSH,
                        external_redux_persist_namespaceObject.REHYDRATE,
                        external_redux_persist_namespaceObject.PAUSE,
                        external_redux_persist_namespaceObject.PERSIST,
                        external_redux_persist_namespaceObject.PURGE,
                        external_redux_persist_namespaceObject.REGISTER
                    ]
                }
            })
    });
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(setupStore());
/* harmony default export */ const store = (setupStore);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
        store: store(),
        children: /*#__PURE__*/ jsx_runtime.jsx(react_namespaceObject.PersistGate, {
            loading: null,
            persistor: persistor,
            children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,558], () => (__webpack_exec__(7725)));
module.exports = __webpack_exports__;

})();