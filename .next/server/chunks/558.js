"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JE": () => (/* binding */ checkout),
/* harmony export */   "X1": () => (/* binding */ decrementQuantity),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_7": () => (/* binding */ addCartItem),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "g1": () => (/* binding */ incrementQuantity)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    items: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addCartItem (state, action) {
            const itemInCart = state.items.find((item)=>item.id === action.payload.id);
            if (!itemInCart) {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                    delivery: "delivery"
                });
            } else {
                itemInCart.quantity++;
            }
        },
        incrementQuantity: (state, action)=>{
            const item = state.items.find((item)=>item.id === action.payload);
            if (item) {
                item.quantity++;
                item.price.amount++;
            }
        },
        decrementQuantity: (state, action)=>{
            const item = state.items.find((item)=>item.id === action.payload);
            if (item?.quantity === 1) {
                item.quantity = 1;
            } else {
                if (item) {
                    item.quantity--;
                    item.price.amount--;
                }
            }
        },
        removeItem: (state, action)=>{
            let newBasket = state.items.filter((item)=>item.id !== action.payload);
            state.items = newBasket;
        },
        checkout: (state)=>{
            state.items = [];
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);
const { addCartItem , incrementQuantity , decrementQuantity , checkout , removeItem  } = cartSlice.actions;


/***/ })

};
;