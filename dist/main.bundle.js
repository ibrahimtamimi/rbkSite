webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 116;


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'RBK';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(212),
        styles: [__webpack_require__(190)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_user_service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_employee_eAuth_e_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footbar_footbar_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__["a" /* FacebookLogInComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__["a" /* UserhomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__["a" /* EmployeehomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__["a" /* SigninemployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__["a" /* TestviewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__["a" /* EmployeeFbLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footbar_footbar_component__["a" /* FootbarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_user_auth_facebook_log_in_facebook_log_in_component__["a" /* FacebookLogInComponent */] },
                { path: 'eFbLogin', component: __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__["a" /* EmployeeFbLoginComponent */] },
                { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__home_user_auth_signup_signup_component__["a" /* SignupComponent */] },
                { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_9__home_user_auth_signin_signin_component__["a" /* SigninComponent */] },
                { path: 'uhome', component: __WEBPACK_IMPORTED_MODULE_12__home_user_userhome_userhome_component__["a" /* UserhomeComponent */] },
                { path: 'ehome', component: __WEBPACK_IMPORTED_MODULE_13__home_employee_employeehome_employeehome_component__["a" /* EmployeehomeComponent */] },
                { path: 'esignin', component: __WEBPACK_IMPORTED_MODULE_14__home_employee_signinemployee_signinemployee_component__["a" /* SigninemployeeComponent */] },
                { path: 'esignin', component: __WEBPACK_IMPORTED_MODULE_18__home_employee_employee_fb_login_employee_fb_login_component__["a" /* EmployeeFbLoginComponent */] },
                { path: 'test', component: __WEBPACK_IMPORTED_MODULE_17__testview_testview_component__["a" /* TestviewComponent */] }
            ])
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_11__home_user_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__home_employee_eAuth_e_auth_service__["a" /* EAuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootbarComponent = (function () {
    function FootbarComponent() {
    }
    FootbarComponent.prototype.ngOnInit = function () {
    };
    return FootbarComponent;
}());
FootbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-footbar',
        template: __webpack_require__(213),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], FootbarComponent);

//# sourceMappingURL=footbar.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFbLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeFbLoginComponent = (function () {
    function EmployeeFbLoginComponent(fb, _ngZone, auth, http, router) {
        this.fb = fb;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.name = "";
        this.isUser = false;
        this.id = "";
        this.email = "";
        this.no = false;
        this.firstName = "";
        this.lastName = "";
        var initParams = {
            appId: "820622594754755",
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    EmployeeFbLoginComponent.prototype.ngOnInit = function () { };
    EmployeeFbLoginComponent.prototype.loginWithFacebook = function () {
        this.fb.login()
            .then(function (response) { return console.log('Logged in', response); })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    EmployeeFbLoginComponent.prototype.getEmpInfo = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            var promise = _this.fb.api('/me'); //function give data from fb...
            var emp = " ";
            promise.then(function (res) {
                //variables to save the data that come from fb ...
                _this.id = res.id;
                _this.name = res.name;
                _this.email = res.email;
                _this.isUser = true;
                _this.firstName = _this.name.slice(0, _this.name.indexOf(emp));
                _this.lastName = _this.name.slice(_this.name.indexOf(emp));
                _this.auth.eFacebookLogin({ FbID: _this.id, userName: _this.name, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                    if (data.token) {
                        _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                        _this.router.navigate(['/ehome']);
                    }
                    else {
                        _this.auth.eFacebookSignup({ FbID: _this.id, userName: _this.name, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                            if (data) {
                                console.log("insid the sigin");
                                _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                                _this.router.navigate(['/ehome']);
                            }
                            else {
                                console.log("error");
                                _this.router.navigate(['/esignin']); // if the user is not in DB first go to signup page to registe ...
                            }
                        }); //close of the signup ...
                    } // else close..
                }); //close of first subscribe ...
                console.log(res);
            }); //close of promise ...
        }); //close of fb.login...
    }; // close of the function ...
    EmployeeFbLoginComponent.prototype.logOut = function () {
        this.auth.logout();
    }; //logout function from fb && all the app...
    return EmployeeFbLoginComponent;
}());
EmployeeFbLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-employee-fb-login',
        template: __webpack_require__(214),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__["a" /* EAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__eAuth_e_auth_service__["a" /* EAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], EmployeeFbLoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=employee-fb-login.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeehomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeehomeComponent = (function () {
    function EmployeehomeComponent() {
    }
    EmployeehomeComponent.prototype.ngOnInit = function () {
    };
    return EmployeehomeComponent;
}());
EmployeehomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-employeehome',
        template: __webpack_require__(215),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], EmployeehomeComponent);

//# sourceMappingURL=employeehome.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninemployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninemployeeComponent = (function () {
    function SigninemployeeComponent() {
    }
    SigninemployeeComponent.prototype.ngOnInit = function () {
    };
    return SigninemployeeComponent;
}());
SigninemployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signinemployee',
        template: __webpack_require__(216),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [])
], SigninemployeeComponent);

//# sourceMappingURL=signinemployee.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(217),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookLogInComponent = (function () {
    function FacebookLogInComponent(fb, _ngZone, auth, http, router) {
        this.fb = fb;
        this._ngZone = _ngZone;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.name = "";
        this.isUser = false;
        this.id = "";
        this.email = "";
        this.no = false;
        this.firstName = "";
        this.lastName = "";
        var initParams = {
            appId: "820622594754755",
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.9'
        };
        fb.init(initParams);
    }
    FacebookLogInComponent.prototype.ngOnInit = function () { };
    FacebookLogInComponent.prototype.loginWithFacebook = function () {
        this.fb.login()
            .then(function (response) { return console.log('Logged in', response); })
            .catch(function (e) { return console.error('Error logging in'); });
    };
    FacebookLogInComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.fb.login().then(function (response) {
            var promise = _this.fb.api('/me'); //function give data from fb...
            var emp = " ";
            promise.then(function (res) {
                //variables to save the data that come from fb ...
                _this.id = res.id;
                _this.name = res.name;
                _this.email = res.email;
                _this.isUser = true;
                _this.firstName = _this.name.slice(0, _this.name.indexOf(emp));
                _this.lastName = _this.name.slice(_this.name.indexOf(emp));
                _this.auth.facebookLogin({ FbID: _this.id, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                    if (data.token) {
                        _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                        _this.router.navigate(['/uhome']);
                    }
                    else {
                        _this.auth.facebookSignup({ FbID: _this.id, firstName: _this.firstName, lastName: _this.lastName }).subscribe(function (data) {
                            if (data) {
                                console.log("insid the sigin");
                                _this.auth.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                                _this.router.navigate(['/uhome']);
                            }
                            else {
                                console.log("error");
                                _this.router.navigate(['/signup']); // if the user is not in DB first go to signup page to registe ...
                            }
                        }); //close of the signup ...
                    } // else close..
                }); //close of first subscribe ...
                console.log(res);
            }); //close of promise ...
        }); //close of fb.login...
    }; // close of the function ...
    FacebookLogInComponent.prototype.logOut = function () {
        this.auth.logout();
    }; //logout function from fb && all the app...
    return FacebookLogInComponent;
}()); //close of the class ...
FacebookLogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-facebook-log-in',
        template: __webpack_require__(218),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], FacebookLogInComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=facebook-log-in.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.signinCom = new __WEBPACK_IMPORTED_MODULE_2__signin_signin_component__["a" /* SigninComponent */](router, authService, formBuilder);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators__["a" /* emailValidator */]])],
            conEmail: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        }, { validator: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__validators__["b" /* matching */])('email', 'conEmail', 'password', 'confirmPassword') });
    };
    SignupComponent.prototype.addNewUser = function (value) {
        var _this = this;
        this.user = value;
        this.authService.signup({ user: this.user }).subscribe(function (data) {
            if (data) {
                _this.signinCom.submitSignIn(value);
                _this.authService.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                _this.router.navigate(['/uhome']);
            }
            else {
                _this.router.navigate(['/signup']);
            }
        });
    }; //end of signup function ...
    return SignupComponent;
}()); //end of the class ...
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(220),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserhomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserhomeComponent = (function () {
    function UserhomeComponent(route) {
        this.route = route;
        this.testflag = false;
        this.but1flag = true;
        this.tests = [];
    }
    UserhomeComponent.prototype.ngOnInit = function () {
        this.tests = [{ id: "123", name: "btata" }, { id: "333", name: "lol" }];
        // 'bank' is the name of the route parameter
        this.bankName = this.route.snapshot.params['bank'];
    };
    UserhomeComponent.prototype.testshow = function () {
        this.testflag = !this.testflag;
    };
    return UserhomeComponent;
}());
UserhomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-userhome',
        template: __webpack_require__(221),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], UserhomeComponent);

var _a;
//# sourceMappingURL=userhome.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(222),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestviewComponent = (function () {
    function TestviewComponent() {
    }
    TestviewComponent.prototype.ngOnInit = function () {
    };
    return TestviewComponent;
}());
TestviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-testview',
        template: __webpack_require__(223),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], TestviewComponent);

//# sourceMappingURL=testview.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: #f1f1f1;\r\n  font-family: 'Merriweather', sans-serif;\r\n  padding: 1em;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #a8a8a8;\r\n  text-shadow: 1px 1px 0 white;\r\n}\r\n\r\nform {\r\n  max-width: 600px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}\r\nform textarea {\r\n  height: 126px;\r\n}\r\n\r\n.half {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.left {\r\n  margin-right: 2%;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .half {\r\n    width: 100%;\r\n    float: none;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n/* Clearfix */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  /* 1 */\r\n  display: table;\r\n  /* 2 */\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n  .error {\r\n    color: #FF4500;\r\n    font-size: small;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\nbutton{\r\n   border: none;\r\n      }\r\n\r\ninput{\r\n padding:  0px 0px;\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: #f1f1f1;\r\n  font-family: 'Merriweather', sans-serif;\r\n  padding: 1em;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #a8a8a8;\r\n  text-shadow: 1px 1px 0 white;\r\n}\r\n\r\nform {\r\n  max-width: 400px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n  max-height: 700px;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}\r\nform textarea {\r\n  height: 126px;\r\n}\r\n\r\n.half {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.left {\r\n  margin-right: 2%;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .half {\r\n    width: 100%;\r\n    float: none;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n/* Clearfix */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  /* 1 */\r\n  display: table;\r\n  /* 2 */\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n  .error {\r\n    color: #FF4500;\r\n    font-size: small;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background: #f1f1f1;\r\n  font-family: 'Merriweather', sans-serif;\r\n  padding: 1em;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #a8a8a8;\r\n  text-shadow: 1px 1px 0 white;\r\n}\r\n\r\nform {\r\n  max-width: 400px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n  max-height: 700px;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 100%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}\r\nform textarea {\r\n  height: 126px;\r\n}\r\n\r\n.half {\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.right {\r\n  width: 50%;\r\n}\r\n\r\n.left {\r\n  margin-right: 2%;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .half {\r\n    width: 100%;\r\n    float: none;\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n/* Clearfix */\r\n.cf:before,\r\n.cf:after {\r\n  content: \" \";\r\n  /* 1 */\r\n  display: table;\r\n  /* 2 */\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n\r\n\r\n  .error {\r\n    color: #FF4500;\r\n    font-size: small;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\r\n\r\n/* The side navigation menu */\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 200px; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #8100b4; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover, .offcanvas a:focus{\r\n    color: #f1f1f1;\r\n}\r\n\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\nform {\r\n  max-width: 600px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\nform input,\r\nform textarea {\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 1em;\r\n  border-radius: 8px;\r\n  display: block;\r\n  width: 30%;\r\n  margin-top: 1em;\r\n  font-family: 'Merriweather', sans-serif;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\r\n  resize: none;\r\n}\r\nform input:focus,\r\nform textarea:focus {\r\n  box-shadow: 0 0px 2px #8100b4 !important;\r\n}\r\nform #input-submit {\r\n  color: white;\r\n  background: #8100b4 ;\r\n  cursor: pointer;\r\n}\r\nform #input-submit:hover {\r\n  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn{\r\n  background-color: #C71585;\r\n  width: 110px;\r\n  margin-top: 10px;\r\n  height: 30px;\r\n  line-height: 5px;\r\n}\r\n\r\n#b{\r\n  background-color:#C71585;\r\n  color:white;\r\n  padding: 12px 28px;\r\n  \r\n}\r\n#rbk{\r\n  float: left;\r\n  max-width:18%; \r\n  margin-top: 0px;\r\n  padding-left: 0px;\r\n  height:auto;\r\n}\r\n#navbarCollapse{\r\n  float: right;\r\n  align: center;\r\n  margin-top: 0px;\r\n  padding-right:25px;\r\n}\r\n.fm{\r\n   margin-right: 0px;\r\n}\r\n#d{\r\n  float: right;\r\n}\r\n#sign{\r\n  background-color: none;\r\n  border: white;\r\n}\r\np{\r\n  left: 20%;\r\n  color: white;\r\n}\r\n#last{\r\n  left:30%;\r\n}\r\n.navbar-header{\r\n  border: 0 !important;\r\n  background: 0 !important; \r\n  color: #333 !important;\r\n  background: none !important;\r\n  box-shadow: none !important;\r\n  background-color: white;\r\n}\r\n.navbar-default{\r\n   border: 0 !important;\r\n   background: none !important;\r\n   box-shadow: none !important;\r\n   background-color:white;\r\n   border-color: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<br>\r\n<br>\r\n<router-outlet></router-outlet>\r\n<br>\r\n<app-footbar></app-footbar>\r\n"

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<p>\n  footbar works!\n</p>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<form action=\"/action_page.php\">\r\n<input  type=\"image\"  (click)=\"logOut()\" src=\"../../../../../assets/logout.png\" width=\"40\" height=\"40\"/>\r\n<input  type=\"image\"  (click)=\"getEmpInfo()\" src=\"../../../../../assets/fb.png\" width=\"180\" height=\"50\"/>\r\n</form>\r\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employeehome works!\r\n</p>\r\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signinemployee works!\r\n</p>\r\n<div  class=\"cf\">\r\n  <h1>Sign In</h1>\r\n \r\n  <div class='col-xs-12'>\r\n   \r\n    <form [formGroup]=\"signinForm\"  (ngSubmit)=\"signinForm.valid && submitSignIn(signinForm.value)\" novalidate>\r\n      \r\n\r\n      \r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"email\" id=\"input\" placeholder=\"E-mail\" formControlName=\"email\">\r\n        <div class=\"form-text error\" *ngIf=\"signinForm.controls.email.touched\">\r\n          <div *ngIf=\"signinForm.controls.email.hasError('required')\">Email is required.</div>\r\n          <div *ngIf=\"signinForm.controls.email.hasError('invalidEmail')\">Email is invalid.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"password\" id=\"input\" placeholder=\"Password\" minlength='6' formControlName=\"password\">\r\n        <div class='form-text error' *ngIf=\"signinForm.controls.password.touched\">\r\n          <div *ngIf=\"signinForm.controls.password.hasError('required')\">Password is required.</div>\r\n          <!--<div *ngIf=\"signinForm.controls.password.hasError('minlength')\">Password isn't long enough.</div>-->\r\n        </div>\r\n      </fieldset>\r\n  \r\n\r\n    <input id=\"input-submit\" type='submit' [disabled]='!signinForm.valid' value=\"Submit\">\r\n    <!--<input id=\"input-submit\" type='submit'  routerLink=\"/\" value=\"facebook LogIn\">-->\r\n    \r\n       <a routerLink = \"/signup\" >dont have account? register now</a> \r\n   \r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "\r\n<form action=\"/action_page.php\">\r\n<input  type=\"image\"  (click)=\"logOut()\" src=\"../../../../../assets/logout.png\" width=\"40\" height=\"40\"/>\r\n<input  type=\"image\"  (click)=\"getUserInfo()\" src=\"../../../../../assets/fb.png\" width=\"180\" height=\"50\"/>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--\r\n<h1>Sign In</h1>\r\n<form  (submit)=\"onSubmit()\" class=\"cf\">\r\n  <div class=\"half left cf\">\r\n\t\r\n<input type=\"text\" [(ngModel)]=\"useremail\"  id=\"input-email\"name=\"user_email\" placeholder=\"Email address\">\r\n\t\r\n<input type=\"password\" [(ngModel)]=\"password\" id=\"input-password\" name=\"user_password\" placeholder=\"Password\">\r\n    \r\n  \r\n\r\n <div class=\"half left cf\">\t\r\n   <input type=\"text\" [(ngModel)]=\"useremail\"  id=\"input-email\"name=\"user_email\" placeholder=\"Email address\">\r\n\r\n   <input type=\"password\" [(ngModel)]=\"password\" id=\"input-password\" name=\"user_password\" placeholder=\"Password\">\r\n\r\n  </div>\r\n\r\n  <input type=\"submit\" value=\"Submit\" id=\"input-submit\">\r\n\r\n <a routerLink = \"/signup\" >dont have account? rgister now</a>\r\n  \r\n</form>-->\r\n\r\n<div  class=\"cf\">\r\n  <h1>Login</h1>\r\n \r\n  <div class='col-xs-12'>\r\n   \r\n    <form [formGroup]=\"signinForm\"  (ngSubmit)=\"signinForm.valid && submitSignIn(signinForm.value)\" novalidate>\r\n      \r\n\r\n      \r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"email\" id=\"input\" placeholder=\"E-mail\" formControlName=\"email\">\r\n        <div class=\"form-text error\" *ngIf=\"signinForm.controls.email.touched\">\r\n          <div *ngIf=\"signinForm.controls.email.hasError('required')\">Email is required.</div>\r\n          <div *ngIf=\"signinForm.controls.email.hasError('invalidEmail')\">Email is invalid.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"form-group\">\r\n        \r\n        <input type=\"password\" id=\"input\" placeholder=\"Password\" minlength='6' formControlName=\"password\">\r\n        <div class='form-text error' *ngIf=\"signinForm.controls.password.touched\">\r\n          <div *ngIf=\"signinForm.controls.password.hasError('required')\">Password is required.</div>\r\n          <!--<div *ngIf=\"signinForm.controls.password.hasError('minlength')\">Password isn't long enough.</div>-->\r\n        </div>\r\n      </fieldset>\r\n  \r\n\r\n    <input id=\"input-submit\" type='submit' [disabled]='!signinForm.valid' value=\"Submit\">\r\n    <!--<input id=\"input-submit\" type='submit'  routerLink=\"/\" value=\"facebook LogIn\">-->\r\n    \r\n       <a routerLink = \"/signup\" >dont have account? register now</a> \r\n   \r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "\r\n<!--<h1>Sign Up</h1>\r\n<form  (submit)=\"addNewUser()\" class=\"cf\">\r\n  <div class=\"half left cf\">\r\n<input id=\"input-firstname\"  type=\"text\" name=\"firstname\"  placeholder=\"First name\" [(ngModel)]=\"firstName\"/>\r\n<input id=\"input-firstname\"  type=\"text\" name=\"lastname\"  placeholder=\"Last name\" [(ngModel)]=\"lastName\"/>\r\n<input id=\"input-email\" required=\"\" type=\"email\" name=\"email\"   [(ngModel)]=\"email\" placeholder=\"Email address\">\r\n<input id=\"input-email\"  required=\"\" type=\"email\" name=\"email\"  [(ngModel)]=\"conEmail\" placeholder=\"Comfirm your email\">-->\r\n<!--<input id=\"input-password\"  required=\"\" name=\"password\" type=\"password\"  minlength=\"4\" maxlength=\"16\"  [(ngModel)]=\"password\" placeholder=\"Password\"> \r\n<input id=\"input-password\" required=\"\" name=\"password\" type=\"password\" minlength=\"4\" maxlength=\"16\" placeholder=\"Comfirm your email\"  pb-role=\"password\" [(ngModel)]=\"conPassword\">\r\n \r\n  </div>\r\n \r\n  <input type=\"submit\" value=\"Submit\" id=\"input-submit\">\r\n <a routerLink = \"/signin\" >Login Page</a>\r\n  \r\n</form>-->\r\n\r\n\r\n\r\n\r\n<div  class=\"cf\">\r\n  \r\n    <h1>Signup</h1>\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForm.valid && addNewUser(registerForm.value)\" novalidate>\r\n      \r\n      <fieldset class=\"half left cf\">\r\n       \r\n        <input type=\"text\" id=\"input\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n        <div class='form-text error' *ngIf='registerForm.controls.firstName.touched'>\r\n          <div *ngIf=\"registerForm.controls.firstName.hasError('required')\">First name is required.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"half left cf\">\r\n        \r\n        <input type=\"text\" id=\"input\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n        <div class='form-text error' *ngIf='registerForm.controls.lastName.touched'>\r\n          <div *ngIf=\"registerForm.controls.lastName.hasError('required')\">Last name is required.</div>\r\n        </div>\r\n      </fieldset> \r\n\r\n      \r\n      <fieldset class=\"half left cf\">\r\n        <input type=\"email\" id=\"input\" placeholder=\"E-mail\" formControlName=\"email\">\r\n        <div class=\"form-text error\" *ngIf=\"registerForm.controls.email.touched\">\r\n          <div *ngIf=\"registerForm.controls.email.hasError('required')\">Email is required.</div>\r\n          <div *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Email is invalid.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"half left cf\">\r\n\r\n        <input type=\"email\" id=\"input\" placeholder=\"Comfirm your email\"  formControlName=\"conEmail\" >\r\n        <div class='form-text error' *ngIf=\"registerForm.controls.conEmail.touched\">\r\n          <div *ngIf=\"registerForm.hasError('mismatched')\">Emails do not match.</div>\r\n        </div>\r\n      </fieldset>\r\n\r\n      <fieldset class=\"half left cf\">\r\n        <input type=\"password\" id=\"input\" placeholder=\"Password\" minlength='6' formControlName=\"password\">\r\n        <div class='form-text error' *ngIf=\"registerForm.controls.password.touched\">\r\n          <div *ngIf=\"registerForm.controls.password.hasError('required')\">Password is required.</div>\r\n          <div *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough.</div>\r\n        </div>\r\n      </fieldset>\r\n  \r\n      <fieldset class=\"half left cf\">\r\n       \r\n        <input type=\"password\" id=\"input\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n        <div class='form-text error' *ngIf=\"registerForm.controls.confirmPassword.touched\">\r\n          <div *ngIf=\"registerForm.hasError('mismatchedpass')\">Passwords do not match.</div>\r\n        </div>\r\n      </fieldset>\r\n  \r\n\r\n     \r\n      <input id=\"input-submit\" type='submit' [disabled]='!registerForm.valid' value=\"Submit Registration Form\">\r\n       <a routerLink = \"/signin\" >Login Page</a>\r\n    </form>\r\n    \r\n \r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  userhome works!\r\n</p>\r\n<div>\r\n\r\n<form class=\"cf\">\r\n<input *ngIf=\"!testflag\" id=\"input-submit\" type='submit' (click)=\"testshow()\" value=\"view testsss\">\r\n</form>\r\n\r\n<div *ngIf=\"testflag\" class=\"sidenav\">\r\n<a (click)=\"testshow()\"> close</a>\r\n <div *ngFor=\"let test of tests\">\r\n <!--<a routerLink = \"/test\" routerLinkActive=\"active\" >{{test.name}}</a>-->\r\n <a [routerLink]=\"['/test', { _id: test.id }]\">{{test.name}}</a>\r\n\r\n <!--sending test id from user home component to test iew controller-->\r\n </div>\r\n  <a href=\"#\">About</a>\r\n \r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<nav class=\"navbar navbar-default\">\n    <div class=\"row\">\n   \n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n           <img style=\"max-width:18%; margin-top: -7px;padding-left: 0px;\n        height:auto;\" src=\"assets/znewlogo.png\"   />\n       \n        \n       \n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" >\n            <ul class=\"nav navbar-nav\" >\n                 <li ><a href=\"#\" target=\"_blank\">The Program</a></li>\n                 <li><a href=\"#\" target=\"_blank\"> Curiculum</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Volunteers</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Partners</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Hire our Grads</a></li>\n                 <li><a href=\"#\" target=\"_blank\">Alumni Outcome</a></li>\n                 <li><a href=\"#\" target=\"_blank\">FAQ</a></li>\n                 <li ><button type=\"button\" id=\"b\" class=\"btn\">Apply</button></li>\n            </ul>\n           \n          </div> \n         </div>\n </div>\n\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  testview works!\r\n</p>\r\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    AuthService.prototype.signin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/signin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.signup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/signup', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeInLocalStorage = function (token, id, name) {
        localStorage.setItem('id_token', token); //store the user token in the localStorage ... 
        localStorage.setItem('user-id', id); //store the user _id in the localStorage ... 
        localStorage.setItem('user-name', name); //store the user name in the localStorage ... 
    };
    AuthService.prototype.facebookLogin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/facebookLogin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.facebookSignup = function (user) {
        console.log("hiiiii", user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/facbookSignup', { user: user }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.fb.logout().then(function () { return console.log('Logged out!'); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EAuthService = (function () {
    function EAuthService(http, fb) {
        this.http = http;
        this.fb = fb;
    }
    EAuthService.prototype.storeInLocalStorage = function (token, id, name) {
        localStorage.setItem('id_token', token); //store the user token in the localStorage ... 
        localStorage.setItem('user-id', id); //store the user _id in the localStorage ... 
        localStorage.setItem('user-name', name); //store the user name in the localStorage ... 
    };
    EAuthService.prototype.eFacebookLogin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json'); //add the type of data to the header...
        return this.http.post('api/user/facebookLogin', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EAuthService.prototype.eFacebookSignup = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/user/facbookSignup', { user: user }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EAuthService.prototype.logout = function () {
        localStorage.clear();
        this.fb.logout().then(function () { return console.log('Logged out!'); });
    };
    return EAuthService;
}());
EAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object])
], EAuthService);

var _a, _b;
//# sourceMappingURL=e-auth.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(router, authService, formBuilder) {
        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__validators__["a" /* emailValidator */]])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    };
    SigninComponent.prototype.submitSignIn = function (value) {
        var _this = this;
        console.log(value);
        this.user = value;
        this.authService.signin(this.user).subscribe(function (data) {
            if (data.isUser === false) {
                console.log(data); // if the user is not in DB first go to signup page to registe ...
            }
            else if (data.isValidPass === false) {
                console.log(data); //send msg wrong pass
            }
            else {
                _this.authService.storeInLocalStorage(data.token, data.id, data.userName); // store that data in localStorage ...
                _this.router.navigate(['/uhome']);
            }
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__(219),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailValidator;
/* harmony export (immutable) */ __webpack_exports__["b"] = matching;
// SINGLE FIELD VALIDATORS
function emailValidator(control) {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
// FORM GROUP VALIDATORS matching emails || passwords
function matching(emailKey, conEmailKey, passwordKey, confirmPasswordKey) {
    return function (group) {
        var email = group.controls[emailKey];
        var conEmail = group.controls[conEmailKey];
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedpass: true
            };
        }
        if (email.value !== conEmail.value) {
            return {
                mismatched: true
            };
        }
    };
}
//# sourceMappingURL=validators.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map