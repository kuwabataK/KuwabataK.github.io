webpackJsonp([0],{

/***/ 130:
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(240);
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

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_deck__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__supply_supply__ = __webpack_require__(241);
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_calc_calc__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(131);
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
            var loading, f_a, total_money, mp_a;
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
    DeckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deck',template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\pages\deck\deck.html"*/'<!--\n\n  Generated template for the DeckPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>deck</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n        <ion-title>出力金貨量</ion-title>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>平均値: {{avarage_money}}</p>\n\n      <p>最大値: {{max_money}}</p>\n\n      <p>最小値: {{min_money}}</p>\n\n      <p>デッキ枚数: {{deck_length}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button full (click)="calc_money(1000)">計算する</button>\n\n\n\n  <mat-accordion>\n\n    <mat-expansion-panel *ngFor="let a of field_status.deck_index">\n\n      <mat-expansion-panel-header>\n\n        <mat-panel-title>\n\n            <ion-title>{{a.card.name}} ×{{a.cnt}}</ion-title>\n\n          <ion-buttons end>\n\n            <button ion-button (click)="add_card(a.card)">+</button>\n\n            <button ion-button (click)="delete_card(a.card)">-</button>\n\n          </ion-buttons>\n\n\n\n        </mat-panel-title>\n\n\n\n      </mat-expansion-panel-header>\n\n\n\n      <p>タイプ: {{a.card.type}}</p>\n\n      <p>金: {{a.card.money_point}}</p>\n\n      <p>アクション: {{a.card.action_point}}</p>\n\n      <p>ドロー: {{a.card.draw_num}}</p>\n\n\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n\n\n  <button ion-button full color="danger" (click)="delete_all()">全カード削除</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\pages\deck\deck.html"*/,
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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(239);
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(239);
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_AppModel__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(131);
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
            selector: 'page-supply',template:/*ion-inline-start:"C:\Git_workspace\dominion-cal\src\pages\supply\supply.html"*/'<!--\n\n  Generated template for the SupplyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>supply</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      新規カード作成\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>カード名</ion-label>\n\n          <ion-input type="text" [(ngModel)]="new_card.name"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>タイプ</ion-label>\n\n          <ion-select [(ngModel)]="new_card.type">\n\n            <ion-option value=\'action\'>アクションカード</ion-option>\n\n            <ion-option value=\'money\'>お金</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label>金量</ion-label>\n\n          <ion-select [(ngModel)]="new_card.money_point">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>アクション</ion-label>\n\n          <ion-select [(ngModel)]="new_card.action_point">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>ドロー</ion-label>\n\n          <ion-select [(ngModel)]="new_card.draw_num">\n\n            <ion-option [value]=0>0</ion-option>\n\n            <ion-option [value]=1>1</ion-option>\n\n            <ion-option [value]=2>2</ion-option>\n\n            <ion-option [value]=3>3</ion-option>\n\n            <ion-option [value]=4>4</ion-option>\n\n            <ion-option [value]=5>5</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n      <button ion-button full (click)="add_card()">サプライにカードを追加</button>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <mat-accordion>\n\n    <mat-expansion-panel *ngFor="let a of supply">\n\n      <mat-expansion-panel-header>\n\n        <mat-panel-title>\n\n          {{a.name}}\n\n        </mat-panel-title>\n\n\n\n      </mat-expansion-panel-header>\n\n\n\n        <p>タイプ: {{a.type}}</p>\n\n        <p>金: {{a.money_point}}</p>\n\n        <p>アクション: {{a.action_point}}</p>\n\n        <p>ドロー: {{a.draw_num}}</p>\n\n      <button ion-button (click)="add_card_to_deck(a)">デッキにカードを追加</button>\n\n      <button ion-button color="danger" (click)="remove_card(a)">削除</button>\n\n\n\n\n\n\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Git_workspace\dominion-cal\src\pages\supply\supply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
    ], SupplyPage);
    return SupplyPage;
}());

//# sourceMappingURL=supply.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_calc_calc__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_main_main__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deck_deck__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_supply_supply__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_storage_storage__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_util_util__ = __webpack_require__(240);
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

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_main_main__ = __webpack_require__(236);
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

/***/ })

},[255]);
//# sourceMappingURL=main.js.map