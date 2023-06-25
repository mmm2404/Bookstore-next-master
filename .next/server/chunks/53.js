exports.id = 53;
exports.ids = [53];
exports.modules = {

/***/ 5896:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container___pZuy",
	"logo": "layout_logo__3lwDq",
	"header": "layout_header__ifbB0",
	"main": "layout_main__E22hH"
};


/***/ }),

/***/ 9447:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "login_container__yJKGg",
	"email": "login_email__BTlQ6",
	"password": "login_password__geb_T",
	"loginBtn": "login_loginBtn__JBs3o",
	"massage": "login_massage__2cIQz"
};


/***/ }),

/***/ 5722:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navigation_container__mi29_",
	"list": "navigation_list__Lz7FS",
	"item": "navigation_item__Xz5T8",
	"user": "navigation_user__o9S9G",
	"cart": "navigation_cart__SpD0w",
	"disabled": "navigation_disabled__PJERm",
	"inCart": "navigation_inCart__lPDkx"
};


/***/ }),

/***/ 6053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\components\\layout\\layout.tsx","import":"Montserrat","arguments":[{"weight":["400"],"subsets":["latin","cyrillic"]}],"variableName":"font"}
var target_path_src_components_layout_layout_tsx_import_Montserrat_arguments_weight_400_subsets_latin_cyrillic_variableName_font_ = __webpack_require__(6087);
var target_path_src_components_layout_layout_tsx_import_Montserrat_arguments_weight_400_subsets_latin_cyrillic_variableName_font_default = /*#__PURE__*/__webpack_require__.n(target_path_src_components_layout_layout_tsx_import_Montserrat_arguments_weight_400_subsets_latin_cyrillic_variableName_font_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/user.svg
/* harmony default export */ const user = ({"src":"/_next/static/media/user.c3034e50.svg","height":15,"width":12,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./public/cart.svg
/* harmony default export */ const cart = ({"src":"/_next/static/media/cart.148d0ccf.svg","height":17,"width":14,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/components/navigation/navigation.module.css
var navigation_module = __webpack_require__(5722);
var navigation_module_default = /*#__PURE__*/__webpack_require__.n(navigation_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/loginpage/login.module.css
var login_module = __webpack_require__(9447);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/loginpage/login.tsx




function LoginPage() {
    const [passwordValue, setPasswordValue] = (0,external_react_.useState)("");
    const [emailValue, setEmailValue] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const login = (e)=>{
        e.preventDefault();
        router.push("/profile");
    };
    const handlePasswordInput = (e)=>{
        setPasswordValue(e.target.value);
    };
    const handleEmailInput = (e)=>{
        setEmailValue(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (login_module_default()).container,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Log in"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    action: "",
                    method: "post",
                    name: "login",
                    onSubmit: login,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (login_module_default()).email,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    htmlFor: "email",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    onChange: handleEmailInput,
                                    value: emailValue,
                                    placeholder: "example.@mail.com",
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (login_module_default()).password,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                    htmlFor: "psw",
                                    children: "Password"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    type: "password",
                                    id: "psw",
                                    name: "psw",
                                    onChange: handlePasswordInput,
                                    value: passwordValue,
                                    minLength: 6,
                                    required: true
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: (login_module_default()).massage,
                                    style: {
                                        display: `${passwordValue.length >= 6 ? "none" : "block"}`
                                    },
                                    children: "Your password must be at least 6 characters long"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: (login_module_default()).loginBtn,
                            type: "submit",
                            children: "Log in"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const login = (LoginPage);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./src/store/redux.ts
var redux = __webpack_require__(8085);
;// CONCATENATED MODULE: ./src/components/navigation/navigation.tsx











function Navigation() {
    const router = (0,router_.useRouter)();
    const [menuActive, setMenuActive] = (0,external_react_.useState)(false);
    const { items  } = (0,redux/* useAppSelector */.C)((state)=>state.cart);
    console.log(items);
    const handleLoginMenu = ()=>{
        setMenuActive(!menuActive);
    };
    const getTotalQuantity = ()=>{
        let total = 0;
        items.forEach((item)=>{
            total += item.quantity;
        });
        return total;
    };
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: (navigation_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
            className: (navigation_module_default()).list,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: (navigation_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "./",
                        className: external_clsx_default()({
                            [(navigation_module_default()).disabled]: router.asPath === "./"
                        }),
                        children: "books"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: (navigation_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "./audio",
                        children: "Audiobooks"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: (navigation_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "./stationery",
                        children: "Stationery & gifts"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: (navigation_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "./blog",
                        children: "blog"
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("li", {
                    className: (navigation_module_default()).item,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        className: (navigation_module_default()).user,
                        onClick: handleLoginMenu,
                        src: user,
                        alt: "Personal account "
                    })
                }),
                menuActive && /*#__PURE__*/ jsx_runtime.jsx(login, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                    className: (navigation_module_default()).item,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            onClick: ()=>router.push("/shoppingcart"),
                            className: (navigation_module_default()).cart,
                            src: cart,
                            alt: "Your shopping cart"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (navigation_module_default()).inCart,
                            children: getTotalQuantity() || 0
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/layout/layout.module.css
var layout_module = __webpack_require__(5896);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./src/components/layout/layout.tsx








function Layout({ children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (target_path_src_components_layout_layout_tsx_import_Montserrat_arguments_weight_400_subsets_latin_cyrillic_variableName_font_default()).className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Bookstore"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "SkillFactory Next.js project"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "author",
                        content: "MArina"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (layout_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                        className: (layout_module_default()).header,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                className: external_clsx_default()((layout_module_default()).logo, {
                                    [(layout_module_default()).disabled]: router.asPath === "./"
                                }),
                                href: "./",
                                children: "Bookshop"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Navigation, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        className: (layout_module_default()).main,
                        children: children
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);


const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;