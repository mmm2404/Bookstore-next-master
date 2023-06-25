exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 8615:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "rating_container__JGlAR"
};


/***/ }),

/***/ 6098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/placeholder.9771a36a.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX3+vjl39zduLXcuLbSXVvTPz/FOTJ+VE7GIQ7KAADTOTjMHRDKMCzp4+HQT03QT03QTUvSUlCyNzTo3Nrw7uz2+Pby8O7k3tvo4+Hy8vDl39zn2tjl1NHk1NHdzMnWycbVtbI4hnhfAAAAGXRSTlMAAAAAAAAAAAApQ3aFhoaHkpOnscr4+fv86sVMfQAAAEJJREFUeNoFQIUNgDAAKw5zd/v/SoJzx7bhOPFZx7mzH1TLpeSmIHuIMXQJUX1KvgroNeYcS4MwagxlBNf9Ps97Xz+PzAQcq+YxOAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Raiting)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/Stars/Stars.jsx

const StarComponent = ({ type  })=>{
    const imageDataSource = {
        ratingHighlighted: /*#__PURE__*/ jsx_runtime.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M12 4.5L14.3175 9.195L19.5 9.9525L15.75 13.605L16.635 18.765L12 16.3275L7.365 18.765L8.25 13.605L4.5 9.9525L9.6825 9.195L12 4.5Z",
                fill: "#EBC03F",
                stroke: "#EBC03F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        ratingDefault: /*#__PURE__*/ jsx_runtime.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M12.1053 3.68421L14.7074 8.95579L20.5263 9.80632L16.3158 13.9074L17.3095 19.7011L12.1053 16.9642L6.90105 19.7011L7.89473 13.9074L3.6842 9.80632L9.50315 8.95579L12.1053 3.68421Z",
                fill: "#FCFBF8",
                stroke: "#E2E0DA",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        })
    };
    return imageDataSource[type];
};
/* harmony default export */ const Stars = (StarComponent);

// EXTERNAL MODULE: ./src/components/Stars/rating.module.css
var rating_module = __webpack_require__(8615);
var rating_module_default = /*#__PURE__*/__webpack_require__.n(rating_module);
;// CONCATENATED MODULE: ./src/components/Stars/Raiting.tsx



const Rating = (props)=>{
    const { ratingInPercent , showOutOf  } = props;
    const decimal = ratingInPercent / 20;
    const nonFraction = Math.trunc(decimal);
    const fraction = Number((decimal - nonFraction).toFixed(2));
    const fractionPercent = fraction * 100;
    const numberOfStar = 5;
    const RatingHighlighted = /*#__PURE__*/ jsx_runtime.jsx(Stars, {
        type: "ratingHighlighted"
    });
    const RatingDefault = /*#__PURE__*/ jsx_runtime.jsx(Stars, {
        type: "ratingDefault"
    });
    const showDefaultStar = ()=>{
        return RatingDefault;
    };
    let isShow = true;
    const getStar = (index)=>{
        if (index <= nonFraction - 1) {
            isShow = true;
            return "100%";
        } else if (fractionPercent > 0 && isShow) {
            isShow = false;
            return `${fractionPercent}%`;
        } else {
            return "0%";
        }
    };
    // const isShowOutOfStar = (index: any) => {
    //   if (showOutOf) {
    //     return showOutOf;
    //   }
    //   const isLoopThrough = (fraction === 0 ? nonFraction : nonFraction + 1) - 1;
    //   return index <= isLoopThrough;
    // };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (rating_module_default()).container,
        children: [
            ...new Array(numberOfStar)
        ].map((arr, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        style: {
                            width: getStar(index),
                            overflow: "hidden",
                            position: "absolute"
                        },
                        children: RatingHighlighted
                    }),
                    showDefaultStar()
                ]
            }, index))
    });
};
/* harmony default export */ const Raiting = (Rating);


/***/ })

};
;