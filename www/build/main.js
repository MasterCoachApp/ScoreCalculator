webpackJsonp([5],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calculators/decathlon-calculator/decathlon-calculator.module": [
		274,
		12
	],
	"../pages/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module": [
		275,
		11
	],
	"../pages/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module": [
		276,
		10
	],
	"../pages/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module": [
		277,
		9
	],
	"../pages/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module": [
		278,
		8
	],
	"../pages/unit-converter/unit-converter.module": [
		284,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.displayCalculator = function (type) {
        switch (type) {
            case 'decathlon':
                this.modalCtrl.create('DecathlonCalculatorPage').present();
                break;
            case 'heptathlonM':
                this.modalCtrl.create('HeptathlonMCalculatorPage').present();
                break;
            case 'pentathlonM':
                this.modalCtrl.create('PentathlonMCalculatorPage').present();
                break;
            case 'heptathlonW':
                this.modalCtrl.create('HeptathlonWCalculatorPage').present();
                break;
            case 'pentathlonW':
                this.modalCtrl.create('PentathlonWCalculatorPage').present();
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/home/home.html"*/'<!--\n  Generated template for the ToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title start>Tools</ion-title>-->\n    <!--<ion-buttons end>-->\n      <!--<button ion-button end>-->\n        <!--<ion-icon style="font-size: 30px; margin-right: 15px;" color="primary" name="ios-archive-outline"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content>\n  <ion-list-header>Score Calculators</ion-list-header>\n\n  <ion-list>\n    <ion-note>Mercier</ion-note>\n    <ion-item class="listItem">\n      <ion-label>Indoor</ion-label>\n    </ion-item>\n    <ion-item class="listItem">\n      <ion-label>Outdoor</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MEN</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'decathlon\')" class="listItem">\n      <ion-label>Decathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'heptathlonM\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'pentathlonM\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>Women</ion-note>\n    <ion-item  tappable (click)="displayCalculator(\'heptathlonW\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item  tappable (click)="displayCalculator(\'pentathlonW\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list-header>Unit Converter</ion-list-header>\n  <ion-list>\n    <ion-item class="listItem">\n      Converter\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenPointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenPointsProvider = /** @class */ (function () {
    function MenPointsProvider() {
    }
    MenPointsProvider.prototype.getDayOne = function (outputs) {
        var dayOneScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayOne(key)) {
                    dayOneScore += outputs[key];
                }
            }
        }
        return dayOneScore;
    };
    MenPointsProvider.prototype.getDayTwo = function (outputs) {
        var dayTwoScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayTwo(key)) {
                    dayTwoScore += outputs[key];
                }
            }
        }
        return dayTwoScore;
    };
    MenPointsProvider.prototype.getTotal = function (outputs) {
        var dayOne = this.getDayOne(outputs);
        var dayTwo = this.getDayTwo(outputs);
        return dayOne + dayTwo;
    };
    MenPointsProvider.prototype.isDayOne = function (value) {
        return (value == "hundred" || value == "lj" || value == "sp" || value == "hj" || value == "four" || value == "sixty");
    };
    MenPointsProvider.prototype.isDayTwo = function (value) {
        return (value == "hurdles" || value == "dt" || value == "pv" || value == "jt" || value == "fifteen" || value == "sixtyHurdles" || value == "thousand");
    };
    MenPointsProvider.prototype.getEventPoints = function (event, score) {
        var a = 0;
        var b = 0;
        var c = 0;
        var cm = 0;
        var seconds = 0;
        switch (event) {
            case "hundred"://100
                a = 25.4347;
                b = 18;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "lj"://long jump
                a = 0.14354;
                b = 220;
                c = 1.40;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "sp"://shot put
                a = 51.39;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score, a, b, c);
            case "hj"://High jump
                a = 0.8465;
                b = 75;
                c = 1.42;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "four"://400
                a = 1.53775;
                b = 82;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "hurdles"://110mH
                a = 5.74352;
                b = 28.5;
                c = 1.92;
                return this.calculateRunning(score, a, b, c);
            case "dt"://discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score, a, b, c);
            case "pv"://pole vault
                a = 0.2797;
                b = 100;
                c = 1.35;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "jt"://javelin
                a = 10.14;
                b = 7;
                c = 1.08;
                return this.calculateField(score, a, b, c);
            case "fifteen"://1500
                a = 0.03768;
                b = 480;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
            case "sixty":
                a = 58.0150;
                b = 11.5;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "sixtyHurdles":
                a = 20.5173;
                b = 15.5;
                c = 1.92;
                return this.calculateRunning(score, a, b, c);
            case "thousand":
                a = 0.08713;
                b = 305.5;
                c = 1.85;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
        }
    };
    MenPointsProvider.prototype.calculateRunning = function (score, a, b, c) {
        return Math.floor(a * Math.pow(b - score, c));
    };
    MenPointsProvider.prototype.calculateField = function (score, a, b, c) {
        return Math.floor(a * Math.pow(score - b, c));
    };
    MenPointsProvider.prototype.getSeconds = function (score) {
        var time = score.split(":");
        var min = Number(time[0]);
        var sec = Number(time[1]);
        if (isNaN(min))
            min = 0;
        if (isNaN(sec))
            sec = 0;
        return (min * 60 + sec);
    };
    MenPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenPointsProvider);
    return MenPointsProvider;
}());

//# sourceMappingURL=mens.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_calculators_mens__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_calculators_womens__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calculators/decathlon-calculator/decathlon-calculator.module#DecathlonCalculatorPageModule', name: 'DecathlonCalculatorPage', segment: 'decathlon-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module#HeptathlonMCalculatorPageModule', name: 'HeptathlonMCalculatorPage', segment: 'heptathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module#HeptathlonWCalculatorPageModule', name: 'HeptathlonWCalculatorPage', segment: 'heptathlon-w-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module#PentathlonMCalculatorPageModule', name: 'PentathlonMCalculatorPage', segment: 'pentathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module#PentathlonWCalculatorPageModule', name: 'PentathlonWCalculatorPage', segment: 'pentathlon-w-calculator', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_calculators_mens__["a" /* MenPointsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_calculators_womens__["a" /* WomenPointsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomenPointsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WomenPointsProvider = /** @class */ (function () {
    function WomenPointsProvider() {
    }
    WomenPointsProvider.prototype.getDayOne = function (outputs) {
        var dayOneScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayOne(key)) {
                    dayOneScore += outputs[key];
                }
            }
        }
        return dayOneScore;
    };
    WomenPointsProvider.prototype.getDayTwo = function (outputs) {
        var dayTwoScore = 0;
        for (var key in outputs) {
            if (outputs.hasOwnProperty(key)) {
                if (this.isDayTwo(key)) {
                    dayTwoScore += outputs[key];
                }
            }
        }
        return dayTwoScore;
    };
    WomenPointsProvider.prototype.getTotal = function (outputs) {
        var dayOne = this.getDayOne(outputs);
        var dayTwo = this.getDayTwo(outputs);
        return dayOne + dayTwo;
    };
    WomenPointsProvider.prototype.isDayOne = function (value) {
        return (value == "hurdles" || value == "sp" || value == "hj" || value == "two");
    };
    WomenPointsProvider.prototype.isDayTwo = function (value) {
        return (value == "lj" || value == "jt" || value == "eight");
    };
    WomenPointsProvider.prototype.getEventPoints = function (event, score) {
        var a = 0;
        var b = 0;
        var c = 0;
        var cm = 0;
        var seconds = 0;
        switch (event) {
            case "hundred"://100
                a = 25.4347;
                b = 18;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "lj"://long jump
                a = 0.188807;
                b = 210;
                c = 1.41;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "sp"://shot put
                a = 56.0211;
                b = 1.5;
                c = 1.05;
                return this.calculateField(score, a, b, c);
            case "hj"://High jump
                a = 1.84523;
                b = 75;
                c = 1.348;
                cm = score * 100;
                return this.calculateField(cm, a, b, c);
            case "two"://two
                a = 4.99087;
                b = 42.5;
                c = 1.81;
                return this.calculateRunning(score, a, b, c);
            case "hurdles"://110mH
                a = 9.23076;
                b = 26.7;
                c = 1.835;
                return this.calculateRunning(score, a, b, c);
            case "dt"://discus
                a = 12.91;
                b = 4;
                c = 1.10;
                return this.calculateField(score, a, b, c);
            case "jt"://javelin
                a = 15.9803;
                b = 3.8;
                c = 1.04;
                return this.calculateField(score, a, b, c);
            case "eight"://1500
                a = 0.11193;
                b = 254;
                c = 1.88;
                seconds = this.getSeconds(score);
                return this.calculateRunning(seconds, a, b, c);
            case "sixtyHurdles":
                a = 20.0479;
                b = 17;
                c = 1.835;
                return this.calculateRunning(score, a, b, c);
        }
    };
    WomenPointsProvider.prototype.calculateRunning = function (score, a, b, c) {
        return Math.floor(a * Math.pow(b - score, c));
    };
    WomenPointsProvider.prototype.calculateField = function (score, a, b, c) {
        return Math.floor(a * Math.pow(score - b, c));
    };
    WomenPointsProvider.prototype.getSeconds = function (score) {
        var time = score.split(":");
        var min = Number(time[0]);
        var sec = Number(time[1]);
        if (isNaN(min))
            min = 0;
        if (isNaN(sec))
            sec = 0;
        return (min * 60 + sec);
    };
    WomenPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WomenPointsProvider);
    return WomenPointsProvider;
}());

//# sourceMappingURL=womens.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map