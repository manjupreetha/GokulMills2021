(self["webpackChunkgokul_mills2021"] = self["webpackChunkgokul_mills2021"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: 'Products',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 8980)).then(m => (m.ProductsModule))
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => (m.HomeModule))
    },
    {
        path: 'whyus',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_why-us_why-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./why-us/why-us.module */ 5333)).then(m => (m.WhyUsModule))
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.module */ 5486)).then(m => (m.ContactModule))
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'GokulMills2021';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class NavBarComponent {
    constructor(router) {
        this.router = router;
        this.app = [];
        this.btns = [];
        this.href = "";
        // el: any;
        this.currentChoice = "home";
    }
    ngOnInit() {
        this.href = this.router.url;
        // console.log("1>>>"+this.router.url);
        // console.log("1>>>"+window.location.href);
    }
    setActive(choice) {
        // console.log("1>>"+this.currentChoice);
        // this.href = window.location.href;
        // console.log("2>>>"+this.href);
        this.currentChoice = choice;
        // console.log("2>>"+this.currentChoice);
    }
    getActive(choice) {
        if (this.currentChoice == choice)
            return "item active";
        else
            return "item";
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 12, vars: 12, consts: [[1, "container-fluid", 2, "padding", "10px", "background-color", "#555", "height", "80px"], [1, "logo-div"], ["src", "../../assets/images/logo1.jpg", 1, "logo"], ["id", "topnav", 1, "topnav"], ["routerLinkActive", "active", "href", "#", "routerLink", "/", 3, "click"], ["href", "#", "routerLink", "/whyus", "routerLinkActive", "active", 3, "click"], ["href", "#", "routerLink", "/Products", "routerLinkActive", "active", 3, "click"], ["href", "#", "routerLink", "/contact", "routerLinkActive", "active", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_4_listener() { return ctx.setActive("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_6_listener() { return ctx.setActive("why_us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Why Us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() { return ctx.setActive("products"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.setActive("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActive("home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActive("why_us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActive("products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActive("contact"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".logo-div[_ngcontent-%COMP%]{\r\n    \r\n    width:100%;\r\n    \r\n    \r\n}\r\n.logo[_ngcontent-%COMP%]{\r\n    width:55px;\r\n    height:50px;\r\n    float:left;\r\n    border-radius: 100%;\r\n    \r\n    border:2px solid white;\r\n    margin-left: 5%;\r\n}\r\nh5[_ngcontent-%COMP%]{\r\n    float:left;\r\n    padding:10px;\r\n    padding-bottom: 0;\r\n    font-family: Georgia;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size:x-large;\r\n    color:white;\r\n    margin-right:5%;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\n@media only screen and (max-width: 600px){\r\n    h5[_ngcontent-%COMP%]{\r\n        padding:15px;\r\n    }\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #555;\r\n    float:right;\r\n  }\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    border-bottom: 1px solid transparent;\r\n    border-radius: 2px;\r\n  }\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    border-bottom: 1px solid rgb(245, 242, 85);\r\n  }\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBLDBDQUEwQztBQUMxQztJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztFQUNiO0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsMENBQTBDO0VBQzVDO0FBRUE7SUFDRSw4QkFBOEI7RUFDaEMiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZGl2e1xyXG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCBibGFjazsgKi9cclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICAvKiBoZWlnaHQ6MTAwJTsgKi9cclxufVxyXG4ubG9nb3tcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLyogcGFkZGluZzoxMHB4OyAqL1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuaDV7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDo1JTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjMDAwMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgIGg1e1xyXG4gICAgICAgIHBhZGRpbmc6MTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNDUsIDI0MiwgODUpO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGEuYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map