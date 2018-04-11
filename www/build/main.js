webpackJsonp([9],{

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
		8
	],
	"../pages/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module": [
		275,
		7
	],
	"../pages/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module": [
		276,
		6
	],
	"../pages/calculators/mercier/mercier.module": [
		277,
		5
	],
	"../pages/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module": [
		278,
		4
	],
	"../pages/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module": [
		279,
		3
	],
	"../pages/calculators/unit-converter/unit-converter.module": [
		280,
		2
	],
	"../pages/utilities/starting-gun/starting-gun.module": [
		281,
		1
	],
	"../pages/utilities/stopwatch/stopwatch.module": [
		282,
		0
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
            case 'units':
                this.modalCtrl.create('UnitConverterPage').present();
                break;
            case 'gun':
                this.modalCtrl.create('StartingGunPage').present();
                break;
            case 'stopwatch':
                this.modalCtrl.create('StopwatchPage').present();
                break;
            case 'mercier':
                this.modalCtrl.create('MercierPage').present();
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator-Fork/src/pages/home/home.html"*/'<!--\n  Generated template for the ToolsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title start>Tools</ion-title>-->\n    <!--<ion-buttons end>-->\n      <!--<button ion-button end>-->\n        <!--<ion-icon style="font-size: 30px; margin-right: 15px;" color="primary" name="ios-archive-outline"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content>\n  <ion-list-header>Utilities</ion-list-header>\n\n  <ion-list>\n    <ion-note>TOOLS</ion-note>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'stopwatch\')">\n      <ion-label>Stopwatch</ion-label>\n    </ion-item>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'gun\')">\n      <ion-label>Starting Gun</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MERCIER</ion-note>\n    <ion-item class="listItem" tappable (click)="displayCalculator(\'mercier\')">\n      <ion-label>Outdoor / Indoor</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>MEN</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'decathlon\')" class="listItem">\n      <ion-label>Decathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'heptathlonM\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item tappable (click)="displayCalculator(\'pentathlonM\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>WOMEN</ion-note>\n    <ion-item  tappable (click)="displayCalculator(\'heptathlonW\')" class="listItem">\n      <ion-label>Heptathlon</ion-label>\n    </ion-item>\n    <ion-item  tappable (click)="displayCalculator(\'pentathlonW\')" class="listItem">\n      <ion-label>Pentathlon</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note>UNIT CONVERTER</ion-note>\n    <ion-item tappable (click)="displayCalculator(\'units\')" class="listItem">\n      Converter\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator-Fork/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
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

/***/ 195:
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

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercierPointsProvider; });
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

var MercierPointsProvider = /** @class */ (function () {
    function MercierPointsProvider() {
    }
    MercierPointsProvider.prototype.calculateMercierScore = function (inputs) {
        var score = 0;
        var noConvert = 0;
        if (inputs['select'] == "100m") {
            score = 290.52712 * (100 / inputs['sec']) - 1953.2266;
        }
        if (inputs['select'] == "200m") {
            score = 267.75893 * (200 / inputs['sec']) - 1703.6447;
        }
        if (inputs['select'] == "400m") {
            if (inputs['min'] > 0 && inputs['min'] < 9) {
                alert("Please enter 400m performance in SECONDS only.");
            }
            else {
                score = 262.37121 * (400 / inputs['sec']) - 1402.7708;
            }
        }
        if (inputs['select'] == "800m") {
            score = 302.9089 * (800 / ((60 * inputs['min']) + inputs['sec'])) - 1377.5673;
        }
        if (inputs['select'] == "1500m") {
            score = 320.6038 * (1500 / ((60 * inputs['min']) + inputs['sec'])) - 1314.0045;
        }
        if (inputs['select'] == "5000m") {
            score = 342.8535 * (5000 / ((60 * inputs['min']) + inputs['sec'])) - 1234.1959;
        }
        if (inputs['select'] == "10000m") {
            score = 349.8535 * (10000 / ((60 * inputs['min']) + inputs['sec'])) - 1171.2847;
        }
        if (inputs['select'] == "Marathon") {
            score = 384.5408 * (42194.99 / ((((60 * inputs['hr']) + inputs['sec']) * 60) + inputs['sec'])) - 1161.8021;
        }
        if (inputs['select'] == "High Jump") {
            score = 2227.8560 * Math.sqrt(inputs['pts']) - 2447.9277;
        }
        if (inputs['select'] == "Long Jump") {
            score = 1065.6947 * Math.sqrt(inputs['pts']) - 2120.1067;
        }
        if (inputs['select'] == "Triple Jump") {
            score = 717.9505 * Math.sqrt(inputs['pts']) - 2042.6637;
        }
        if (inputs['select'] == "Pole Vault") {
            score = 839.81066 * Math.sqrt(inputs['pts']) - 1065.4477;
        }
        if (inputs['select'] == "Discus") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 163.07395 * Math.sqrt(inputs['pts']) - 361.92521;
            }
            else {
                score = 194.62465 * Math.sqrt(inputs['pts']) - 628.31962;
            }
        }
        if (inputs['select'] == "Javelin") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 170.11116 * Math.sqrt(inputs['pts']) - 417.375499;
            }
            else {
                score = 168.13381 * Math.sqrt(inputs['pts']) - 601.71996;
            }
        }
        if (inputs['select'] == "Shot Put") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 326.4432919 * Math.sqrt(inputs['pts']) - 474.3020648;
            }
            else {
                score = 363.768931 * Math.sqrt(inputs['pts']) - 701.8195151;
            }
        }
        if (inputs['select'] == "Hammer") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                noConvert = 1;
                score = 155.50271 * Math.sqrt(inputs['pts']) - 364.68208;
            }
            else {
                score = 166.96750 * Math.sqrt(inputs['pts']) - 537.76945;
            }
        }
        if (inputs['select'] == "100mH") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 245.697911 * (100 / inputs['sec']) - 974.427319;
        }
        if (inputs['select'] == "110mH") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 232.393146 * (110 / inputs['sec']) - 977.72885;
        }
        if (inputs['select'] == "400mH") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 235.892182 * (400 / inputs['sec']) - 772.912406;
            }
            else {
                score = 234.92702 * (400 / inputs['sec']) - 990.21339;
            }
        }
        if (inputs['select'] == "Heptathlon") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.12948997 * inputs['pts'] + 133.9909428;
        }
        if (inputs['select'] == "Decathlon") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            score = 0.1037911 * inputs['pts'] + 81.780218;
        }
        if (inputs['select'] == "3000m SC") {
            if (inputs['gender'] == "women") {
                inputs['gender'] = "men";
                score = 308.3188307 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 700.8207684;
            }
            else {
                score = score = 317.0980312 * (3000 / ((60 * inputs['min']) + inputs['pts'])) - 977.0359001;
            }
        }
        if (inputs['select'] == "10km Walk") {
            if (inputs['gender'] == "men") {
                alert("Selected event is women-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            ;
            score = 456.1325749 * (10000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 818.4565095;
        }
        if (inputs['select'] == "20km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            ;
            score = 514.2338335 * (20000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1188.463045;
        }
        if (inputs['select'] == "50km Walk") {
            if (inputs['gender'] == "women") {
                alert("Selected event is men-only.  Gender corrected.");
            }
            inputs['gender'] = "men";
            if (isNaN(inputs['hr'])) {
                inputs['hr'] = 0;
            }
            score = 578.7732604 * (50000 / ((((60 * inputs['hr']) + inputs['min']) * 60) + inputs['sec']))
                - 1157.14858;
        }
        if (inputs['select'] == "-------") {
            alert("Please select an event!");
            return;
        }
        if (inputs['select'] == "150m") {
            score = 265.3031224 * (150 / inputs['sec']) - 1720.7734;
        }
        if (inputs['select'] == "300m") {
            score = 251.7769577 * (300 / inputs['sec']) - 1414.90071;
        }
        if (inputs['select'] == "600m") {
            score = 285.7637 * (600 / ((60 * inputs['min']) + inputs['sec'])) - 1371.563558;
        }
        if (inputs['select'] == "1000m") {
            score = 313.6503268 * (1000 / ((60 * inputs['min']) + inputs['sec'])) - 1374.25166;
        }
        if (inputs['select'] == "Mile") {
            score = 321.7731201 * (1609.34 / ((60 * inputs['min']) + inputs['sec'])) - 1306.285127;
        }
        if (inputs['select'] == "2000m") {
            score = 328.2988442 * (2000 / ((60 * inputs['min']) + inputs['sec'])) - 1303.430804;
        }
        if (inputs['select'] == "3000m") {
            score = 331.264214 * (3000 / ((60 * inputs['min']) + inputs['sec'])) - 1240.294895;
        }
        return score;
    };
    MercierPointsProvider.prototype.manageScore = function (input, output, score) {
        var score_temp = score;
        var score_init = 0;
        if (input["gender"] == "women") {
            score_init = (score + 370.23683) / 1.10218405;
        }
        else {
            score_init = score;
        }
        if (input["gender"] == "women" && output["gender"] == "men") {
            score = (score_temp + 370.23683) / 1.10218405;
        }
        if (input["gender"] == "men" && output["gender"] == "women") {
            score = 1.10218405 * score_temp - 370.23683;
        }
        this.comparePerformance(input, output, score, score_init);
    };
    MercierPointsProvider.prototype.comparePerformance = function (input, output, score, score_init) {
        var comp_perf_m1, comp_perf_s, comp_perf_s1;
        if (output["select"] == "100m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 100 / (0.003439 * score + 6.72526);
        }
        if (output["select"] == "200m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 200 / (0.003734 * score + 6.36315);
        }
        if (output["select"] == "400m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 400 / (0.0038105 * score + 5.34719);
        }
        if (output["select"] == "800m") {
            output['hr'] = "";
            output['min'] = Math.floor(800 / (0.003300 * score + 4.54844) / 60);
            comp_perf_s1 = ((800 / (0.003300 * score + 4.54844) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "1500m") {
            output['hr'] = "";
            output['min'] = Math.floor(1500 / (0.003117 * score + 4.09988) / 60);
            comp_perf_s1 = ((1500 / (0.003117 * score + 4.09988) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "5000m") {
            output['hr'] = "";
            output['min'] = Math.floor(5000 / (0.0029129 * score + 3.602496) / 60);
            comp_perf_s1 = ((5000 / (0.0029129 * score + 3.602496) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "10000m") {
            output['hr'] = "";
            output['min'] = Math.floor(10000 / (0.002857 * score + 3.348169) / 60);
            comp_perf_s1 = ((10000 / (0.002857 * score + 3.348169) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                comp_perf_s = comp_perf_s1;
            }
            else {
                comp_perf_s = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Marathon") {
            output['hr'] = Math.floor(42194.99 / (0.0025989 * score + 3.022432) / 3600);
            comp_perf_m1 = Math.floor(((42194.99 / (0.0025989 * score + 3.022432) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99 / (0.0025989 * score + 3.022432) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "High Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.00044878 * score + 1.098838, 2);
        }
        if (output["select"] == "Long Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0009379 * score + 1.9897558, 2);
        }
        if (output["select"] == "Triple Jump") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0013899 * score + 2.8472750, 2);
        }
        if (output["select"] == "Pole Vault") {
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = Math.pow(0.0011566 * score + 1.293145, 2);
        }
        if (output["select"] == "Discus") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0061301 * score + 2.220986, 2);
            }
            else {
                output['pts'] = Math.pow(0.005136 * score + 3.2303518, 2);
            }
        }
        if (output["select"] == "Javelin") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0058689 * score + 2.4609307, 2);
            }
            else {
                output['pts'] = Math.pow(0.0059368 * score + 3.5872388, 2);
            }
        }
        if (output["select"] == "Shot Put") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.003061312 * score + 1.454488154, 2);
            }
            else {
                output['pts'] = Math.pow(0.002747525 * score + 1.930440381, 2);
            }
        }
        if (output["select"] == "Hammer") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = Math.pow(0.0064308 * score + 2.34518185, 2);
            }
            else {
                output['pts'] = Math.pow(0.0059840 * score + 3.2248036, 2);
            }
        }
        if (output["select"] == "100mH") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 100 / (0.00406955 * score + 3.9663329);
        }
        if (output["select"] == "110mH") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 110 / (0.00430147 * score + 4.2084435);
        }
        if (output["select"] == "400mH") {
            output['hr'] = "";
            output['min'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['pts'] = 400 / (0.0042374 * score + 3.2779819);
            }
            else {
                output['pts'] = 400 / (0.00425567 * score + 4.2157351);
            }
        }
        if (output["select"] == "Heptathlon") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 7.71914876 * score - 1032.090149;
        }
        if (output["select"] == "Decathlon") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = "";
            output['pts'] = 9.6301981 * score - 784.4197095;
        }
        if (output["select"] == "3000m SC") {
            output['hr'] = "";
            if (output['gender'] == "women") {
                score = score_init;
                output['min'] = Math.floor(3000 / (0.003243381 * score + 2.273050417) / 60);
                comp_perf_s1 = ((3000 / (0.003243381 * score + 2.273050417) / 60) - output['min']) * 60;
                if (Math.floor(comp_perf_s1 / 10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0" + comp_perf_s1;
                }
            }
            else {
                output['min'] = Math.floor(3000 / (0.003149187 * score + 3.084594697) / 60);
                comp_perf_s1 = ((3000 / (0.003149187 * score + 3.084594697) / 60) - output['min']) * 60;
                if (Math.floor(comp_perf_s1 / 10) > 0) {
                    output['sec'] = comp_perf_s1;
                }
                else {
                    output['sec'] = "0" + comp_perf_s1;
                }
            }
        }
        if (output["select"] == "10km Walk") {
            if (output['gender'] == "men") {
                alert("Comparison event is women-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = "";
            output['min'] = Math.floor(10000 / (0.00218465 * score + 1.80028029) / 60);
            comp_perf_s1 = ((10000 / (0.00218465 * score + 1.80028029) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "20km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(20000 / (0.001937687 * score + 2.316516043) / 3600);
            comp_perf_m1 = Math.floor(((20000 / (0.001937687 * score + 2.316516043) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((20000 / (0.001937687 * score + 2.316516043) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "50km Walk") {
            if (output['gender'] == "women") {
                alert("Comparison event is men-only.  Gender corrected.");
            }
            score = score_init;
            output['hr'] = Math.floor(50000 / (0.001695422 * score + 2.024370694) / 3600);
            comp_perf_m1 = Math.floor(((50000 / (0.001695422 * score + 2.024370694) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((50000 / (0.001695422 * score + 2.024370694) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Indoor") {
            alert("Please select a comparison event!");
            return;
        }
        if (output["select"] == "150m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 150 / (.003768768 * score + 6.486427968);
        }
        if (output["select"] == "300m") {
            output['hr'] = "";
            output['min'] = "";
            output['sec'] = 300 / (0.003970935 * score + 5.620258201);
        }
        if (output["select"] == "600m") {
            output['hr'] = "";
            output['min'] = Math.floor(600 / (0.003499 * score + 4.80022) / 60);
            comp_perf_s1 = ((600 / (0.003499 * score + 4.80022) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "1000m") {
            output['hr'] = "";
            output['min'] = Math.floor(1000 / (0.00318746 * score + 4.382052887) / 60);
            comp_perf_s1 = ((1000 / (0.00318746 * score + 4.382052887) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Mile") {
            output['hr'] = "";
            output['min'] = Math.floor(1609.34 / (0.0031062 * score + 4.060811045) / 60);
            comp_perf_s1 = ((1609.34 / (0.0031062 * score + 4.060811045) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "2000m") {
            output['hr'] = "";
            output['min'] = Math.floor(2000 / (0.0030444 * score + 3.97139601) / 60);
            comp_perf_s1 = ((2000 / (0.0030444 * score + 3.97139601) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "3000m") {
            output['hr'] = "";
            output['min'] = Math.floor(3000 / (0.0030147 * score + 3.74703401) / 60);
            comp_perf_s1 = ((3000 / (0.0030147 * score + 3.74703401) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "2 mile") {
            output['hr'] = "";
            output['min'] = Math.floor(2 * 1609.34 / (0.0029949 * score + 3.726724) / 60);
            comp_perf_s1 = ((2 * 1609.34 / (0.0029949 * score + 3.726724) / 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "20 km") {
            output['hr'] = Math.floor(20000 / (0.0027370 * score + 3.205521) / 3600);
            comp_perf_m1 = Math.floor(((20000 / (0.0027370 * score + 3.205521) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((20000 / (0.0027370 * score + 3.205521) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        if (output["select"] == "Half Marathon") {
            output['hr'] = Math.floor(42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600);
            comp_perf_m1 = Math.floor(((42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600) - output['hr']) * 60);
            if (Math.floor(comp_perf_m1 / 10) > 0) {
                output['min'] = comp_perf_m1;
            }
            else {
                output['min'] = "0" + comp_perf_m1;
            }
            comp_perf_s1 = ((((42194.99 / 2 / (0.00272793 * score + 3.1912339) / 3600) - output['hr']) * 60) - output['min']) * 60;
            if (Math.floor(comp_perf_s1 / 10) > 0) {
                output['sec'] = comp_perf_s1;
            }
            else {
                output['sec'] = "0" + comp_perf_s1;
            }
        }
        output['score'] = score_init;
        input['score'] = score;
    };
    MercierPointsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MercierPointsProvider);
    return MercierPointsProvider;
}());

//# sourceMappingURL=mercier.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calculators_mens__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_calculators_womens__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_calculators_mercier__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calculators/decathlon-calculator/decathlon-calculator.module#DecathlonCalculatorPageModule', name: 'DecathlonCalculatorPage', segment: 'decathlon-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/heptathlon-m-calculator/heptathlon-m-calculator.module#HeptathlonMCalculatorPageModule', name: 'HeptathlonMCalculatorPage', segment: 'heptathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/heptathlon-w-calculator/heptathlon-w-calculator.module#HeptathlonWCalculatorPageModule', name: 'HeptathlonWCalculatorPage', segment: 'heptathlon-w-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/mercier/mercier.module#MercierPageModule', name: 'MercierPage', segment: 'mercier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/pentathlon-m-calculator/pentathlon-m-calculator.module#PentathlonMCalculatorPageModule', name: 'PentathlonMCalculatorPage', segment: 'pentathlon-m-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/pentathlon-w-calculator/pentathlon-w-calculator.module#PentathlonWCalculatorPageModule', name: 'PentathlonWCalculatorPage', segment: 'pentathlon-w-calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calculators/unit-converter/unit-converter.module#UnitConverterPageModule', name: 'UnitConverterPage', segment: 'unit-converter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/utilities/starting-gun/starting-gun.module#StartingGunPageModule', name: 'StartingGunPage', segment: 'starting-gun', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/utilities/stopwatch/stopwatch.module#StopwatchPageModule', name: 'StopwatchPage', segment: 'stopwatch', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_calculators_mens__["a" /* MenPointsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_calculators_womens__["a" /* WomenPointsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_calculators_mercier__["a" /* MercierPointsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/jonahelbaz/Desktop/ScoreCalculator-Fork/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonahelbaz/Desktop/ScoreCalculator-Fork/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map