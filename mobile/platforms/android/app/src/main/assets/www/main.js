(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- src/app/app.component.html -->\n\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">KnowYourMovie</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"nav-link\" (click)=\"home()\"><img class=\"img-fluid rounded-circle float-right\" width=\"8%\"  src=\"{{pic}}\"></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!auth.isAuthenticated()\">\n        <a class=\"nav-link\" (click)=\"login()\">Log In</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"nav-link\" (click)=\"recommendMovies()\">Recommend Movies</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"nav-link\" (click)=\"logout()\" data-toggle=\"modal\" data-target=\"#logoutModal\">Log Out</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://www.linkedin.com/in/ankur-sharma-341446b1/\">Contact Me</a>\n      </li>\n\n    </ul>\n    <ul>\n    </ul>\n  </div>\n</nav>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">KnowYourMovie</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        You have been Successfully Logged Out!!\n      </div>\n      <div class=\"modal-footer\">\n        <a href=\"\" routerLink=\"/\" data-dismiss=\"modal\">Go To HomePage</a>\n      </div>\n    </div>\n  </div>\n</div>\n<img class=\"img-fluid\" *ngIf=\"!auth.isAuthenticated()\" src=\"assets/images/years-for-movies.jpg\">\n<div>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.title = 'knowYourMovie';
        this.isAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.currentProfile.subscribe(function (pic) { return _this.pic = pic; });
        //this.getAuth = setInterval(()=>{this.isAuthenticated = this.auth.isAuthenticated()},200)
    };
    AppComponent.prototype.login = function () {
        this.auth.login();
        //this.router.navigate(["/home"]);
    };
    AppComponent.prototype.home = function () {
        this.router.navigate(["/home"]);
    };
    AppComponent.prototype.recommendMovies = function () {
        this.router.navigate(['/recommend']);
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/dist/index.js");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_star_rating__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recommend/recommend.component */ "./src/app/recommend/recommend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_10__["RecommendComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_star_rating__WEBPACK_IMPORTED_MODULE_5__["StarRatingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                    { path: "recommend", component: _recommend_recommend_component__WEBPACK_IMPORTED_MODULE_10__["RecommendComponent"] }
                ])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _movie_service__WEBPACK_IMPORTED_MODULE_7__["MovieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Auth0Lock } from 'auth0-lock';
//import { tokenNotExpired } from 'angular2-jwt'; 
//import { Observable } from 'rxjs';

window.global = window;
//const Auth0Lock = require('auth0-lock').default;
var AuthService = /** @class */ (function () {
    //lock = new Auth0Lock('PKKzo3TocEJ8lhPXgBIjuGZsxRdoJVL9','swiftapps.auth0.com', {});
    function AuthService(router) {
        // this.lock.on('authenticated',(authResult: any) => {
        //     this.lock.getProfile(authResult.idToken,function(error:any,profile: any){
        //         if(error){
        //             throw new Error(error);
        //         }
        //         localStorage.setItem('id_token',authResult.idToken);
        //         localStorage.setItem('profile',JSON.stringify(profile));
        //     });
        this.router = router;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: 'PKKzo3TocEJ8lhPXgBIjuGZsxRdoJVL9',
            domain: 'swiftapps.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'http://localhost:4200/home',
            scope: 'openid email profile'
        });
        this.profileSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentProfile = this.profileSource.asObservable();
        // })
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_details');
        // Go back to the home route
        //this.router.navigate([{outlets: {primary: 'path',logout: 'path'}}]);
        //this.router.navigate(["/"]);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth0.parseHash(function (err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    window.location.hash = '';
                    _this.setSession(authResult);
                    _this.auth0.client.userInfo(authResult.accessToken, function (err, user) {
                        localStorage.setItem("user_details", JSON.stringify(user));
                        resolve();
                    });
                }
                else if (err) {
                    _this.router.navigate(['/']);
                    console.log(err);
                    reject();
                }
            });
        });
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.changeProfile = function (pic) {
        this.profileSource.next(pic);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"profile\">\n  <h4>Hello, {{profile.name}}</h4>\n  <p>Let's rate some movies:</p>\n  <hr />\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"searchMovie(myForm.value)\">\n    <input type=\"text\" placeholder=\"Search..\" name=\"search\" [formControl]=\"myForm.controls['search']\">\n    <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n  </form>\n  <br />\n</div>\n<!--\n<div class=\"container-fluid\" *ngIf=\"searchResults\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\" *ngFor=\"let is of searchResults.results\">\n      <table style=\"border: 3px solid black;\" width=\"100%\">\n        <tr>\n          <td style=\"border: 3px solid black;\">\n            <div class=\"col-sm-2\">\n            <img src=\"https://image.tmdb.org/t/p/w200/{{is.poster_path}}\">\n            </div>\n            <div class=\"col-sm-10\">\n              <h4>{{is.title}}(Release Date: {{is.release_date}})</h4>\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <p><i>{{is.overview}}</i></p>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </table>\n\n    </div>\n    <hr />\n  </div>\n-->\n<div *ngIf=\"searchResults\">\n  <div class=\"card container-fluid\" *ngFor=\"let is of searchResults.results\">\n    <form [formGroup]=\"reviewForm\" (ngSubmit)=\"submitRating()\">\n      <img width=\"20%\" height=\"40%\" src=\"https://image.tmdb.org/t/p/w500/{{is.poster_path}}\" alt=\"image not available\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{is.title}}(Release Date: {{is.release_date}})</h5>\n        <p class=\"card-text\"><i>{{is.overview}}</i></p>\n        <p class=\"card-text\">Your Rating:</p>\n        <div *ngIf=\"moviesRated!='norecords' && moviesRated.hasOwnProperty(is.id)\" class=\"pull-left\">\n\n          <star-rating-comp [starType]=\"'svg'\" [rating]=\"moviesRated[is.id]\" (onClick)=\"onClick($event,is.id,is.poster_path,is.overview)\"></star-rating-comp>\n        </div>\n        <div *ngIf=\"moviesRated=='norecords' || (moviesRated && (!moviesRated.hasOwnProperty(is.id)))\" class=\"pull-left\">\n          <star-rating-comp [starType]=\"'svg'\" [rating]=\"0\" (onClick)=\"onClick($event,is.id,is.poster_path,is.overview)\"></star-rating-comp>\n        </div>\n        <div class=\"pull-left\">\n          <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"selectedId == is.id\">Submit Review</button>\n          <br />\n          <span *ngIf=\"ratingResponse && ratingResponse.id == is.id\" class=\"badge badge-success\">Review Submitted!!</span>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, fb, ms, http, router) {
        var _this = this;
        this.auth = auth;
        this.ms = ms;
        this.http = http;
        this.router = router;
        this.ratingObject = { "id": '', "rating": '', "email": '' };
        this.onClick = function ($event, id, poster, desc) {
            _this.selectedId = id;
            _this.ratingObject["id"] = _this.selectedId;
            _this.ratingObject["rating"] = $event.rating;
            _this.ratingObject["poster"] = poster;
            _this.ratingObject["overview"] = desc;
        };
        //console.log("In Constructor::",JSON.parse(localStorage.getItem('user_details')));
        this.auth.handleAuthentication().then(function () {
            _this.profile = JSON.parse(localStorage.getItem('user_details'));
            _this.auth.changeProfile(_this.profile["picture"]);
            _this.ratingObject["nickname"] = _this.profile.nickname;
        });
        this.myForm = fb.group({
            'search': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.reviewForm = fb.group({
            'rating': ['']
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile = JSON.parse(localStorage.getItem('user_details'));
        if (this.profile) {
            this.ratingObject["nickname"] = this.profile.nickname;
            this.ms.ratedMovies(this.profile.nickname).subscribe(function (res) {
                _this.moviesRated = res;
                console.log("Rated Movies::", _this.moviesRated);
            });
        }
    };
    HomeComponent.prototype.searchMovie = function (movieName) {
        var _this = this;
        this.selectedId = 0;
        this.ratingResponse = null;
        this.ms.searchMovie(movieName["search"]).subscribe(function (res) {
            _this.searchResults = res;
        });
        this.ms.ratedMovies(this.profile.nickname).subscribe(function (res) {
            if (res["norecords"] == 1)
                _this.moviesRated = "norecords";
            else
                _this.moviesRated = res;
        });
    };
    HomeComponent.prototype.submitRating = function () {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.http.post('http://ec2-54-244-2-94.us-west-2.compute.amazonaws.com:6205/submitreview', this.ratingObject, httpOptions)
            .subscribe(function (res) {
            _this.ratingResponse = res;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.imgArray = [];
    }
    MovieService.prototype.searchMovie = function (name) {
        var url = "https://api.themoviedb.org/3/search/movie?api_key=98c3f8bd00e0a1138dccdc4dc8a7d1b9&language=en-US&query=" + name + "&page=1&include_adult=false";
        return this.http.get(url);
    };
    MovieService.prototype.submitRating = function (ratingObj) {
    };
    MovieService.prototype.recommendMovies = function (person) {
        var recommendObject = {
            "nickname": person
        };
        var movies;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('http://ec2-54-244-2-94.us-west-2.compute.amazonaws.com:6205/recommendMovies', recommendObject, httpOptions);
    };
    MovieService.prototype.ratedMovies = function (person) {
        var url = "http://ec2-54-244-2-94.us-west-2.compute.amazonaws.com:6205/getRatedMovies?person=" + person;
        return this.http.get(url);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/recommend/recommend.component.css":
/*!***************************************************!*\
  !*** ./src/app/recommend/recommend.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recommend/recommend.component.html":
/*!****************************************************!*\
  !*** ./src/app/recommend/recommend.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"imgArray.length == 0\">\n  <h2> We couldn't find movies that match your taste! Try rating some more movies.</h2>\n</div>\n<div *ngIf=\"imgArray.length>0\">\n<h2>Here is a list of recommended movies for you!!</h2>\n<div class=\"card container-fluid\" *ngFor=\"let ia of imgArray\">\n  <img width=\"20%\" height=\"40%\" src=\"https://image.tmdb.org/t/p/w500/{{ia.poster_path}}\" alt=\"image not available\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ia.title}}(Release Date: {{ia.release_date}})</h5>\n    <p class=\"card-text\"><i>{{ia.overview}}</i></p>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/recommend/recommend.component.ts":
/*!**************************************************!*\
  !*** ./src/app/recommend/recommend.component.ts ***!
  \**************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendComponent = /** @class */ (function () {
    function RecommendComponent(ms, http) {
        this.ms = ms;
        this.http = http;
        this.imgArray = [];
    }
    RecommendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile = JSON.parse(localStorage.getItem('user_details'));
        this.ms.recommendMovies(this.profile["nickname"])
            .subscribe(function (res) {
            _this.movies = res;
            _this.movies.forEach(function (movieId) {
                var url = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=98c3f8bd00e0a1138dccdc4dc8a7d1b9&language=en-US";
                _this.http.get(url)
                    .subscribe(function (mRes) {
                    _this.imgArray.push(mRes);
                });
            });
        });
    };
    RecommendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommend',
            template: __webpack_require__(/*! ./recommend.component.html */ "./src/app/recommend/recommend.component.html"),
            styles: [__webpack_require__(/*! ./recommend.component.css */ "./src/app/recommend/recommend.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecommendComponent);
    return RecommendComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });
var onDeviceReady = function () {
    window.open = cordova.InAppBrowser.open;
};
document.addEventListener('deviceready', onDeviceReady, false);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ankur/Documents/projects/knowYourMovie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map