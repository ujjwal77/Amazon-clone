(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 154:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 318:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 316:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ 255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(318);

__webpack_unused_export__ = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(316));

var _extends2 = _interopRequireDefault(__webpack_require__(154));

var _react = _interopRequireDefault(__webpack_require__(297));

var _head = _interopRequireDefault(__webpack_require__(273));

var _toBase = __webpack_require__(519);

var _imageConfig = __webpack_require__(444);

var _useIntersection = __webpack_require__(749);

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ 391:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 749:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(297);

var _requestIdleCallback = __webpack_require__(391);

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ 189:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
var outline_namespaceObject = require("@heroicons/react/outline");;
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(104);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/slices/basketSlice.js
var basketSlice = __webpack_require__(336);
;// CONCATENATED MODULE: ./src/components/Header.js










function Header() {
  const [session] = (0,client_.useSession)();
  const router = (0,router_namespaceObject.useRouter)();
  const items = (0,external_react_redux_.useSelector)(basketSlice/* selectItems */.a1);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 flex items-center flex-grow sm:flex-grow-0 ml-5",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          onClick: () => router.push('/'),
          src: "http://links.papareact.com/f90",
          width: 150,
          height: 40,
          className: "cursor-pointer "
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: " sm:flex hidden items-center bg-yellow-400 h-10 rounded-md flex-grow cursor-pointer mx-4 ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "p-2 rounded-l-md h-full w-6 flex-grow flex-shrink focus:outline-none px-4",
          type: "text"
        }), /*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.SearchIcon, {
          className: "h-12 p-4 "
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: !session ? client_.signIn : client_.signOut,
          className: "cursor-pointer link flex flex-col items-center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center space-x-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: session ? `Hello, ${session.user.name}` : "Sign In"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: session ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: session.user.image,
                height: 30,
                width: 30,
                className: "rounded-full"
              }) : /*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.UserCircleIcon, {
                className: "h-8 text-white "
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "Account & Lists"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Returns"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "& Orders"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => router.push('/checkout'),
          className: "link relative flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold",
            children: items.length
          }), /*#__PURE__*/jsx_runtime_.jsx(outline_namespaceObject.ShoppingCartIcon, {
            className: "h-10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "hidden md:inline font-extrabold md:text-sm",
            children: "Basket"
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ var components_Header = (Header);

/***/ }),

/***/ 15:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./src/components/Banner.js





function Banner() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false // showIndicators={false}
      ,
      showThumbs: false,
      interval: 5000,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/gi1",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/6ff",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://links.papareact.com/7ma",
          alt: ""
        })
      })]
    })]
  });
}

/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./src/components/Header.js + 2 modules
var Header = __webpack_require__(189);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(832);
// EXTERNAL MODULE: external "react-currency-formatter"
var external_react_currency_formatter_ = __webpack_require__(381);
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/slices/basketSlice.js
var basketSlice = __webpack_require__(336);
;// CONCATENATED MODULE: ./src/components/Product.js








const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({
  id,
  title,
  price,
  description,
  category,
  image
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: rating
  } = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
  const {
    0: hasPrime
  } = (0,external_react_.useState)(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime
    }; // sending product

    dispatch((0,basketSlice/* addToBasket */.H)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400",
      children: category
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "my-3",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/jsx_runtime_.jsx(solid_.StarIcon, {
        className: "h-5 text-yellow-500"
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-xs my-2 line-clamp-2",
      children: description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-5",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_currency_formatter_default()), {
        quantity: price,
        currency: "INR"
      })
    }), hasPrime && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-day Delivery"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: addItemToBasket,
      className: "mt-auto button",
      children: "Add to Basket"
    })]
  });
}

/* harmony default export */ var Product = (Products);
;// CONCATENATED MODULE: ./src/components/ProductFeed.js




function ProductFeed({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: [products.slice(0, 4).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id)), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "md:col-span-full",
      src: "https://links.papareact.com/dyz",
      alt: ""
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-2",
      children: products.slice(4, 5).map(({
        id,
        title,
        price,
        description,
        category,
        image
      }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id))
    }), products.slice(5, 13).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id)), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "md:col-span-2",
      children: products.slice(13, 14).map(({
        id,
        title,
        price,
        description,
        category,
        image
      }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id))
    }), products.slice(14, products.length).map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx(Product, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id))]
  });
}

/* harmony default export */ var components_ProductFeed = (ProductFeed);
;// CONCATENATED MODULE: ./src/pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Amazon 2.0  uk"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(components_ProductFeed, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ 336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": function() { return /* binding */ addToBasket; },
/* harmony export */   "Er": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "r7": function() { return /* binding */ removeGroupedFromBasket; },
/* harmony export */   "a1": function() { return /* binding */ selectItems; },
/* harmony export */   "mS": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* unused harmony exports basketSlice, hydrate */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    // Store actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let pos = state.items.findIndex(item => item.id === action.payload.id);
      let newBasket = [...state.items];

      if (pos > -1) {
        newBasket.splice(pos, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id}) as its not in the basket`);
      }

      state.items = newBasket;
    },
    removeGroupedFromBasket: (state, action) => {
      let newBasket = state.items.filter(item => item.id !== action.payload.id);
      state.items = newBasket;
    }
  }
});
const {
  addToBasket,
  removeFromBasket,
  removeGroupedFromBasket,
  hydrate
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items;
const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["ZP"] = (basketSlice.reducer);

/***/ }),

/***/ 675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(255)


/***/ }),

/***/ 832:
/***/ (function(module) {

"use strict";
module.exports = require("@heroicons/react/solid");;

/***/ }),

/***/ 139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 381:
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(15));
module.exports = __webpack_exports__;

})();