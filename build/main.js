webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Field_Status; });
/* unused harmony export Card_Index */
var Card = /** @class */ (function () {
    function Card() {
        this.name = '';
        this.type = 'money';
        this.money_point = 0; // 出力できる金量
        this.action_point = 0; // アクションポイント
        this.draw_num = 0; // 
    }
    return Card;
}());

var Field_Status = /** @class */ (function () {
    function Field_Status() {
        this.action_point = 1; // 残りのアクションポイント
        this.money_point = 0;
        this.hands = [];
        this.deck = [];
        this.deck_index = [];
    }
    return Field_Status;
}());

/**
 * 表示用のカードの束、カードの名前と枚数を格納する
 */
var Card_Index = /** @class */ (function () {
    function Card_Index() {
        this.card = new Card;
        this.cnt = 0;
    }
    return Card_Index;
}());

//# sourceMappingURL=AppModel.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage, util) {
        this.storage = storage;
        this.util = util;
    }
    StorageProvider.prototype.get_field_status = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('Field_Status')];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, (res == null ? new __WEBPACK_IMPORTED_MODULE_2__model_AppModel__["b" /* Field_Status */] : res)];
                }
            });
        });
    };
    StorageProvider.prototype.set_field_status = function (f_s) {
        return __awaiter(this, void 0, void 0, function () {
            var deck, deck_index, new_f;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        deck = this.util.sort_card(f_s.deck);
                        deck_index = this.util.sort_card_index(f_s.deck_index);
                        new_f = {
                            action_point: f_s.action_point,
                            deck: deck,
                            deck_index: deck_index,
                            money_point: f_s.money_point,
                            hands: f_s.hands
                        };
                        return [4 /*yield*/, this.storage.set('Field_Status', new_f)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new_f];
                }
            });
        });
    };
    StorageProvider.prototype.get_supply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, first_supply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('Supply')];
                    case 1:
                        res = _a.sent();
                        first_supply = [{
                                name: "屋敷",
                                type: 'money',
                                money_point: 0,
                                action_point: 0,
                                draw_num: 0
                            },
                            {
                                name: "銅貨",
                                type: 'money',
                                money_point: 1,
                                action_point: 0,
                                draw_num: 0
                            },
                            {
                                name: "銀貨",
                                type: 'money',
                                money_point: 2,
                                action_point: 0,
                                draw_num: 0
                            },
                            {
                                name: "金貨",
                                type: 'money',
                                money_point: 3,
                                action_point: 0,
                                draw_num: 0
                            }];
                        return [2 /*return*/, (res == null ? first_supply : res)];
                }
            });
        });
    };
    StorageProvider.prototype.set_supply = function (supply) {
        return __awaiter(this, void 0, void 0, function () {
            var n_supply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n_supply = this.util.sort_card(supply);
                        return [4 /*yield*/, this.storage.set('Supply', n_supply)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, n_supply];
                }
            });
        });
    };
    StorageProvider.prototype.add_card_to_deck = function (card, field_status) {
        return __awaiter(this, void 0, void 0, function () {
            var new_f, same_card;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_f = JSON.parse(JSON.stringify(field_status));
                        new_f.deck.push(card);
                        same_card = new_f.deck_index.filter(function (val) { return val.card.name === card.name; });
                        if (same_card.length === 0) {
                            new_f.deck_index.push({
                                card: card,
                                cnt: 1
                            });
                        }
                        else {
                            same_card[0].cnt += 1;
                            new_f.deck_index = new_f.deck_index.filter(function (val) { return val.card.name !== card.name; }).concat(same_card);
                        }
                        return [4 /*yield*/, this.set_field_status(new_f)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageProvider.prototype.remove_card_from_deck = function (card, field_status) {
        return __awaiter(this, void 0, void 0, function () {
            var new_f, same_card, c, r_c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_f = JSON.parse(JSON.stringify(field_status));
                        same_card = new_f.deck_index.filter(function (val) { return val.card.name === card.name; });
                        if (same_card.length === 0) {
                            return [2 /*return*/, new_f];
                        }
                        c = new_f.deck.filter(function (val) { return val.name !== card.name; });
                        r_c = new_f.deck.filter(function (val) { return val.name === card.name; });
                        r_c.pop();
                        new_f.deck = c.concat(r_c);
                        // deck_indexからカードを削除
                        if (same_card[0].cnt >= 2) {
                            same_card[0].cnt -= 1;
                        }
                        else {
                            same_card[0].cnt = 0;
                        }
                        new_f.deck_index = new_f.deck_index.filter(function (val) { return val.card.name !== card.name; }).concat(same_card);
                        return [4 /*yield*/, this.set_field_status(new_f)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* UtilProvider */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
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
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_deck__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__supply_supply__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.deckRoot = __WEBPACK_IMPORTED_MODULE_2__deck_deck__["a" /* DeckPage */];
        this.supplyRoot = __WEBPACK_IMPORTED_MODULE_3__supply_supply__["a" /* SupplyPage */];
    }
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\pages\main\main.html"*/'<ion-tabs>\n\n    <ion-tab [root]="deckRoot" tabTitle="Deck" tabIcon="information-circle"></ion-tab>\n\n    <ion-tab [root]="supplyRoot" tabTitle="Supply" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\pages\main\main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calc_calc__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the DeckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var DeckPage = /** @class */ (function () {
    function DeckPage(navCtrl, navParams, calc, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calc = calc;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.chart_label = [
            1, 2, 3, 4, 5, 6
        ];
        this.chart_data = [
            0, 0, 0, 0, 0, 0
        ];
        this.panelOpenState = false;
        this.field_status = new __WEBPACK_IMPORTED_MODULE_2__model_AppModel__["b" /* Field_Status */];
        this.deck_length = 0;
        this.total_money = 0;
        this.avarage_money = 0;
        this.max_money = 0;
        this.min_money = 0;
    }
    DeckPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get_field_status()];
                    case 1:
                        _a.field_status = _b.sent();
                        this.calc_money(100);
                        this.chartInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get_field_status()];
                    case 1:
                        _a.field_status = _b.sent();
                        this.deck_length = this.field_status.deck.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckPage.prototype.calc_money = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, f_a, total_money, mp_a, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        f_a = Array(count).fill('').map(function () {
                            return _this.calc.follow_turn(_this.field_status);
                        });
                        total_money = 0;
                        mp_a = f_a.map(function (val) {
                            total_money += val.money_point;
                            return val.money_point;
                        });
                        // 結果をビューに送る
                        this.deck_length = this.field_status.deck.length;
                        this.avarage_money = total_money / count;
                        this.max_money = Math.max.apply(Math, mp_a);
                        this.min_money = Math.min.apply(Math, mp_a);
                        label = mp_a.filter(function (x, i, self) { return self.indexOf(x) === i; });
                        label.sort(function (a, b) { return a - b; });
                        this.chart_data = label.map(function (_num) {
                            return mp_a.filter(function (e) { return _num === e; }).length;
                        });
                        this.chart_label = label;
                        this.chartInit();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckPage.prototype.delete_card = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.remove_card_from_deck(card, this.field_status)];
                    case 1:
                        _a.field_status = _b.sent();
                        this.deck_length = this.field_status.deck.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckPage.prototype.add_card = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.add_card_to_deck(card, this.field_status)];
                    case 1:
                        _a.field_status = _b.sent();
                        this.deck_length = this.field_status.deck.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    DeckPage.prototype.delete_all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    title: '確認',
                    message: '本当に削除してよろしいですか?',
                    buttons: [
                        {
                            text: 'キャンセル',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: '実行',
                            handler: function () {
                                _this.field_status.deck = [];
                                _this.field_status.deck_index = [];
                                _this.deck_length = _this.field_status.deck.length;
                                _this.storage.set_field_status(_this.field_status);
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    DeckPage.prototype.chartInit = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.chart_label,
                datasets: [{
                        label: 'count',
                        data: this.chart_data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                tooltips: {
                    enabled: false,
                    mode: 'dataset'
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], DeckPage.prototype, "barCanvas", void 0);
    DeckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deck',template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\pages\deck\deck.html"*/'<!--\n\n  Generated template for the DeckPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>deck</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-card>\n\n    <ion-card-header>\n\n        <ion-title>Power of Genarating Money</ion-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Average: {{avarage_money}}</p>\n\n      <p>Max: {{max_money}}</p>\n\n      <p>Min: {{min_money}}</p>\n\n      <p>Num of Deck: {{deck_length}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Histogram\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full (click)="calc_money(1000)">Calculate</button>\n\n\n\n  <mat-accordion>\n\n    <mat-expansion-panel *ngFor="let a of field_status.deck_index">\n\n      <mat-expansion-panel-header>\n\n        <mat-panel-title>\n\n            <ion-title>{{a.card.name}} ×{{a.cnt}}</ion-title>\n\n          <ion-buttons end>\n\n            <button ion-button (click)="add_card(a.card)">+</button>\n\n            <button ion-button (click)="delete_card(a.card)">-</button>\n\n          </ion-buttons>\n\n\n\n        </mat-panel-title>\n\n\n\n      </mat-expansion-panel-header>\n\n\n\n      <p>Type: {{a.card.type}}</p>\n\n      <p>Money: {{a.card.money_point}}</p>\n\n      <p>Action: {{a.card.action_point}}</p>\n\n      <p>Draw: {{a.card.draw_num}}</p>\n\n\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n\n\n  <button ion-button full color="danger" (click)="delete_all()">All Delete From Deck</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\pages\deck\deck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_calc_calc__["a" /* CalcProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], DeckPage);
    return DeckPage;
}());

//# sourceMappingURL=deck.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CalcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CalcProvider = /** @class */ (function () {
    function CalcProvider() {
    }
    /**
     * ターンを進めます
     * @param field_status
     */
    CalcProvider.prototype.follow_turn = function (field_status) {
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        new_f = this.generate_first_hands(new_f);
        new_f = this.exec_action(new_f);
        new_f = this.exec_money(new_f);
        return new_f;
    };
    /**
     * 最初の手札５枚を引きます
     *
     * @param field_status 初期デッキ
     */
    CalcProvider.prototype.generate_first_hands = function (field_status) {
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        new_f = this.drawCard(5, new_f);
        return new_f;
    };
    /**
     * 金貨の支払いを実行します
     * @param field_status
     */
    CalcProvider.prototype.exec_money = function (field_status) {
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        new_f.hands.map(function (card) {
            if (card.type === 'money') {
                new_f.money_point += card.money_point;
            }
        });
        return new_f;
    };
    /**
     * アクションフェイズを実行します。
     *
     * @param hands
     */
    CalcProvider.prototype.exec_action = function (field_status) {
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        while (new_f.action_point > 0) {
            if (new_f.hands.length === 0) {
                break;
            }
            var action_hands = new_f.hands.filter(function (val) { return val.type === 'action'; });
            if (action_hands.length === 0) {
                break;
            }
            // アクションポイント順に並び替える
            new_f.hands.sort(function (a, b) { return b.action_point - a.action_point; });
            // アクションカードを先頭に持ってくる
            new_f.hands.sort(function (a, b) {
                if (a.type < b.type) {
                    return -1;
                }
                if (a.type > b.type) {
                    return 1;
                }
                return 0;
            });
            // 先頭のアクションを実行
            new_f = this.execOneActionCard(action_hands[0], new_f);
            // console.log(new_f.action_point)
            console.log(new_f.money_point);
        }
        return new_f;
    };
    /**
     * 第二引数に入れた手札に対して第一引数のカードを実行します。
     * 残りのカードを第３引数で指定します。
     * 引数は変更しません
     *
     * @param card
     * @param fiels_status
     */
    CalcProvider.prototype.execOneActionCard = function (card, field_status) {
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        // 定性的な処理
        new_f.money_point += card.money_point;
        new_f.action_point -= 1;
        new_f.action_point += card.action_point;
        // ドローする
        if (card.draw_num > 0) {
            new_f = this.drawCard(card.draw_num, new_f);
        }
        // 手札を減らす
        new_f.hands.shift();
        return new_f;
    };
    /**
     * 指定した枚数のカードをデッキから引いて、結果を返します
     * 引数は変更しません
     *
     * @param num
     * @param deck
     */
    CalcProvider.prototype.drawCard = function (num, field_status) {
        if (field_status.deck.length === 0) {
            return field_status;
        }
        if (num === 0) {
            return field_status;
        }
        var new_f = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(field_status);
        if (num >= new_f.deck.length) {
            new_f.hands = new_f.hands.concat(new_f.deck);
            new_f.deck = [];
            return new_f;
        }
        Array(num).fill('').map(function () {
            var index = Math.floor(Math.random() * new_f.deck.length);
            new_f.hands.push(new_f.deck[index]);
            new_f.deck = new_f.deck.filter(function (val, i) { return i !== index; });
        });
        return new_f;
    };
    CalcProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalcProvider);
    return CalcProvider;
}());

//# sourceMappingURL=calc.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilProvider = /** @class */ (function () {
    function UtilProvider() {
    }
    UtilProvider.prototype.sort_card = function (card) {
        var c = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(card);
        c.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return c;
    };
    UtilProvider.prototype.sort_card_index = function (card) {
        var c = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(card);
        c.sort(function (a, b) {
            if (a.card.name < b.card.name) {
                return -1;
            }
            if (a.card.name > b.card.name) {
                return 1;
            }
            return 0;
        });
        return c;
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the SupplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SupplyPage = /** @class */ (function () {
    function SupplyPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.supply = [];
        this.field_status = new __WEBPACK_IMPORTED_MODULE_2__model_AppModel__["b" /* Field_Status */];
        this.new_card = new __WEBPACK_IMPORTED_MODULE_2__model_AppModel__["a" /* Card */]();
    }
    SupplyPage.prototype.ionViewDidLoad = function () {
        this.init();
    };
    SupplyPage.prototype.ionViewWillEnter = function () {
        this.init();
    };
    SupplyPage.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get_supply()];
                    case 1:
                        _a.supply = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.get_field_status()];
                    case 2:
                        _b.field_status = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupplyPage.prototype.add_card = function () {
        return __awaiter(this, void 0, void 0, function () {
            var new_c, same_cards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        new_c = this.new_card;
                        if (new_c.name === "") {
                            return [2 /*return*/];
                        }
                        same_cards = this.supply.filter(function (val) { return val.name === new_c.name; });
                        if (same_cards.length !== 0) {
                            return [2 /*return*/];
                        }
                        this.supply.push(new_c);
                        return [4 /*yield*/, this.storage.set_supply(this.supply)];
                    case 1:
                        _a.sent();
                        this.new_card = new __WEBPACK_IMPORTED_MODULE_2__model_AppModel__["a" /* Card */]();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupplyPage.prototype.add_card_to_deck = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.add_card_to_deck(card, this.field_status)];
                    case 1:
                        _a.field_status = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupplyPage.prototype.remove_card = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.supply = this.supply.filter(function (val) { return val.name !== card.name; });
                        return [4 /*yield*/, this.storage.set_supply(this.supply)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-supply',template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\pages\supply\supply.html"*/'<!--\n\n  Generated template for the SupplyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>supply</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Create New Card\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="new_card.name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Type</ion-label>\n\n          <ion-select [(ngModel)]="new_card.type">\n\n            <ion-option value=\'action\'>Action</ion-option>\n\n            <ion-option value=\'money\'>Money</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label>Money</ion-label>\n\n          <ion-select [(ngModel)]="new_card.money_point">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Action</ion-label>\n\n          <ion-select [(ngModel)]="new_card.action_point">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>Draw</ion-label>\n\n          <ion-select [(ngModel)]="new_card.draw_num">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button full (click)="add_card()">Add to supply</button>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <mat-accordion>\n\n    <mat-expansion-panel *ngFor="let a of supply">\n\n      <mat-expansion-panel-header>\n\n        <mat-panel-title>\n\n          {{a.name}}\n\n        </mat-panel-title>\n\n\n\n      </mat-expansion-panel-header>\n\n\n\n        <p>Type: {{a.type}}</p>\n\n        <p>Money: {{a.money_point}}</p>\n\n        <p>Action: {{a.action_point}}</p>\n\n        <p>Draw: {{a.draw_num}}</p>\n\n      <button ion-button (click)="add_card_to_deck(a)">Add to Deck</button>\n\n      <button ion-button color="danger" (click)="remove_card(a)">Delete from supply</button>\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\pages\supply\supply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
    ], SupplyPage);
    return SupplyPage;
}());

//# sourceMappingURL=supply.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calc_calc__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_main__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deck_deck__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_supply_supply__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_util_util__ = __webpack_require__(249);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deck_deck__["a" /* DeckPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_supply_supply__["a" /* SupplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deck_deck__["a" /* DeckPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_supply_supply__["a" /* SupplyPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_calc_calc__["a" /* CalcProvider */],
                __WEBPACK_IMPORTED_MODULE_11__pages_deck_deck__["a" /* DeckPage */],
                __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_util_util__["a" /* UtilProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(244);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 256,
	"./af.js": 256,
	"./ar": 257,
	"./ar-dz": 258,
	"./ar-dz.js": 258,
	"./ar-kw": 259,
	"./ar-kw.js": 259,
	"./ar-ly": 260,
	"./ar-ly.js": 260,
	"./ar-ma": 261,
	"./ar-ma.js": 261,
	"./ar-sa": 262,
	"./ar-sa.js": 262,
	"./ar-tn": 263,
	"./ar-tn.js": 263,
	"./ar.js": 257,
	"./az": 264,
	"./az.js": 264,
	"./be": 265,
	"./be.js": 265,
	"./bg": 266,
	"./bg.js": 266,
	"./bm": 267,
	"./bm.js": 267,
	"./bn": 268,
	"./bn.js": 268,
	"./bo": 269,
	"./bo.js": 269,
	"./br": 270,
	"./br.js": 270,
	"./bs": 271,
	"./bs.js": 271,
	"./ca": 272,
	"./ca.js": 272,
	"./cs": 273,
	"./cs.js": 273,
	"./cv": 274,
	"./cv.js": 274,
	"./cy": 275,
	"./cy.js": 275,
	"./da": 276,
	"./da.js": 276,
	"./de": 277,
	"./de-at": 278,
	"./de-at.js": 278,
	"./de-ch": 279,
	"./de-ch.js": 279,
	"./de.js": 277,
	"./dv": 280,
	"./dv.js": 280,
	"./el": 281,
	"./el.js": 281,
	"./en-au": 282,
	"./en-au.js": 282,
	"./en-ca": 283,
	"./en-ca.js": 283,
	"./en-gb": 284,
	"./en-gb.js": 284,
	"./en-ie": 285,
	"./en-ie.js": 285,
	"./en-il": 286,
	"./en-il.js": 286,
	"./en-nz": 287,
	"./en-nz.js": 287,
	"./eo": 288,
	"./eo.js": 288,
	"./es": 289,
	"./es-do": 290,
	"./es-do.js": 290,
	"./es-us": 291,
	"./es-us.js": 291,
	"./es.js": 289,
	"./et": 292,
	"./et.js": 292,
	"./eu": 293,
	"./eu.js": 293,
	"./fa": 294,
	"./fa.js": 294,
	"./fi": 295,
	"./fi.js": 295,
	"./fo": 296,
	"./fo.js": 296,
	"./fr": 297,
	"./fr-ca": 298,
	"./fr-ca.js": 298,
	"./fr-ch": 299,
	"./fr-ch.js": 299,
	"./fr.js": 297,
	"./fy": 300,
	"./fy.js": 300,
	"./gd": 301,
	"./gd.js": 301,
	"./gl": 302,
	"./gl.js": 302,
	"./gom-latn": 303,
	"./gom-latn.js": 303,
	"./gu": 304,
	"./gu.js": 304,
	"./he": 305,
	"./he.js": 305,
	"./hi": 306,
	"./hi.js": 306,
	"./hr": 307,
	"./hr.js": 307,
	"./hu": 308,
	"./hu.js": 308,
	"./hy-am": 309,
	"./hy-am.js": 309,
	"./id": 310,
	"./id.js": 310,
	"./is": 311,
	"./is.js": 311,
	"./it": 312,
	"./it.js": 312,
	"./ja": 313,
	"./ja.js": 313,
	"./jv": 314,
	"./jv.js": 314,
	"./ka": 315,
	"./ka.js": 315,
	"./kk": 316,
	"./kk.js": 316,
	"./km": 317,
	"./km.js": 317,
	"./kn": 318,
	"./kn.js": 318,
	"./ko": 319,
	"./ko.js": 319,
	"./ky": 320,
	"./ky.js": 320,
	"./lb": 321,
	"./lb.js": 321,
	"./lo": 322,
	"./lo.js": 322,
	"./lt": 323,
	"./lt.js": 323,
	"./lv": 324,
	"./lv.js": 324,
	"./me": 325,
	"./me.js": 325,
	"./mi": 326,
	"./mi.js": 326,
	"./mk": 327,
	"./mk.js": 327,
	"./ml": 328,
	"./ml.js": 328,
	"./mn": 329,
	"./mn.js": 329,
	"./mr": 330,
	"./mr.js": 330,
	"./ms": 331,
	"./ms-my": 332,
	"./ms-my.js": 332,
	"./ms.js": 331,
	"./mt": 333,
	"./mt.js": 333,
	"./my": 334,
	"./my.js": 334,
	"./nb": 335,
	"./nb.js": 335,
	"./ne": 336,
	"./ne.js": 336,
	"./nl": 337,
	"./nl-be": 338,
	"./nl-be.js": 338,
	"./nl.js": 337,
	"./nn": 339,
	"./nn.js": 339,
	"./pa-in": 340,
	"./pa-in.js": 340,
	"./pl": 341,
	"./pl.js": 341,
	"./pt": 342,
	"./pt-br": 343,
	"./pt-br.js": 343,
	"./pt.js": 342,
	"./ro": 344,
	"./ro.js": 344,
	"./ru": 345,
	"./ru.js": 345,
	"./sd": 346,
	"./sd.js": 346,
	"./se": 347,
	"./se.js": 347,
	"./si": 348,
	"./si.js": 348,
	"./sk": 349,
	"./sk.js": 349,
	"./sl": 350,
	"./sl.js": 350,
	"./sq": 351,
	"./sq.js": 351,
	"./sr": 352,
	"./sr-cyrl": 353,
	"./sr-cyrl.js": 353,
	"./sr.js": 352,
	"./ss": 354,
	"./ss.js": 354,
	"./sv": 355,
	"./sv.js": 355,
	"./sw": 356,
	"./sw.js": 356,
	"./ta": 357,
	"./ta.js": 357,
	"./te": 358,
	"./te.js": 358,
	"./tet": 359,
	"./tet.js": 359,
	"./tg": 360,
	"./tg.js": 360,
	"./th": 361,
	"./th.js": 361,
	"./tl-ph": 362,
	"./tl-ph.js": 362,
	"./tlh": 363,
	"./tlh.js": 363,
	"./tr": 364,
	"./tr.js": 364,
	"./tzl": 365,
	"./tzl.js": 365,
	"./tzm": 366,
	"./tzm-latn": 367,
	"./tzm-latn.js": 367,
	"./tzm.js": 366,
	"./ug-cn": 368,
	"./ug-cn.js": 368,
	"./uk": 369,
	"./uk.js": 369,
	"./ur": 370,
	"./ur.js": 370,
	"./uz": 371,
	"./uz-latn": 372,
	"./uz-latn.js": 372,
	"./uz.js": 371,
	"./vi": 373,
	"./vi.js": 373,
	"./x-pseudo": 374,
	"./x-pseudo.js": 374,
	"./yo": 375,
	"./yo.js": 375,
	"./zh-cn": 376,
	"./zh-cn.js": 376,
	"./zh-hk": 377,
	"./zh-hk.js": 377,
	"./zh-tw": 378,
	"./zh-tw.js": 378
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 480;

/***/ })

},[393]);
//# sourceMappingURL=main.js.map