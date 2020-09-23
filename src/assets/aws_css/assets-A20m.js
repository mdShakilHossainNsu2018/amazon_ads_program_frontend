!function (modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {i: moduleId, l: !1, exports: {}};
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports
    }

    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {enumerable: !0, get: getter})
    }, __webpack_require__.r = function (exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(exports, "__esModule", {value: !0})
    }, __webpack_require__.t = function (value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key]
        }.bind(null, key));
        return ns
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module.default
        } : function getModuleExports() {
            return module
        };
        return __webpack_require__.d(getter, "a", getter), getter
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }, __webpack_require__.p = "https://d3216uwaav9lg7.cloudfront.net/", __webpack_require__(__webpack_require__.s = 96)
}({
    1: function (module, exports, __webpack_require__) {
    }, 17: function (module, exports) {
        window.P.when("jQuery", "ready").register("swiped-events", (function ($) {
            "function" != typeof window.CustomEvent && (window.CustomEvent = function (event, params) {
                var newParams = params || {bubbles: !1, cancelable: !1, detail: null},
                    evt = document.createEvent("CustomEvent");
                return evt.initCustomEvent(event, newParams.bubbles, newParams.cancelable, newParams.detail), evt
            }, window.CustomEvent.prototype = window.Event.prototype);
            var xDown = null, yDown = null, xDiff = null, yDiff = null, timeDown = null, startEl = null;
            document.addEventListener("touchstart", (function handleTouchStart(e) {
                "true" !== e.target.getAttribute("data-swipe-ignore") && (startEl = e.target, timeDown = Date.now(), xDown = e.touches[0].clientX, yDown = e.touches[0].clientY, xDiff = 0, yDiff = 0)
            }), !1), document.addEventListener("touchmove", (function handleTouchMove(e) {
                if (xDown && yDown) {
                    var xUp = e.touches[0].clientX, yUp = e.touches[0].clientY;
                    xDiff = xDown - xUp, yDiff = yDown - yUp
                }
            }), !1), document.addEventListener("touchend", (function handleTouchEnd(e) {
                if (startEl === e.target) {
                    var timeDiff = Date.now() - timeDown, changedTouches = e.changedTouches || e.touches || [],
                        eventType = "";
                    if (Math.abs(xDiff) > Math.abs(yDiff) ? Math.abs(xDiff) > 20 && timeDiff < 500 && (eventType = xDiff > 0 ? "swiped-left" : "swiped-right") : Math.abs(yDiff) > 20 && timeDiff < 500 && (eventType = yDiff > 0 ? "swiped-up" : "swiped-down"), "" !== eventType) {
                        var eventData = {
                            dir: eventType.replace(/swiped-/, ""),
                            xStart: parseInt(xDown, 10),
                            xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),
                            yStart: parseInt(yDown, 10),
                            yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10)
                        };
                        startEl.dispatchEvent(new CustomEvent("swiped", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: eventData
                        })), startEl.dispatchEvent(new CustomEvent(eventType, {
                            bubbles: !0,
                            cancelable: !0,
                            detail: eventData
                        }))
                    }
                    xDown = null, yDown = null, timeDown = null
                }
            }), !1)
        }))
    }, 18: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            var articleTitle = function generateArticleTitle() {
                    var articleTitle = "";
                    return $("h1").text() ? articleTitle = $("h1").text() : document.title && (articleTitle = document.title.length > 25 ? "".concat(document.title.substring(0, 25), "...") : document.title), articleTitle
                }(), currentMarketplace = $("body").data("countrycode") || "",
                currentRefTag = "?ref_=a20m_".concat(currentMarketplace, "_blgrtn"),
                currentURL = encodeURI("https://".concat(window.location.host).concat(window.location.pathname).concat(currentRefTag));
            $(".social-share-link").each((function (index, element) {
                var elementURL = $(element).attr("href");
                $(element).attr("href", function generateShareUrl(url) {
                    var siteTitle = "Amazon Advertising: Solutions to find, attract, and engage customers",
                        siteSummary = "Amazon Advertising: Ad solutions to find, attract, and engage customers throughout their journey",
                        emailSubject = "".concat(articleTitle, " from Amazon Advertising"),
                        emailBody = "Learn more about ".concat(siteSummary, " "),
                        twitterMessage = "".concat(articleTitle, " | ").concat(siteTitle, " "), newUrl = url;
                    return url.includes("twitter.com") && (newUrl = "https://twitter.com/home?status=".concat(encodeURI(twitterMessage))), url.includes("facebook.com") && (newUrl = "https://www.facebook.com/sharer/sharer.php?u="), url.includes("linkedin.com") && (newUrl = "https://www.linkedin.com/shareArticle?mini=true&title=".concat(encodeURI(siteTitle), "&summary=").concat(encodeURI(siteSummary), "&source=&url=")), url.includes("mailto:") && (newUrl = "mailto:?subject=".concat(encodeURI(emailSubject), "&body=").concat(encodeURI(emailBody))), newUrl + currentURL
                }(elementURL))
            }));
            var footerHeight = $("footer.site-footer").height() || 0, docHeight = $(document).height();
            $(window).bind("scroll", (function () {
                $(document).height() > docHeight && (docHeight = $(document).height()), docHeight - footerHeight <= $(window).height() + $(window).scrollTop() + 36 ? $(".share-container").addClass("scrolled-end") : $(".share-container").removeClass("scrolled-end")
            }))
        }))
    }, 19: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            $(".reading-progress-container").closest(".container").css("display", "block"), $(window).bind("scroll", (function () {
                var windowScrollTop = $(window).scrollTop(), docHeight = $(document).height(),
                    footerHeight = $("footer.site-footer").height() || 0, windowHeight = $(window).height(),
                    totalScrolled = docHeight - windowHeight - footerHeight;
                windowHeight + footerHeight > docHeight && (totalScrolled = 100);
                var percentageScrolled = Math.round(windowScrollTop / totalScrolled * 100);
                percentageScrolled > 100 && (percentageScrolled = 100);
                var headerHeight = $("header.header-main").height() || 0;
                $(window).scrollTop() > headerHeight ? $(".reading-progress-container").addClass("show") : $(".reading-progress-container").removeClass("show"), $(".reading-progress-container .progress-bar").css("width", "".concat(percentageScrolled, "%"))
            }))
        }))
    }, 20: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            var isRTL = "rtl" === $("html").attr("dir") || "rtl" === $("div .content").attr("dir");
            $(".carousel").each((function (index, element) {
                var pageSize = $(element).hasClass("carousel--page-size-1") ? 1 : 3,
                    totalItems = $(element).find(".carousel__item").length,
                    totalPages = Math.ceil(totalItems / pageSize), currentPage = 1;
                totalPages > 1 ? $(element).find(".carousel__nav").children(".nav__button").click((function (e) {
                    var moveNumber = currentPage * pageSize * 100, moveValue = "".concat(moveNumber, "%"),
                        transformValue = moveValue, buttonDirection = isRTL ? "prev" : "next";
                    $(e.target).hasClass(buttonDirection) || $(e.target).parents(".nav__button").hasClass(buttonDirection) ? currentPage !== totalPages ? (currentPage++, transformValue = isRTL ? "".concat(moveValue) : "-".concat(moveValue)) : (currentPage = 1, transformValue = 0) : (1 !== currentPage ? currentPage-- : currentPage = totalPages, moveNumber = (currentPage - 1) * pageSize * 100, transformValue = isRTL ? "".concat(moveNumber, "%") : "-".concat(moveNumber, "%")), $(element).find(".carousel__track").children("div").css("transform", "translateX(".concat(transformValue, ")"))
                })) : ($(element).find(".carousel__nav").hide(), $(element).find(".carousel__body").css("width", "100%"))
            }))
        }))
    }, 21: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            if ($("body").find(".aos-wrapper").length > 0) {
                var htmlHead = document.getElementsByTagName("head")[0], aosStyle = document.createElement("link");
                aosStyle.rel = "stylesheet", aosStyle.type = "text/css", aosStyle.href = "https://m.media-amazon.com/images/G/03/amazonservices/aos.css", aosStyle.media = "all", htmlHead.appendChild(aosStyle);
                var aosScript = document.createElement("script");
                aosScript.type = "text/javascript", aosScript.src = "https://m.media-amazon.com/images/G/03/amazonservices/aos.js", htmlHead.appendChild(aosScript), aosScript.onload = function () {
                    AOS.init()
                }
            }
        }))
    }, 22: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            function closingTimeActions(popup) {
                $("body").css("overflow", "auto");
                var videoInPopup = $(popup).find("video");
                videoInPopup && $(videoInPopup).trigger("pause"), $(popup).addClass("hide")
            }

            $(".popup-layover").closest(".container").css("display", "block"), $(".popup-layover").bind("click", (function (_ref) {
                var target = _ref.target;
                $(target).hasClass("popup-layover") && closingTimeActions(target)
            })), $(".close-popup").bind("click", (function (_ref2) {
                var target = _ref2.target,
                    popupId = ($(target).hasClass("close-popup") ? $(target) : $(target).closest(".close-popup")).data("popup-id");
                closingTimeActions("#".concat(popupId))
            })), $(".popup-link").bind("click", (function (e) {
                e.preventDefault();
                var popupId = $(e.target).closest(".popup-link").data("popup-id");
                $("body").css("overflow", "hidden"), $("#".concat(popupId)).removeClass("hide")
            }))
        }))
    }, 23: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            function setMinHeight(element, selector) {
                var maxHeight = 1;
                $(element).find(selector).each((function (index, el) {
                    $(el).height() > maxHeight && (maxHeight = $(el).height())
                })), $(element).find(selector).css("min-height", maxHeight)
            }

            (window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth) > 767 && $(window).load((function () {
                $(".tile-container:not(.container--one-col)").each((function (index, element) {
                    setMinHeight(element, ".tile__title"), setMinHeight(element, ".tile__content")
                }))
            }))
        }))
    }, 24: function (module, exports) {
        window.P.when("jQuery", "ready").execute((function ($) {
            var headerHeight = $("header.header-main").height() || 0;
            $('a[href^="#"]').click((function (e) {
                var scrollTarget = $(e.target).attr("href");
                !scrollTarget || $(e.target).hasClass("tab__link") || $(e.target).hasClass("popup-link") || ("#" !== scrollTarget ? $("html, body").animate({scrollTop: $(scrollTarget).offset().top - headerHeight}, 500) : e.preventDefault())
            }));
            var currentHash = window.location.hash;
            $(window).load((function () {
                currentHash && $(currentHash) && !$(currentHash).hasClass("tab__content") && $("html, body").animate({scrollTop: $(currentHash).offset().top - headerHeight}, 250)
            }))
        }))
    }, 82: function (module, exports, __webpack_require__) {
    }, 96: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var TabContainer_asset_namespaceObject = {};
        __webpack_require__.r(TabContainer_asset_namespaceObject), __webpack_require__.d(TabContainer_asset_namespaceObject, "logCsaTabContainerEvent", (function () {
            return asset_logCsaTabContainerEvent
        }));
        var ContentFilter_asset_namespaceObject = {};
        __webpack_require__.r(ContentFilter_asset_namespaceObject);
        var ContentFilterV2_asset_namespaceObject = {};
        __webpack_require__.r(ContentFilterV2_asset_namespaceObject), __webpack_require__.d(ContentFilterV2_asset_namespaceObject, "contentFilterV2", (function () {
            return contentFilterV2
        }));
        var Form_asset_namespaceObject = {};
        __webpack_require__.r(Form_asset_namespaceObject);
        var Accordion_asset_namespaceObject = {};
        __webpack_require__.r(Accordion_asset_namespaceObject), __webpack_require__.d(Accordion_asset_namespaceObject, "accordionAsset", (function () {
            return asset_accordionAsset
        })), __webpack_require__.d(Accordion_asset_namespaceObject, "makeCsaAccordionEventObject", (function () {
            return asset_makeCsaAccordionEventObject
        }));
        var ProductFinder_asset_namespaceObject = {};
        __webpack_require__.r(ProductFinder_asset_namespaceObject);
        var Video_asset_namespaceObject = {};
        __webpack_require__.r(Video_asset_namespaceObject), __webpack_require__.d(Video_asset_namespaceObject, "makeCsaVideoEventObject", (function () {
            return asset_makeCsaVideoEventObject
        }));
        var HeroCarousel_asset_namespaceObject = {};
        __webpack_require__.r(HeroCarousel_asset_namespaceObject), __webpack_require__.d(HeroCarousel_asset_namespaceObject, "heroCarouselAsset", (function () {
            return asset_heroCarouselAsset
        }));
        var A20mExtenderAsset_namespaceObject = {};
        __webpack_require__.r(A20mExtenderAsset_namespaceObject), __webpack_require__.d(A20mExtenderAsset_namespaceObject, "A20mExtenderAsset", (function () {
            return A20mExtenderAsset
        }));
        __webpack_require__(1), __webpack_require__(82), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19);

        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function (sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable
                }))), keys.push.apply(keys, symbols)
            }
            return keys
        }

        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj
        }

        function _typeof(obj) {
            return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof(obj) {
                return typeof obj
            } : function _typeof(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            })(obj)
        }

        var formatEventLocation = function formatEventLocation() {
            var filteredTextArr = window.location.pathname.split("/").map((function (str) {
                var formattedStr = str.replace(/(%[0-9]+)/g, "-");
                return formattedStr = formattedStr.toLowerCase().replace(/[\W_-]/g, "")
            }));
            return 0 === (filteredTextArr = filteredTextArr.filter((function (str) {
                return "" !== str
            }))).length ? "default-gateway" : filteredTextArr.join("-")
        }, a20mCsaService_logCsaCustomEvent = function logCsaCustomEvent(formattedEventDataObject) {
            if (window.csa) {
                if (!function isEventDataObjectEmpty(obj) {
                    return null == obj || "object" === _typeof(obj) && 0 === Object.keys(obj).length
                }(formattedEventDataObject)) {
                    if (!formattedEventDataObject.ectComponentTag) return;
                    window.csa("Events", {producerId: "a20m"})("log", function _objectSpread(target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? ownKeys(Object(source), !0).forEach((function (key) {
                                _defineProperty(target, key, source[key])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function (key) {
                                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                            }))
                        }
                        return target
                    }({
                        schemaId: "a20m.A20mCustomEventData.2",
                        eventLocation: formatEventLocation()
                    }, formattedEventDataObject), {ent: "all"})
                }
            } else console.log("CSA logging:", formattedEventDataObject)
        }, asset_logCsaTabContainerEvent = function logCsaTabContainerEvent(tabId, eventAction, ectComponentTag) {
            a20mCsaService_logCsaCustomEvent({
                eventType: "tab_container",
                ectComponentTag: ectComponentTag,
                eventDetail: {tabId: tabId, action: eventAction}
            })
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            $(".tab__title:first .tab__link").addClass("active"), $(".tab-container__contents .container:first .tab__content").addClass("active"), $(".tab__link").click((function (e) {
                e.stopPropagation();
                var thisEl = e.target, tabId = thisEl.getAttribute("href"), tabContent = $(tabId),
                    ectComponentTag = $(thisEl).closest("div.container").attr("data-ect-component-tag");
                $(thisEl).closest(".tab-container").find(".tab__link").removeClass("active"), $(thisEl).closest(".tab-container").find(".tab__content").removeClass("active");
                var headerHeight = $("header.header-main").height() || 0;
                $("html, body").animate({scrollTop: $(thisEl).closest(".tab-container").offset().top - headerHeight}, 500), $(thisEl).addClass("active"), tabContent.addClass("active"), asset_logCsaTabContainerEvent(tabId, "click", ectComponentTag)
            }));
            var currentHash = window.location.hash;
            if (currentHash && $(currentHash) && $(currentHash).hasClass("tab__content")) {
                $(currentHash).closest(".tab-container").find(".tab__link").removeClass("active"), $(currentHash).closest(".tab-container").find(".tab__content").removeClass("active"), $('.tab__link[href="'.concat(currentHash, '"]')).addClass("active"), $(currentHash).addClass("active");
                var ectComponentTag = $(currentHash).closest("div.container").attr("data-ect-component-tag");
                asset_logCsaTabContainerEvent(currentHash, "predefined", ectComponentTag)
            }
        }));
        __webpack_require__(20), __webpack_require__(21);

        function _toConsumableArray(arr) {
            return function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) return _arrayLikeToArray(arr)
            }(arr) || function _iterableToArray(iter) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter)
            }(arr) || function _unsupportedIterableToArray(o, minLen) {
                if (!o) return;
                if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                "Object" === n && o.constructor && (n = o.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(o);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
            }(arr) || function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function _arrayLikeToArray(arr, len) {
            (null == len || len > arr.length) && (len = arr.length);
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        function asset_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj
        }

        function asset_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        window.P.when("jQuery", "ready").execute((function ($) {
            var CF = function () {
                function CF() {
                    var _this = this;
                    !function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                    }(this, CF), asset_defineProperty(this, "stringifyCfTags", (function () {
                        return Object.keys(_this.cfFilters).map((function (key) {
                            return _this.cfFilters[key].map((function (item) {
                                return item.tagName
                            }))
                        })).filter((function (tags) {
                            return 0 !== tags.length
                        })).join(",")
                    })), asset_defineProperty(this, "logCsaContentFilterEvent", (function (category, filters, eventAction) {
                        var formattedEventDataObject = {
                            eventType: "content_filter",
                            ectComponentTag: _this.ectComponentTag,
                            eventDetail: {category: category, filters: filters, action: eventAction}
                        };
                        a20mCsaService_logCsaCustomEvent(formattedEventDataObject)
                    })), this.cfFilters = {}, this.isFiltersExpanded = !1, this.firstLoadOfCF = !0, this.resultText = $(".cf-results").text() || "results for", this.pageType = $(".cf-container").data("subpage-type"), this.deviceType = $(".a20m-body").data("devicetype"), this.viewFullArticleLinkText = $(".cf-container").data("view-article-text") || "Read More", this.noResultErrorMessage = $(".cf-container").data("no-result-error-message") || "", this.technicalDifficultiesErrorMessage = $(".cf-container").data("technical-difficulties-error-message") || "", this.cfRefTag = $(".cf-container").data("ref-tag") || "", this.isDev = window.location.hostname.indexOf("beta") >= 0 || window.location.hostname.indexOf("integ") >= 0, this.articlePerRow = $(".cf-article-list").data("article-per-row"), this.articleTemplate = $(".cf-article-list").data("article-template"), this.subPageTypeTranslationMap = $(".cf-article-list").data("subpage-types-translation-map") || [], this.minVisibleFilter = $(".cf-selected-options").data("min-visible-filter") || 3, this.currentTotalSelectedFilter = 0, this.ectComponentTag = $(".cf-container").closest("div.container").attr("data-ect-component-tag")
                }

                return function _createClass(Constructor, protoProps, staticProps) {
                    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor
                }(CF, [{
                    key: "handleAllInputChange", value: function handleAllInputChange() {
                        var _this2 = this;
                        $(".cf-select").each((function (i, filter) {
                            var filterName = $(filter).attr("data-id"), btn = $(filter).find(".cf-multi-button"),
                                currFilter = $(filter).find(".cf-multi"), filterItems = currFilter.find("input");
                            $(btn).click((function () {
                                var isExpanded = $(currFilter).hasClass("cf-multi-active");
                                if ($(".cf-multi").removeClass("cf-multi-active"), !isExpanded && ($(currFilter).toggleClass("cf-multi-active"), $(".cf-small-screen").length > 0)) {
                                    var selectFilterPosition = $(filter).offset().left,
                                        currFilterPosition = selectFilterPosition + $(currFilter).outerWidth(),
                                        bodyWidth = $("body").width();
                                    currFilterPosition > bodyWidth ? $(currFilter).css("left", bodyWidth - $(currFilter).outerWidth()) : $(currFilter).css("left", selectFilterPosition > -1 ? selectFilterPosition : 0)
                                }
                            })), $(filterItems).change((function (e) {
                                var temp = [], _e$target = e.target, tagName = _e$target.name,
                                    checked = _e$target.checked;
                                $(filterItems).each((function (index, item) {
                                    $(item).is(":checked") && temp.push({
                                        tagName: $(item).attr("name"),
                                        value: $(item).val()
                                    })
                                })), checked ? _this2.logCsaContentFilterEvent(filterName, tagName, "check") : _this2.logCsaContentFilterEvent(filterName, tagName, "uncheck"), _this2.cfFilters[filterName] = temp, _this2.populateSelectedCF(""), $(".cf-multi").removeClass("cf-multi-active")
                            }))
                        }))
                    }
                }, {
                    key: "fetchContents", value: function fetchContents(preDefinedFilter) {
                        var _this3 = this,
                            url = "https://a20m.".concat(this.isDev ? "integ." : "", "amazon.com/a20m-api/v1/pages"),
                            locale = "";
                        if ("undefined" != typeof activeLocale && (locale = activeLocale), preDefinedFilter.match(/\?subpageType=[a-zA-Z]/g)) {
                            var currParamsList = preDefinedFilter.split("&");
                            url += currParamsList.filter((function (s) {
                                return !s.startsWith("locale=")
                            })).join("&"), url += "&locale=".concat(locale)
                        } else preDefinedFilter.match(/\?((.*=.*)(&?))+/g) ? url += "?subpageType=".concat(this.pageType, "&locale=").concat(locale) : (url += "?subpageType=".concat(this.pageType, "&locale=").concat(locale), Object.keys(this.cfFilters).forEach((function (key) {
                            var currFilterType = _this3.cfFilters[key];
                            currFilterType && currFilterType.length && (url += "&".concat(key, "=").concat(currFilterType.map((function (item) {
                                return item.value
                            })).toString()))
                        })), window.history.pushState({}, document.title, "".concat(window.location.origin).concat(window.location.pathname).concat(url.split("?")[1] ? "?".concat(url.split("?")[1]) : "")));
                        var cfArticleListContainer = $(".cf-article-list > div.columns-wrapper"),
                            placeholderHeight = Math.max(cfArticleListContainer.height(), 175);
                        cfArticleListContainer.html('<div class="cf-article-list-placeholder" style="height:'.concat(placeholderHeight, 'px">\n          <div class="loader"> Loading...</div>\n        </div>')), $(".cf-results").css("display", "none"), $.get(url, (function (articleList) {
                            _this3.renderArticles(articleList, cfArticleListContainer, locale);
                            var cfContainer = $(".cf-container");
                            if (_this3.firstLoadOfCF) !preDefinedFilter.match(/related/g) && _this3.addFiltersOnFilters(articleList), _this3.firstLoadOfCF = !1; else if (cfContainer.length > 0 && cfContainer.hasClass("cf-fixed")) {
                                var articleContainer = document.querySelector(".cf-article-list"),
                                    headerMain = document.querySelector(".header-main"),
                                    scrollToPosition = (null != articleContainer ? articleContainer.offsetTop : 0) - (null != headerMain ? headerMain.offsetHeight : 0);
                                cfContainer.hasClass("cf-small-screen") && (scrollToPosition -= cfContainer.height()), window.scroll({
                                    top: scrollToPosition,
                                    behavior: "smooth"
                                })
                            }
                        })).fail((function (jqXHR, textStatus, errorThrown) {
                            if (window.ueLogError) {
                                var additionalInfo = {
                                    logLevel: "ERROR",
                                    attribution: "a20m_cf-no-results_loading-failed",
                                    message: "Error Loading: [".concat(textStatus, ", ").concat(jqXHR.status, "] ").concat(errorThrown)
                                };
                                window.ueLogError(_this3.technicalDifficultiesErrorMessage, additionalInfo)
                            }
                            if (window.ue) {
                                var metricName = "a20m_cf-no-results_loading-failed";
                                ue.count(metricName, (ue.count(metricName) || 0) + 1)
                            }
                            cfArticleListContainer.html('<div class="align-center cf-no-results">\n            '.concat(_this3.technicalDifficultiesErrorMessage && _this3.technicalDifficultiesErrorMessage.split(".").join(".<br />"), "\n          </div>"))
                        }))
                    }
                }, {
                    key: "imageTitleOverlapTemplate",
                    value: function imageTitleOverlapTemplate(fallbackArticleImage, featuredImage, title, description, url, articleUrl, publishDate) {
                        return '<div class="container a20m '.concat(this.deviceType, '">\n          <div class="container padding-sides has-max-width">\n            <div class="article-item-container"><img class="article__img-feature" src="').concat(featuredImage || fallbackArticleImage, '" alt="">\n              <div class="article__content">\n                ').concat(title ? '<h5 class="article__title heading">'.concat(title, "</h5>") : "", "\n                ").concat(description ? '<p class="text article__intro">'.concat(description, "</p>") : "", "\n                ").concat(url ? '<div class="article__readmore"><a href="'.concat(articleUrl, '" title="').concat(this.viewFullArticleLinkText, '" class="link link-type-button-secondary">').concat(this.viewFullArticleLinkText, "</a></div>") : "", "\n                ").concat(publishDate ? '<time class="article__date">'.concat(publishDate, "</time>") : "", "\n              </div>\n            </div>\n          </div>\n        </div>")
                    }
                }, {
                    key: "separateImageWithSubpageTypeTemplate",
                    value: function separateImageWithSubpageTypeTemplate(subPageType, fallbackArticleImage, featuredImage, title, description, url, articleUrl) {
                        var subpageTypeFromMap = this.subPageTypeTranslationMap.find((function (s) {
                            return s.key === subPageType
                        })), translatedSubpageType = subpageTypeFromMap && subpageTypeFromMap.value || subPageType;
                        return '<div class="container a20m '.concat(this.deviceType, '">\n          <div class="container padding-sides has-max-width">\n            <div class="article-item-container separate-image"><img class="article__img-feature" src="').concat(featuredImage || fallbackArticleImage, '" alt="">\n              <div class="article__content">\n                ').concat(subPageType ? '<p class="text article__intro">'.concat(translatedSubpageType.toUpperCase(), "</p>") : "", "\n                ").concat(title ? '<h5 class="article__title heading">'.concat(title, "</h5>") : "", "\n                ").concat(description ? '<p class="text article__intro">'.concat(description, "</p>") : "", "\n                ").concat(url ? '<div class="article__readmore"><a href="'.concat(articleUrl, '" title="').concat(this.viewFullArticleLinkText, '" class="link link-type-button-secondary">').concat(this.viewFullArticleLinkText, "</a></div>") : "", "\n              </div>\n            </div>\n          </div>\n        </div>")
                    }
                }, {
                    key: "renderArticles", value: function renderArticles(articleList, cfArticleListContainer, locale) {
                        var articleContainerHtml, _this4 = this,
                            fallbackArticleImage = "https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/blog/navigation_library._CB440902838_.jpg",
                            ref = this.cfRefTag ? this.cfRefTag : "cf_".concat(this.pageType.replace(" ", "_").toLocaleLowerCase(), "_list"),
                            articlesHtml = Array.isArray(articleList) ? articleList.map((function (_ref) {
                                var subPageType = _ref.subPageType, featuredImage = _ref.featuredImage,
                                    title = _ref.title, description = _ref.description, url = _ref.url,
                                    publishDate = _ref.publishDate, articleUrl = "#";
                                try {
                                    articleUrl = url.split("/"), locale && articleUrl.splice(2, 0, locale), articleUrl = "https:/".concat(articleUrl.join("/"), "?ref_=").concat(ref)
                                } catch (e) {
                                }
                                return "separate-image-with-subpageType" === _this4.articleTemplate ? _this4.separateImageWithSubpageTypeTemplate(subPageType, fallbackArticleImage, featuredImage, title, description, url, articleUrl) : _this4.imageTitleOverlapTemplate(fallbackArticleImage, featuredImage, title, description, url, articleUrl, publishDate)
                            })).join("") : "";
                        if ("" === articlesHtml) this.logCsaContentFilterEvent("", this.stringifyCfTags(), "no_result"), articleContainerHtml = '\n          <div class="align-center cf-no-results">\n            '.concat(this.noResultErrorMessage && this.noResultErrorMessage.split(".").join(".<br />"), "\n          </div>"); else {
                            var _ref2;
                            (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Object.keys(this.cfFilters).map((function (filter) {
                                return _this4.cfFilters[filter]
                            })))).length > 0 && ($(".cf-results").text("".concat(articleList.length, " ").concat(this.resultText)), $(".cf-results").css("display", "inline-block"));
                            var columnsClassName = "three" === this.articlePerRow ? "columns-container columns-container--third columns-container--limit-width columns-container--".concat(this.deviceType) : "columns-container columns-container--half columns-container--limit-width columns-container--".concat(this.deviceType);
                            articleContainerHtml = '<div class="'.concat(columnsClassName, '">').concat(articlesHtml, "</div>")
                        }
                        cfArticleListContainer.html(articleContainerHtml)
                    }
                }, {
                    key: "addFiltersOnFilters", value: function addFiltersOnFilters(articleList) {
                        var articleTags = {};
                        $(".cf-select").each((function (i, element) {
                            articleTags[$(element).data("id")] = []
                        })), Array.isArray(articleList) && articleList.forEach((function (article) {
                            Object.keys(articleTags).forEach((function (key) {
                                articleTags[key] = articleTags[key].concat(article[key])
                            }))
                        })), $(".cf-select").each((function (i, element) {
                            var dataId = $(element).data("id");
                            articleTags[dataId] = new Set(articleTags[dataId]), $(element).find("li input").each((function (idx, inputElm) {
                                var value = $(inputElm).val();
                                articleTags[dataId].has(value) || ($(inputElm).attr("disabled", !0), $(inputElm).parent().addClass("disabled"))
                            }))
                        }))
                    }
                }, {
                    key: "addCFRemove", value: function addCFRemove() {
                        var _this5 = this;
                        $(".cf-pill").click((function (e) {
                            var key = $(e.target).attr("key"), value = $(e.target).attr("value"),
                                tagName = $(e.target).attr("name");
                            _this5.cfFilters[key] = _this5.cfFilters[key].filter((function (item) {
                                return item.value !== value
                            })), _this5.uncheckCFItem(key, value), _this5.logCsaContentFilterEvent(key, tagName, "remove"), _this5.populateSelectedCF("")
                        }))
                    }
                }, {
                    key: "positionCF", value: function positionCF() {
                        $(".cf-small-screen").length > 0 && ($(".a20m-body").css("paddingTop", $(".cf-container").height() + $("header").height()), $(".a20m-alert-message.am-active").length > 0 ? $(".cf-container").css("top", $("header").height() + $(".a20m-alert-message.am-active").height()) : $(".cf-container").css("top", $("header").height()))
                    }
                }, {
                    key: "displayCFFilters", value: function displayCFFilters() {
                        var _this6 = this, filterBtns = "", shortFilterBtns = "", totalFilters = 0;
                        if (Object.keys(this.cfFilters).forEach((function (key) {
                            var currBtn = ".cf-select[data-id*='".concat(key, "'] .cf-multi-button"),
                                tempCurrBtnText = "".concat($(currBtn).text().trim(), "()"),
                                index = tempCurrBtnText.indexOf("("), selectedLen = _this6.cfFilters[key].length;
                            0 !== selectedLen ? $(currBtn).text("".concat(tempCurrBtnText.substr(0, index), " (").concat(selectedLen, ")")) : $(currBtn).text(tempCurrBtnText.substr(0, index)), _this6.cfFilters[key].forEach((function (cfItem) {
                                totalFilters += 1;
                                var tempBtn = "<button key='".concat(key.trim(), "' value='").concat(cfItem.value.trim(), "' class='cf-pill' name='").concat(cfItem.tagName, "'>").concat(cfItem.value, " &#10005;</button>");
                                totalFilters <= _this6.minVisibleFilter && (shortFilterBtns += tempBtn), filterBtns += tempBtn
                            }))
                        })), totalFilters > 0 ? ($(".cf-clear-button").css("display", "inline-block"), $(".cf-small-screen .cf-selected").css("display", "block")) : ($(".cf-clear-button").css("display", "none"), $(".cf-small-screen .cf-selected").css("display", "none")), this.currentTotalSelectedFilter = totalFilters, $(".cf-container").hasClass("cf-small-screen")) $(".cf-selected-options").html(filterBtns); else {
                            if (totalFilters > this.minVisibleFilter) {
                                var hiddenFilters = totalFilters - this.minVisibleFilter;
                                shortFilterBtns += "<span class='cf-show-full-filters'>and ".concat(hiddenFilters, " more</span>"), filterBtns += "<span class='cf-show-short-filters'>hide ".concat(hiddenFilters, " filters</span>")
                            }
                            this.isFiltersExpanded ? $(".cf-selected-options").html(filterBtns) : $(".cf-selected-options").html(shortFilterBtns), this.filterListToggleListener(shortFilterBtns, filterBtns)
                        }
                        this.positionCF(), this.addCFRemove()
                    }
                }, {
                    key: "populateSelectedCF", value: function populateSelectedCF(preDefinedFilter) {
                        this.fetchContents(preDefinedFilter), this.firstLoadOfCF && this.populateCfFiltersFromUrl(preDefinedFilter), this.displayCFFilters()
                    }
                }, {
                    key: "populateCfFiltersFromUrl", value: function populateCfFiltersFromUrl(predefinedFilter) {
                        var _this7 = this;
                        if (predefinedFilter) {
                            var urlParams = {}, hasPredefinedTagsFromUrl = !1;
                            predefinedFilter.split("&").forEach((function (part) {
                                var item = part.split("=");
                                urlParams[item[0]] = decodeURIComponent(item[1])
                            })), $(".cf-select").each((function (i, element) {
                                var key = $(element).data("id"),
                                    selectedFilterInputList = $(".cf-select[data-id*='".concat(key, "'] input")),
                                    itemsList = selectedFilterInputList.map((function (idx, item) {
                                        return {tagName: $(item).attr("name"), value: $(item).val()}
                                    })).get();
                                _this7.cfFilters[key] = [], urlParams[key] && urlParams[key].split(",").forEach((function (param) {
                                    var itemIdx = itemsList.map((function (item) {
                                        return item.value
                                    })).indexOf(param);
                                    -1 !== itemIdx && (hasPredefinedTagsFromUrl = !0, $(selectedFilterInputList[itemIdx]).prop("checked", !0), _this7.cfFilters[key].push(itemsList[itemIdx]))
                                }))
                            })), hasPredefinedTagsFromUrl && this.logCsaContentFilterEvent("", this.stringifyCfTags(), "predefined"), this.displayCFFilters()
                        }
                    }
                }, {
                    key: "filterListToggleListener",
                    value: function filterListToggleListener(shortFilterBtns, filterBtns) {
                        var _this8 = this;
                        $(".cf-show-full-filters").click((function () {
                            $(".cf-selected-options").html(filterBtns), _this8.isFiltersExpanded = !0, _this8.filterListToggleListener(shortFilterBtns, filterBtns), _this8.addCFRemove()
                        })), $(".cf-show-short-filters").click((function () {
                            $(".cf-selected-options").html(shortFilterBtns), _this8.isFiltersExpanded = !1, _this8.filterListToggleListener(shortFilterBtns, filterBtns), _this8.addCFRemove()
                        }))
                    }
                }, {
                    key: "uncheckCFItem", value: function uncheckCFItem(key, value) {
                        $(".cf-select[data-id*='".concat(key, "'] input")).each((function (i, item) {
                            $(item).val() === value && $(item).prop("checked", !1)
                        }))
                    }
                }, {
                    key: "clearAllCF", value: function clearAllCF() {
                        var _this9 = this;
                        $(".cf-clear-button").click((function () {
                            _this9.logCsaContentFilterEvent("", _this9.stringifyCfTags(), "clear"), $(".cf-select input").each((function (i, item) {
                                $(item).prop("checked", !1)
                            })), _this9.cfFilters = {}, _this9.populateSelectedCF(""), $(".cf-multi-button").each((function (idx, btn) {
                                var btnText = $(btn).text(), paramIndex = btnText.indexOf("(");
                                paramIndex > 0 && $(btn).text(btnText.substr(0, paramIndex))
                            }))
                        }))
                    }
                }, {
                    key: "alterOverflowClass", value: function alterOverflowClass() {
                        var windowWidth = window.innerWidth;
                        windowWidth > 993 ? ($(".cf-container").removeClass("cf-small-screen"), $(".a20m-body").css("paddingTop", $("header").height()), $(".cf-selected").css("display", "flex")) : windowWidth <= 993 && ($(".cf-container").addClass("cf-small-screen"), this.currentTotalSelectedFilter > 0 ? ($(".cf-clear-button").css("display", "inline-block"), $(".cf-small-screen .cf-selected").css("display", "block")) : ($(".cf-clear-button").css("display", "none"), $(".cf-small-screen .cf-selected").css("display", "none")))
                    }
                }, {
                    key: "validURL", value: function validURL(str) {
                        return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[,;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(str)
                    }
                }, {
                    key: "runCF", value: function runCF() {
                        var _this10 = this;
                        this.alterOverflowClass();
                        var preDefinedFilter = "";
                        this.validURL(window.location.href) && (preDefinedFilter = window.location.search ? window.location.search : ""), this.populateSelectedCF(preDefinedFilter);
                        var cfScreenPostion = $(".cf-container").offset().top;
                        $(window).scroll((function () {
                            var headerNavHeight = $("header").height() || 56;
                            $(window).scrollTop() + headerNavHeight > cfScreenPostion + 1 && ($(".cf-container").addClass("cf-fixed"), $(".cf-container").css("top", headerNavHeight + $(".a20m-alert-message.am-active").height()), $(".cf-small-screen").length < 1 && $(".cf-article-list").css("paddingTop", $(".cf-container").height())), $(window).scrollTop() + headerNavHeight < cfScreenPostion + 1 && ($(".cf-small-screen").length < 1 && $(".cf-article-list").css("paddingTop", 0), $(".cf-container").removeClass("cf-fixed"))
                        })), $(".a20m-alert-close-button").click((function () {
                            $(".cf-container").css("top", $("header").height())
                        })), $("body").click((function (e) {
                            $(e.target).closest(".cf-multi-button").length || $(e.target).parents(".cf-multi").length || $(".cf-multi").removeClass("cf-multi-active")
                        })), $(window).resize((function () {
                            _this10.alterOverflowClass()
                        })), this.handleAllInputChange(), this.clearAllCF()
                    }
                }]), CF
            }();
            $(".cf-container") && $(".cf-container").length > 0 && (new CF).runCF()
        }));
        var contentFilterV2 = function contentFilterV2($) {
            var CFV2 = function () {
                function CFV2() {
                    !function asset_classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                    }(this, CFV2), this.cfFilters = {}, this.firstLoadOfCF = !0, this.currentTotalSelectedFilter = 0
                }

                return function asset_createClass(Constructor, protoProps, staticProps) {
                    return protoProps && asset_defineProperties(Constructor.prototype, protoProps), staticProps && asset_defineProperties(Constructor, staticProps), Constructor
                }(CFV2, [{
                    key: "handleAllInputChange", value: function handleAllInputChange() {
                        var _this = this;
                        $(".cf-select-card").each((function (i, filter) {
                            var filterName = $(filter).attr("data-id"),
                                filterItems = $(filter).find(".cf-multi").find("input");
                            $(filterItems).change((function (e) {
                                var temp = [];
                                $(filterItems).each((function (index, item) {
                                    $(item).is(":checked") && temp.push($(item).val())
                                })), _this.cfFilters[filterName] = temp, _this.firstLoadOfCF = !1, _this.populateSelectedCF("")
                            }))
                        }))
                    }
                }, {
                    key: "fetchContents", value: function fetchContents(preDefinedFilter) {
                    }
                }, {
                    key: "populateSelectedCF", value: function populateSelectedCF(preDefinedFilter) {
                        (!$(".cf-side-filter-menu").find(".cf-bottom-sheet-footer").length > 0 || this.firstLoadOfCF) && this.fetchContents(preDefinedFilter), this.firstLoadOfCF && this.populateCfFiltersFromUrl(preDefinedFilter), this.displayCFFilters()
                    }
                }, {
                    key: "populateCfFiltersFromUrl", value: function populateCfFiltersFromUrl(predefinedFilter) {
                        var _this2 = this;
                        if (predefinedFilter) {
                            var urlParams = {};
                            predefinedFilter.split("&").forEach((function (part) {
                                var item = part.split("=");
                                urlParams[item[0]] = decodeURIComponent(item[1])
                            })), $(".cf-select-card").each((function (i, element) {
                                var key = $(element).data("id"),
                                    selectedFilterInputList = $(".cf-select-card[data-id*='".concat(key, "'] input")),
                                    itemsList = selectedFilterInputList.map((function (idx, item) {
                                        return $(item).val()
                                    })).get();
                                _this2.cfFilters[key] = [], urlParams[key] && urlParams[key].split(",").forEach((function (param) {
                                    var itemIdx = itemsList.indexOf(param);
                                    -1 !== itemIdx && ($(selectedFilterInputList[itemIdx]).prop("checked", !0), _this2.cfFilters[key].push(param))
                                }))
                            })), this.displayCFFilters()
                        }
                    }
                }, {
                    key: "displayCFFilters", value: function displayCFFilters() {
                    }
                }, {
                    key: "validURL", value: function validURL(str) {
                        return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[,;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(str)
                    }
                }, {
                    key: "clearAllCF", value: function clearAllCF() {
                        $(".cf-select-card input").each((function (i, item) {
                            $(item).prop("checked", !1)
                        })), this.cfFilters = {}, this.populateSelectedCF("")
                    }
                }, {
                    key: "displayMobileVersion", value: function displayMobileVersion(preDefinedFilter) {
                        var _this3 = this;
                        $(".cf-top-filter-selections").click((function () {
                            $(".cf-side-filter-menu").toggleClass("expand")
                        })), $(".cf-side-filter-menu").click((function (e) {
                            $(e.target).is(".cf-filter-menu-content, .cf-filter-menu-content *, .cf-bottom-sheet-footer, .cf-bottom-sheet-footer *") || $(".cf-side-filter-menu").toggleClass("expand")
                        })), $(".cf-bottom-sheet-apply-button").click((function () {
                            _this3.fetchContents(preDefinedFilter), $(".cf-side-filter-menu").toggleClass("expand")
                        })), $(".cf-bottom-sheet-reset-button").click((function () {
                            _this3.clearAllCF()
                        }))
                    }
                }, {
                    key: "alterOverflowClass", value: function alterOverflowClass() {
                        var windowWidth = window.innerWidth;
                        windowWidth > 993 ? ($(".cf-v2-container").removeClass("cf-v2-tablet"), $(".cf-v2-container").removeClass("cf-v2-mobilePortrait"), $(".cf-v2-container").addClass("cf-v2-desktop")) : windowWidth <= 993 && ($(".cf-v2-container").removeClass("cf-v2-desktop"), $(".cf-v2-container").addClass("cf-v2-tablet"))
                    }
                }, {
                    key: "runCFV2", value: function runCFV2() {
                        var _this4 = this;
                        this.alterOverflowClass();
                        var preDefinedFilter = "";
                        this.validURL(window.location.href) && (preDefinedFilter = window.location.search ? window.location.search : ""), this.populateSelectedCF(preDefinedFilter), $(window).resize((function () {
                            _this4.alterOverflowClass()
                        })), $(".cf-v2-container").hasClass("cf-v2-desktop") || this.displayMobileVersion(preDefinedFilter), this.handleAllInputChange()
                    }
                }]), CFV2
            }();
            return $(".cf-v2-container") && $(".cf-v2-container").length > 0 && (new CFV2).runCFV2(), CFV2
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            contentFilterV2($)
        }));
        var addToken = function addToken(event, $) {
            if ("post" === event.target.getAttribute("method") && function isTokenAllowed(urlString) {
                var allowedDomainsRegexp = new RegExp("http(s|)://advertising.amazon.(com|com.mx|ca|co.uk|de|fr|it|es|in|co.jp|com.au|cn|sa|ae)$");
                if (urlString.indexOf("://") > 0) {
                    var url = new URL(urlString);
                    return allowedDomainsRegexp.test(url.origin)
                }
                return !0
            }(event.target.getAttribute("action"))) {
                var token = $("input[name='d3V0YW5n']").attr("value");
                if (token) {
                    var encodedToken = encodeURI(token),
                        tokenParam = '<input type="hidden" name="anti-csrftoken-a2z" value='.concat(encodedToken, ">");
                    $(event.target).append(tokenParam)
                }
            }
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            var adBlockerErrorMessage = $(".form-container").data("ad-blocker-error-message") || "",
                technicalDifficultiesErrorMessage = $(".form-container").data("technical-difficulties-error-message") || "";

            function isUrl(string) {
                return !(!string || !string.includes("/"))
            }

            function toggleDisabled(element, trueOrFalse) {
                $(element).prop("disabled", trueOrFalse)
            }

            function finishWorkflowSetup(selectElement) {
                !function hideHiddenInputContainers() {
                    $(".form-input-hidden").length > 0 && (new URLSearchParams(window.location.search).forEach((function (value, key) {
                        var inputElement = $("input[name=".concat(key, "]"));
                        inputElement && inputElement.data("from-param") && inputElement.attr("value", value)
                    })), $(".form-input-hidden").closest(".container").css("display", "block"))
                }(), function insertRedirectIfNeeded() {
                    $("form").each((function (index, element) {
                        if ($(element).data("redirect") && !$(element).find("input[name=retURL]").length) {
                            var newInputRedirect = "<input type='hidden' name='retURL' value='".concat($(element).data("redirect"), "' />");
                            $(element).append(newInputRedirect)
                        }
                    }))
                }(), function handleFormSubmit() {
                    $("form").submit((function (e) {
                        if (addToken(e, $), $(e.target).hasClass("form--workflow")) {
                            var thisForm = $(e.target),
                                formHasCheckedRadio = thisForm.find('input[type="radio"]:checked').length > 0;
                            if (!thisForm.attr("action") && formHasCheckedRadio) {
                                var selectedRadio = thisForm.find('input[type="radio"]:checked');
                                thisForm.attr("action", selectedRadio.val())
                            }
                        }
                        return !0
                    }))
                }(), selectElement && toggleDisabled(selectElement, !1)
            }

            function addLinkWorkflowForm(selectElement, nextStepContainer) {
                var linkString = selectElement.value,
                    hrefToLoad = window.location.hostname.includes("lego.a2z.com") ? function createPreviewLink(linkString) {
                        try {
                            var linkUrlObj = new URL(linkString), linkDomain = linkUrlObj.hostname,
                                linkPath = linkUrlObj.pathname;
                            return "/preview?s3_key=".concat(linkDomain).concat(linkPath, "/.live/main")
                        } catch (errorException) {
                            console.error("URL() API is not supported in this browser.", errorException)
                        }
                        return ""
                    }(linkString) : linkString;
                nextStepContainer.load("".concat(hrefToLoad, " .a20m-body > .container"), (function (response, status) {
                    if ("error" === status) {
                        if ($("#a20m-ad-div").length > 0) {
                            if (function logMetric(metricCategory, eventName) {
                                if (window.ue) {
                                    var metricName = "a20m_form-".concat(metricCategory, "_").concat(eventName);
                                    ue.count(metricName, (ue.count(metricName) || 0) + 1)
                                }
                            }("next-step", "loading-failed"), window.ueLogError) {
                                window.ueLogError(response, {
                                    logLevel: "ERROR",
                                    attribution: "a20m_form-next-step_loading-failed"
                                })
                            }
                            nextStepContainer.html('<div class="error-info-text">\n              '.concat(technicalDifficultiesErrorMessage && technicalDifficultiesErrorMessage.split(".").join(".<br />"), "\n            </div>"))
                        } else nextStepContainer.html('<div class="error-info-text">\n              '.concat(adBlockerErrorMessage && adBlockerErrorMessage.split(".").join(".<br />"), "\n            </div>"));
                        toggleDisabled(selectElement, !1)
                    } else finishWorkflowSetup(selectElement), handleWorkflowSetup()
                }))
            }

            function selectChangeHandler(e) {
                var selectElement = e.target,
                    nextStepContainer = $(selectElement).closest(".workflow-container").find(".workflow__next-step");
                if (selectElement.value) {
                    toggleDisabled(selectElement, !0);
                    var parentFormElement = $(".form--workflow select").parents("form");
                    if (nextStepContainer.html('<div class="loader">Loading...</div>'), parentFormElement.hasClass("ref-workflow")) return void function addHiddenWorkflowForm(selectElement, nextStepContainer) {
                        var workflowStepId = $("#form-workflow_".concat(selectElement.value));
                        workflowStepId.length > 0 ? nextStepContainer.html(workflowStepId.html()) : nextStepContainer.html(""), finishWorkflowSetup(selectElement), handleWorkflowSetup()
                    }(selectElement, nextStepContainer);
                    if (isUrl(selectElement.value)) return void addLinkWorkflowForm(selectElement, nextStepContainer)
                }
                !function emptyWorkflowForm(selectElement, nextStepContainer) {
                    nextStepContainer && nextStepContainer.html(""), selectElement && finishWorkflowSetup(selectElement)
                }(selectElement, nextStepContainer)
            }

            function handleWorkflowSetup() {
                var formWorkflowSelect = $(".form--workflow select");
                formWorkflowSelect.unbind("change", selectChangeHandler), formWorkflowSelect.bind("change", selectChangeHandler), $('.form--workflow input[type="radio"]').change((function (e) {
                    var thisRadio = $(e.target), thisForm = thisRadio.closest("form");
                    thisRadio.val() && isUrl(thisRadio.val()) && thisForm.attr("action", thisRadio.val())
                }))
            }

            finishWorkflowSetup(), handleWorkflowSetup(), function handleSuperInput($) {
                $(".form-container").each((function (i, formContainer) {
                    var superInput = $(formContainer).find("div.super-input input").first();
                    if (superInput.length > 0) {
                        var superInputContainer = $(superInput).closest("div.super-input"),
                            checkUnCheckInput = function checkUnCheckInput() {
                                $(superInput).prop("checked") ? ($(superInputContainer.find('.super-controlled input[type="checkbox"]')).each((function (ix, icb) {
                                    $(icb).prop("checked", !0)
                                })), $(superInputContainer.find('.super-controlled input[type="radio"]')).first().prop("checked", !0)) : $(superInputContainer.find(".super-controlled input")).each((function (ix, input) {
                                    $(input).prop("checked", !1)
                                }))
                            };
                        "radio" === $(superInput).attr("type") ? $(formContainer).find('input[type="radio"]').change((function () {
                            checkUnCheckInput()
                        })) : "checkbox" === $(superInput).attr("type") && $(superInput).change((function () {
                            checkUnCheckInput()
                        })), $(superInputContainer.find(".super-controlled input")).change((function (e) {
                            e.target.checked && ($(superInput).prop("checked") || $(superInput).prop("checked", !0))
                        }))
                    }
                }))
            }($), function handleFormInput() {
                function checkPattern(e) {
                    var pattern = e.target.getAttribute("p"),
                        validationMessage = e.target.getAttribute("validationmessage");
                    new RegExp(pattern, "").test(e.target.value) ? e.target.setCustomValidity("") : e.target.setCustomValidity(validationMessage)
                }

                for (var elements = document.getElementsByClassName("form-input-with-custom-validation"), i = 0; i < elements.length; i++) {
                    var input = elements[i].querySelector("input");
                    input && (input.oninvalid = checkPattern, input.oninput = function (e) {
                        e.target.setCustomValidity("")
                    }, input.onchange = checkPattern)
                }
            }(), $(".form--workflow select").change()
        }));
        var asset_accordionAsset = function accordionAsset($) {
            var csaEventsCallback = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
            };
            $(".accordion .title").click((function (e) {
                var accordion = $(e.target).closest(".accordion"), parentContainer = accordion.parent().parent(),
                    isCollapsed = !accordion.hasClass("expanded"), headerHeight = $("header.header-main").height() || 0,
                    expandedHeight = parentContainer.find(".accordion.expanded").height() || 0,
                    accordionOffset = 0 === expandedHeight ? 0 : accordion.height(),
                    ectComponentTag = $(accordion).closest(".container").attr("data-ect-component-tag");
                if (parentContainer.find(".accordion").removeClass("expanded"), isCollapsed) {
                    accordion.addClass("expanded"), csaEventsCallback("expand", ectComponentTag);
                    var accordionTop = accordion.offset().top - headerHeight,
                        expandedSize = expandedHeight - accordionOffset;
                    $("html, body").animate({scrollTop: accordionTop - expandedSize}, 500)
                } else csaEventsCallback("collapse", ectComponentTag)
            }))
        }, asset_makeCsaAccordionEventObject = function makeCsaAccordionEventObject(eventAction, ectComponentTag) {
            return ectComponentTag ? {
                eventType: "accordion",
                ectComponentTag: ectComponentTag,
                eventDetail: {action: eventAction}
            } : {}
        }, asset_logCsaAccordionEvent = function logCsaAccordionEvent(eventAction, ectComponentTag) {
            var formattedEventDataObject = asset_makeCsaAccordionEventObject(eventAction, ectComponentTag);
            a20mCsaService_logCsaCustomEvent(formattedEventDataObject)
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            asset_accordionAsset($, asset_logCsaAccordionEvent)
        }));
        __webpack_require__(22);

        function productFinder_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        var productFinder_productFinder = function productFinder($) {
            var PF = function () {
                function PF() {
                    var _this = this;
                    !function productFinder_classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                    }(this, PF), function productFinder_defineProperty(obj, key, value) {
                        return key in obj ? Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : obj[key] = value, obj
                    }(this, "logCsaProductFinderEvent", (function (category, filters, eventAction) {
                        var formattedEventDataObject = {
                            eventType: "product_finder",
                            ectComponentTag: _this.ectComponentTag,
                            eventDetail: {category: category, filters: filters, action: eventAction}
                        };
                        a20mCsaService_logCsaCustomEvent(formattedEventDataObject)
                    })), this.pfFilters = {}, this.ectComponentTag = null
                }

                return function productFinder_createClass(Constructor, protoProps, staticProps) {
                    return protoProps && productFinder_defineProperties(Constructor.prototype, protoProps), staticProps && productFinder_defineProperties(Constructor, staticProps), Constructor
                }(PF, [{
                    key: "handleAllInputChange", value: function handleAllInputChange() {
                        var _this2 = this;
                        $(".pf-select").each((function (i, filter) {
                            _this2.ectComponentTag || (_this2.ectComponentTag = $(filter).closest("div.container").attr("data-ect-component-tag"));
                            var filterName = $(filter).attr("data-id"), btn = $(filter).find(".pf-filter-button"),
                                currFilter = $(filter).find(".pf-multi"), filterItems = currFilter.find("input"),
                                clearFiltersBtn = currFilter.find(".pf-multi-clear"), filterBtnInner = $(btn).find("i"),
                                filterBtnText = $(filterBtnInner).text();
                            $(btn).click((function () {
                                var isExpanded = $(currFilter).hasClass("pf-multi-active");
                                $(".pf-multi").removeClass("pf-multi-active"), isExpanded || $(currFilter).toggleClass("pf-multi-active")
                            })), $(filterItems).change((function (e) {
                                var _e$target = e.target, name = _e$target.name, value = _e$target.value,
                                    checked = _e$target.checked;
                                "marketplaces" === filterName && (checked && 5 === _this2.selectedCheckBoxCount(filterItems) ? _this2.toggleEnableOfUnSelectedItems(filterItems, !1) : checked || _this2.toggleEnableOfUnSelectedItems(filterItems, !0));
                                var temp = [], buttonText = "";
                                $(filterItems).each((function (index, item) {
                                    $(item).is(":checked") && (temp.push(_this2.getDisplayValue(filterName, item)), buttonText += (buttonText ? ", " : "") + _this2.getDisplayValue(filterName, item, !0))
                                }));
                                var csaEventAction = checked ? "check" : "uncheck",
                                    csaFiltersValue = "marketplaces" === filterName ? name : value;
                                _this2.logCsaProductFinderEvent(filterName, csaFiltersValue, csaEventAction), _this2.pfFilters[filterName] = temp, $(".pf-multi").removeClass("pf-multi-active"), temp.length > 0 ? $(filterBtnInner).text(buttonText) : $(filterBtnInner).text(filterBtnText), _this2.toggleProducts(), _this2.updateURLWithFilters()
                            })), $(clearFiltersBtn).click((function () {
                                _this2.logCsaProductFinderEvent(filterName, "", "clear"), $(filterItems).each((function (index, item) {
                                    $(item).prop("checked", !1)
                                })), _this2.pfFilters[filterName] = [], $(".pf-multi").removeClass("pf-multi-active"), $(filterBtnInner).text(filterBtnText), _this2.toggleProducts(), _this2.updateURLWithFilters(), _this2.toggleEnableOfUnSelectedItems(filterItems, !0)
                            }))
                        }))
                    }
                }, {
                    key: "getDisplayValue", value: function getDisplayValue(filterName, item, translated) {
                        return "marketplaces" === filterName ? $(item).attr("name") : translated ? $(item).next().text() : $(item).val()
                    }
                }, {
                    key: "selectedCheckBoxCount", value: function selectedCheckBoxCount(filterItems) {
                        var count = 0;
                        return $(filterItems).each((function (index, item) {
                            $(item).is(":checked") && count++
                        })), count
                    }
                }, {
                    key: "toggleEnableOfUnSelectedItems",
                    value: function toggleEnableOfUnSelectedItems(filterItems, enableAll) {
                        $(filterItems).each((function (index, item) {
                            enableAll ? ($(item).removeAttr("disabled"), $(item).parent().removeClass("a20m-checkbox-disabled")) : $(item).is(":checked") || ($(item).attr("disabled", !0), $(item).parent().addClass("a20m-checkbox-disabled"))
                        }))
                    }
                }, {
                    key: "toggleProducts", value: function toggleProducts() {
                        var _this3 = this, _this$pfFilters = this.pfFilters,
                            _this$pfFilters$objec = _this$pfFilters.objective,
                            objective = void 0 === _this$pfFilters$objec ? [] : _this$pfFilters$objec,
                            _this$pfFilters$marke = _this$pfFilters.marketplaces,
                            marketplaces = void 0 === _this$pfFilters$marke ? [] : _this$pfFilters$marke,
                            noResultFound = !0;
                        if ($(".pf .product-container").each((function (i, product) {
                            var availableInMarketPlace = $(product).data("available-marketplaces").split(", "),
                                associatedProductTags = $(product).data("product-tags").split(", "),
                                marketplaceMatchFound = !marketplaces.length || availableInMarketPlace.some((function (mp) {
                                    return marketplaces.indexOf(mp) >= 0
                                })),
                                objectiveMatchFound = !objective.length || associatedProductTags.some((function (pt) {
                                    return objective.indexOf(pt) >= 0
                                }));
                            marketplaces.length || $(product).find(".mp-pill-div").css("display", "none"), marketplaceMatchFound && objectiveMatchFound ? ($(product).parent().css("display", "inline-block"), marketplaces.length && $(product).find(".mp-pill-div").css("display", "block"), noResultFound = !1, _this3.updateMarketplacePills(product, marketplaces, availableInMarketPlace)) : $(product).parent().css("display", "none")
                        })), noResultFound) {
                            var stringifiedPfFilters = Object.keys(this.pfFilters).map((function (key) {
                                return _this3.pfFilters[key]
                            })).join(",");
                            this.logCsaProductFinderEvent("", stringifiedPfFilters, "no_result"), $(".pf-no-results").css("display", "block")
                        } else $(".pf-no-results").css("display", "none")
                    }
                }, {
                    key: "updateMarketplacePills",
                    value: function updateMarketplacePills(product, marketplaces, availableInMarketPlace) {
                        $(product).find(".mp-pill").each((function (i, pill) {
                            i < marketplaces.length ? ($(pill).text(marketplaces[i]), $(pill).css("display", "inline-block"), availableInMarketPlace.includes(marketplaces[i]) ? ($(pill).removeClass("not-available"), $(pill).addClass("available")) : ($(pill).addClass("not-available"), $(pill).removeClass("available"))) : $(pill).css("display", "none")
                        }))
                    }
                }, {
                    key: "updateURLWithFilters", value: function updateURLWithFilters() {
                        var _this4 = this, url = "?";
                        Object.keys(this.pfFilters).forEach((function (key) {
                            var currFilterType = _this4.pfFilters[key];
                            currFilterType && currFilterType.length && (url += "".concat(key, "=").concat(currFilterType.toString(), "&"))
                        })), window.history.pushState({}, document.title, "".concat(window.location.origin).concat(window.location.pathname).concat(url.split("?")[1] ? "?".concat(url.split("?")[1].slice(0, -1)) : ""))
                    }
                }, {
                    key: "populatePfFiltersFromUrl", value: function populatePfFiltersFromUrl(predefinedFilter) {
                        var _this5 = this, validPredefinedFilter = !0;
                        if (predefinedFilter) {
                            var filters = predefinedFilter.replace("?", ""), urlParams = {};
                            filters.split("&").forEach((function (part) {
                                var item = part.split("=");
                                urlParams[item[0]] = decodeURIComponent(item[1])
                            })), $(".pf-select").each((function (i, element) {
                                var key = $(element).data("id"),
                                    tempPfFilter = urlParams[key] ? urlParams[key].split(",") : [];
                                _this5.pfFilters[key] = [];
                                var buttonText = "", marketPlaceCount = 0;
                                $(".pf-select[data-id*='".concat(key, "'] input")).each((function (idx, item) {
                                    var temp = _this5.getDisplayValue(key, item);
                                    if (tempPfFilter && tempPfFilter.indexOf(temp) > -1 && ("marketplaces" !== key || 5 !== marketPlaceCount) && (_this5.pfFilters[key].push(temp), $(item).prop("checked", !0), buttonText += (buttonText ? ", " : "") + _this5.getDisplayValue(key, item, !0), "marketplaces" === key && marketPlaceCount++, validPredefinedFilter)) {
                                        var stringifiedPfFilters = Object.keys(urlParams).map((function (param) {
                                            return urlParams[param]
                                        })).join(",");
                                        _this5.logCsaProductFinderEvent("", stringifiedPfFilters, "predefined"), validPredefinedFilter = !1
                                    }
                                })), "marketplaces" === key && 5 === marketPlaceCount && _this5.toggleEnableOfUnSelectedItems($(".pf-select[data-id*='".concat(key, "'] input")), !1), _this5.pfFilters[key].length > 0 && $(element).find(".pf-filter-button i").text(buttonText)
                            })), this.updateURLWithFilters(), this.toggleProducts()
                        }
                    }
                }, {
                    key: "runPF", value: function runPF() {
                        $("body").click((function (e) {
                            $(e.target).closest(".pf-filter-button").length || $(e.target).parents(".pf-multi").length || $(".pf-multi").removeClass("pf-multi-active")
                        })), this.handleAllInputChange();
                        var preDefinedFilter = window.location.search ? window.location.search : "";
                        "mobilePortrait" === $(".a20m-body").data("devicetype") && $(".pf .product-container").each((function (i, product) {
                            $(product).parent().css("margin-bottom", "2rem")
                        })), this.populatePfFiltersFromUrl(preDefinedFilter)
                    }
                }]), PF
            }();
            return $(".product-finder") && $(".product-finder").length > 0 && (new PF).runPF(), PF
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            productFinder_productFinder($)
        }));
        __webpack_require__(23), __webpack_require__(24);
        var asset_makeCsaVideoEventObject = function makeCsaVideoEventObject(videoEvent, element, ectComponentTag) {
            if (!ectComponentTag) return {};
            var eventAction = "";
            switch (videoEvent) {
                case"resume":
                    eventAction = videoEvent, 0 === element.currentTime && (eventAction = element.autoplay ? "autoplay" : "click_to_play");
                    break;
                case"pause":
                    element.duration !== element.currentTime && (eventAction = videoEvent);
                    break;
                case"exit_page":
                    eventAction = videoEvent;
                    break;
                case"complete":
                    (function isInView(element) {
                        var rect = element.getBoundingClientRect();
                        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    })(element) && (eventAction = videoEvent)
            }
            if (!eventAction) return {};
            var timeStamp = element.currentTime, duration = element.duration;
            return {
                eventType: "video",
                ectComponentTag: ectComponentTag,
                eventDetail: {timeStamp: timeStamp.toString(), duration: duration.toString(), action: eventAction}
            }
        }, asset_logCsaVideoEvent = function logCsaVideoEvent($, videoEvent, element) {
            var formattedEventDataObject = asset_makeCsaVideoEventObject($, videoEvent, element);
            a20mCsaService_logCsaCustomEvent(formattedEventDataObject)
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            $("video").each((function (index, element) {
                var ectComponentTag = $(element).closest(".container").attr("data-ect-component-tag");
                element.addEventListener("play", (function (e) {
                    asset_logCsaVideoEvent("resume", element, ectComponentTag)
                }), !1), element.addEventListener("pause", (function (e) {
                    asset_logCsaVideoEvent("pause", element, ectComponentTag)
                }), !1), element.addEventListener("ended", (function (e) {
                    asset_logCsaVideoEvent("complete", element, ectComponentTag)
                }), !1)
            })), window.addEventListener("beforeunload", (function (e) {
                $("video").each((function (index, element) {
                    var ectComponentTag = $(element).closest(".container").attr("data-ect-component-tag");
                    asset_logCsaVideoEvent("exit_page", element, ectComponentTag)
                }))
            }), !1)
        }));
        var uniqueID = function uniqueID() {
            return Date.now().toString(36).concat("_").concat(Math.random().toString(36).substr(2, 9))
        };

        function CSA_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
        }

        function CSA_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        var CSA_HeroCarouselCSA = function () {
            function HeroCarouselCSA(jQueryElement) {
                var action = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                CSA_classCallCheck(this, HeroCarouselCSA);
                var ectComponentTag = jQueryElement.closest("div.container").attr("data-ect-component-tag"),
                    actions = {left_rotate: "left_rotate", right_rotate: "right_rotate", cta_click: "cta_click"},
                    detail = {action: actions[action]};
                if (ectComponentTag && actions[action]) {
                    if ("cta_click" === actions[action]) {
                        var href = jQueryElement.attr("href");
                        href || (href = "cta_has_no_href"), detail.redirectTo = href
                    }
                    this.csaObj = {eventType: "hero_carousel", ectComponentTag: ectComponentTag, eventDetail: detail}
                }
            }

            return function CSA_createClass(Constructor, protoProps, staticProps) {
                return protoProps && CSA_defineProperties(Constructor.prototype, protoProps), staticProps && CSA_defineProperties(Constructor, staticProps), Constructor
            }(HeroCarouselCSA, [{
                key: "logEvent", value: function logEvent() {
                    a20mCsaService_logCsaCustomEvent(this.csaObj)
                }
            }]), HeroCarouselCSA
        }();

        function _createForOfIteratorHelper(o, allowArrayLike) {
            var it;
            if ("undefined" == typeof Symbol || null == o[Symbol.iterator]) {
                if (Array.isArray(o) || (it = asset_unsupportedIterableToArray(o)) || allowArrayLike && o && "number" == typeof o.length) {
                    it && (o = it);
                    var i = 0, F = function F() {
                    };
                    return {
                        s: F, n: function n() {
                            return i >= o.length ? {done: !0} : {done: !1, value: o[i++]}
                        }, e: function e(_e2) {
                            throw _e2
                        }, f: F
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var err, normalCompletion = !0, didErr = !1;
            return {
                s: function s() {
                    it = o[Symbol.iterator]()
                }, n: function n() {
                    var step = it.next();
                    return normalCompletion = step.done, step
                }, e: function e(_e3) {
                    didErr = !0, err = _e3
                }, f: function f() {
                    try {
                        normalCompletion || null == it.return || it.return()
                    } finally {
                        if (didErr) throw err
                    }
                }
            }
        }

        function _slicedToArray(arr, i) {
            return function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr
            }(arr) || function _iterableToArrayLimit(arr, i) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(arr))) return;
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err
                } finally {
                    try {
                        _n || null == _i.return || _i.return()
                    } finally {
                        if (_d) throw _e
                    }
                }
                return _arr
            }(arr, i) || asset_unsupportedIterableToArray(arr, i) || function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function asset_unsupportedIterableToArray(o, minLen) {
            if (o) {
                if ("string" == typeof o) return asset_arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? asset_arrayLikeToArray(o, minLen) : void 0
            }
        }

        function asset_arrayLikeToArray(arr, len) {
            (null == len || len > arr.length) && (len = arr.length);
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2
        }

        function HeroCarousel_asset_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }

        var asset_Herotator = function () {
            function Herotator(heroSize, itemsQueue) {
                !function HeroCarousel_asset_classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
                }(this, Herotator), this.heroSize = heroSize, this.queue = itemsQueue, 2 === heroSize && this.queue.push(this.cloneFrom(this.queue[0], 1))
            }

            return function HeroCarousel_asset_createClass(Constructor, protoProps, staticProps) {
                return protoProps && HeroCarousel_asset_defineProperties(Constructor.prototype, protoProps), staticProps && HeroCarousel_asset_defineProperties(Constructor, staticProps), Constructor
            }(Herotator, [{
                key: "itemQueues", value: function itemQueues() {
                    return this.queue
                }
            }, {
                key: "cloneFrom", value: function cloneFrom(itemInfo, leftPostition) {
                    return {
                        heroId: uniqueID(),
                        heroIndex: itemInfo.heroIndex,
                        visibility: "hidden",
                        leftPostitionValue: leftPostition,
                        remove: !1,
                        clone: itemInfo.heroId
                    }
                }
            }, {
                key: "cleanRemovedItem", value: function cleanRemovedItem() {
                    var _this = this;
                    this.queue.filter((function (it) {
                        return it.remove
                    })).forEach((function (it) {
                        return _this.queue.splice(_this.queue.indexOf(it), 1)
                    }))
                }
            }, {
                key: "leftRotate", value: function leftRotate() {
                    var head = this.queue.shift();
                    this.queue.forEach((function (e) {
                        e.leftPostitionValue -= 1, e.visibility = 0 === e.leftPostitionValue ? "visible" : "hidden"
                    })), head.leftPostitionValue = this.queue.slice(-1)[0].leftPostitionValue + 1, this.queue.push(head)
                }
            }, {
                key: "rightRotate", value: function rightRotate() {
                    var tail = this.queue.pop();
                    this.queue.forEach((function (e) {
                        e.leftPostitionValue += 1, e.visibility = 0 === e.leftPostitionValue ? "visible" : "hidden"
                    })), tail.leftPostitionValue = this.queue[0].leftPostitionValue - 1, this.queue.unshift(tail)
                }
            }, {
                key: "clickNextEventHandler", value: function clickNextEventHandler(updatePageFn) {
                    this.rightRotate(), 2 === this.heroSize && (this.queue[0].remove = !0, this.queue.splice(1, 0, this.cloneFrom(this.queue.slice(-1)[0], -1))), updatePageFn(this)
                }
            }, {
                key: "clickPrevEventHandler", value: function clickPrevEventHandler(updatePageFn) {
                    this.leftRotate(), 2 === this.heroSize && (this.queue.slice(-1)[0].remove = !0, this.queue.splice(2, 0, this.cloneFrom(this.queue[0], 1))), updatePageFn(this)
                }
            }]), Herotator
        }(), asset_heroCarouselAsset = function heroCarouselAsset($, isRTL) {
            $(".herotator").each((function (index, element) {
                var heroSize = parseInt($(element).data("hero-size"), 10),
                    csaLeftRotate = new CSA_HeroCarouselCSA($(element), "left_rotate"),
                    csaRightRotate = new CSA_HeroCarouselCSA($(element), "right_rotate");
                if (heroSize) {
                    var container = $($(element).find(".herotator-items")),
                        navigators = $(element).find(".herotator-nav"),
                        indicators = $(element).find(".herotator-indicators");
                    container.attr("id", "herotator-".concat(index)), container.data("index", 0);
                    !function setHeroCarouselSize() {
                        var _findMaxHeightItem2 = _slicedToArray(function findMaxHeightItem() {
                                var idx = 0, width = parseInt(container.children("div")[0].offsetWidth, 10),
                                    height = parseInt(container.children("div")[0].offsetHeight, 10);
                                return container.children("div").each((function (i, e) {
                                    var v = parseInt(container.children("div")[i].offsetHeight, 10);
                                    v > height && (idx = i, width = parseInt(container.children("div")[i].offsetWidth, 10), height = v)
                                })), [idx, width, height]
                            }(), 3), heroIndex = _findMaxHeightItem2[0], heroWidth = _findMaxHeightItem2[1],
                            heroHeight = _findMaxHeightItem2[2];
                        container.width(heroWidth), container.height(heroHeight), container.find(".hero-carousel-items-container").width(heroWidth), container.find(".hero-carousel-items-container").height(heroHeight), $(window).bind("resize", (function () {
                            var selector = "#".concat(container.attr("id")),
                                w = parseInt($(selector).children("div")[heroIndex].offsetWidth, 10),
                                h = parseInt($(selector).children("div")[heroIndex].offsetHeight, 10);
                            $(selector).width(w), $(selector).height(h), $(selector.concat(" .hero-carousel-items-container")).width(w), $(selector.concat(" .hero-carousel-items-container")).height(h)
                        }))
                    }();
                    var updatePage = function updatePage(herotator) {
                        var _step, _iterator = _createForOfIteratorHelper(herotator.itemQueues());
                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                var itemInfo = _step.value;
                                if (itemInfo.remove) $("[hero-id=".concat(itemInfo.heroId, "]")).remove(); else {
                                    var currentItemPageElement = null;
                                    if (itemInfo.clone) {
                                        var org = $("[hero-id=".concat(itemInfo.clone, "]"));
                                        (currentItemPageElement = $(org.clone())).insertAfter(org)
                                    }
                                    currentItemPageElement || (currentItemPageElement = $("[hero-id=".concat(itemInfo.heroId, "]"))), currentItemPageElement.attr("hero-id", itemInfo.heroId), currentItemPageElement.data("left-value", itemInfo.leftPostitionValue), currentItemPageElement.css("visibility", itemInfo.visibility), currentItemPageElement.css("left", "".concat(100 * itemInfo.leftPostitionValue, "%"))
                                }
                            }
                        } catch (err) {
                            _iterator.e(err)
                        } finally {
                            _iterator.f()
                        }
                        herotator.cleanRemovedItem();
                        var _step2, curIndex = 0, _iterator2 = _createForOfIteratorHelper(herotator.itemQueues());
                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                var _itemInfo = _step2.value;
                                _itemInfo.clone = "", _itemInfo.remove = !1, 0 === _itemInfo.leftPostitionValue && (curIndex = _itemInfo.heroIndex)
                            }
                        } catch (err) {
                            _iterator2.e(err)
                        } finally {
                            _iterator2.f()
                        }
                        container.data("index", curIndex), $(element).find("li").each((function (_, li) {
                            parseInt($(li).data("slide-to"), 10) === curIndex ? $(li).addClass("active") : $(li).removeClass("active")
                        }))
                    }, itemsQueue = function initItemsQueue() {
                        var itemsQueue = [];
                        return container.children("div").each((function (i, it) {
                            var itemInfo = {
                                heroId: uniqueID(),
                                heroIndex: i,
                                visibility: 1 === heroSize ? "visible" : "hidden",
                                leftPostitionValue: i - 1,
                                remove: !1,
                                clone: ""
                            };
                            $(it).attr("hero-index", i), $(it).attr("hero-id", itemInfo.heroId), $(it).css("visibility", itemInfo.visibility), itemsQueue.push(itemInfo)
                        })), itemsQueue
                    }();
                    if (1 === heroSize) return navigators.css("visibility", "hidden"), void indicators.css("visibility", "hidden");
                    var herotator = new asset_Herotator(heroSize, itemsQueue);
                    herotator.clickNextEventHandler(updatePage), navigators.click((function (e) {
                        navigators.css("pointer-events", "none"), setTimeout((function () {
                            return navigators.css("pointer-events", "all")
                        }), 400);
                        var buttonDirection = isRTL ? "left" : "right";
                        $(e.target).hasClass(buttonDirection) || $(e.target).parents(".herotator-nav").hasClass(buttonDirection) ? (herotator.clickPrevEventHandler(updatePage), csaLeftRotate.logEvent()) : (herotator.clickNextEventHandler(updatePage), csaRightRotate.logEvent())
                    })), element.addEventListener("swiped-left", (function () {
                        herotator.clickPrevEventHandler(updatePage), csaLeftRotate.logEvent()
                    })), element.addEventListener("swiped-right", (function () {
                        herotator.clickNextEventHandler(updatePage), csaRightRotate.logEvent()
                    })), $(element).find("a.button.secondary-stormui").each((function (_, button) {
                        $(button).bind("click", (function (e) {
                            new CSA_HeroCarouselCSA($(e.target), "cta_click").logEvent()
                        }))
                    }))
                }
            }))
        };
        window.P.when("jQuery", "swiped-events", "ready").execute((function ($) {
            var isRTL = "rtl" === $("html").attr("dir") || "rtl" === $("div .content").attr("dir");
            asset_heroCarouselAsset($, isRTL)
        }));
        var A20mExtenderAsset = function A20mExtenderAsset($) {
            $(".a20m-extender").each((function (i, extender) {
                var content = $(extender).find(".extender-content"), btn = $(extender).find(".extender-button");
                $(btn).click((function () {
                    var isExpanded = $(content).hasClass("is-expended"), collapseLabel = $(btn).attr("collapseLabel"),
                        expandLabel = $(btn).attr("expandLabel"), btnText = isExpanded ? expandLabel : collapseLabel,
                        btnLable = $(btn).find(".extender-label");
                    $(content).toggleClass("is-expended"), $(btn).toggleClass("is-expended"), $(btnLable).text(btnText)
                }))
            }))
        };
        window.P.when("jQuery", "ready").execute((function ($) {
            A20mExtenderAsset($)
        }))
    }
});