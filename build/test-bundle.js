var Bundle_test =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var disable_1 = __webpack_require__(4);
var refresh_1 = __webpack_require__(23);
var refresh_2 = __webpack_require__(24);
var ErrorType = (function () {
    function ErrorType() {
    }
    ErrorType.IllegalArgumentError = 'IllegalArgumentError';
    ErrorType.AssertionError = 'AssertionError';
    ErrorType.NoMatchFoundError = 'NoMatchFoundError';
    return ErrorType;
}());
exports.ErrorType = ErrorType;
var Quarter;
(function (Quarter) {
    Quarter[Quarter["WINTER"] = 0] = "WINTER";
    Quarter[Quarter["SPRING"] = 1] = "SPRING";
    Quarter[Quarter["SUMMER"] = 2] = "SUMMER";
    Quarter[Quarter["FALL"] = 3] = "FALL";
})(Quarter = exports.Quarter || (exports.Quarter = {}));
var UniqueList = (function () {
    function UniqueList(vals) {
        if (vals)
            this.vals = vals;
        else
            this.vals = [];
    }
    UniqueList.prototype.add = function (x) {
        if (this.vals.indexOf(x) === -1) {
            this.vals.push(x);
            return true;
        }
        return false;
    };
    UniqueList.prototype.size = function () {
        return this.vals.length;
    };
    UniqueList.prototype.asArray = function () {
        return this.vals.map(function (x) { return x; });
    };
    return UniqueList;
}());
exports.UniqueList = UniqueList;
exports.CARRIERS = {
    'AT&T': '@txt.att.net',
    'T-Mobile': '@tmomail.net',
    'Verizon': '@vtext.com',
    'Sprint': '@messaging.sprintpcs.com',
    'XFinity Mobile': '@vtext.com',
    'Virgin Mobile': '@vmobl.com',
    'Metro PCS': '@mymetropcs.com',
    'Boost Mobile': '@sms.myboostmobile.com',
    'Cricket': '@sms.cricketwireless.net',
    'Republic Wireless': '@text.republicwireless.com',
    'Google Fi': '@msg.fi.google.com',
    'U.S. Cellular': '@email.uscc.net',
    'Ting': '@message.ting.com',
    'Consumer Cellular': '@mailmymobile.net',
    'C-Spire': '@cspire1.com',
    'Page Plus': '@vtext.com'
};
var Color = (function () {
    function Color() {
    }
    Color.WHITE = '#ffffff';
    Color.BLACK = '#000000';
    Color.LIGHT_GRAY = '#d5d5d5';
    Color.LIGHT_RED = '#ffcbcb';
    Color.PALE_RED = '#ffcbcb';
    Color.PALE_GREEN = '#f2fff0';
    Color.PALE_BLUE = '#ecf1f8';
    return Color;
}());
exports.Color = Color;
var NumberFormat = (function () {
    function NumberFormat() {
    }
    NumberFormat.TEXT = '';
    NumberFormat.MONEY = '"$"#,##0.00';
    NumberFormat.INTEGER = '#,##0';
    NumberFormat.DATE = 'MMM dd, yyyy';
    return NumberFormat;
}());
exports.NumberFormat = NumberFormat;
var Generated = (function () {
    function Generated(name, refreshFn) {
        this.name = name;
        this.refreshFn = refreshFn;
    }
    Generated.prototype.getName = function () { return this.name; };
    Generated.prototype.getRefreshFn = function () { return this.refreshFn; };
    return Generated;
}());
exports.Generated = Generated;
var GeneratedTable = (function (_super) {
    __extends(GeneratedTable, _super);
    function GeneratedTable(name, refreshFn) {
        return _super.call(this, name, refreshFn) || this;
    }
    GeneratedTable.getAll = function () {
        return [
            GeneratedTable.ACCOUNT_INFO,
            GeneratedTable.MEMBERS,
            GeneratedTable.INCOMES,
            GeneratedTable.EXPENSES,
            GeneratedTable.ALL_TRANSACTIONS,
            GeneratedTable.STATEMENTS,
        ];
    };
    GeneratedTable.ACCOUNT_INFO = new GeneratedTable('Account Info', refresh_2.refreshAccountInfo);
    GeneratedTable.MEMBERS = new GeneratedTable('Members', refresh_2.refreshMembers);
    GeneratedTable.INCOMES = new GeneratedTable('Incomes', refresh_2.refreshIncomes);
    GeneratedTable.EXPENSES = new GeneratedTable('Expenses', refresh_2.refreshExpenses);
    GeneratedTable.ALL_TRANSACTIONS = new GeneratedTable('All Transactions', refresh_2.refreshAllTransactions);
    GeneratedTable.STATEMENTS = new GeneratedTable('Statements', refresh_2.refreshStatements);
    return GeneratedTable;
}(Generated));
exports.GeneratedTable = GeneratedTable;
var GeneratedForm = (function (_super) {
    __extends(GeneratedForm, _super);
    function GeneratedForm(name, refreshFn) {
        return _super.call(this, name, refreshFn) || this;
    }
    GeneratedForm.getAll = function () {
        return [
            GeneratedForm.ADD_EXPENSE,
            GeneratedForm.ADD_INCOME,
            GeneratedForm.ADD_MEMBER_IOU,
            GeneratedForm.COLLECT_DUES,
            GeneratedForm.CONFIRM_TRANSFER,
            GeneratedForm.NEXT_QUARTER,
            GeneratedForm.RESOLVE_MEMBER_IOU,
            GeneratedForm.TAKE_ATTENDANCE,
            GeneratedForm.TRANSFER_FUNDS,
            GeneratedForm.UPDATE_CONTACT_SETTINGS,
            GeneratedForm.UPDATE_MEMBER_STATUS,
        ];
    };
    GeneratedForm.ADD_EXPENSE = new GeneratedForm('Add Expense', refresh_1.refreshAddExpense);
    GeneratedForm.ADD_INCOME = new GeneratedForm('Add Income', refresh_1.refreshAddIncome);
    GeneratedForm.ADD_MEMBER_IOU = new GeneratedForm('Add Member IOU', refresh_1.refreshAddMemberIou);
    GeneratedForm.COLLECT_DUES = new GeneratedForm('Collect Dues', refresh_1.refreshCollectDues);
    GeneratedForm.CONFIRM_TRANSFER = new GeneratedForm('Confirm Transfer', refresh_1.refreshConfirmTransfer);
    GeneratedForm.NEXT_QUARTER = new GeneratedForm('Next Quarter', refresh_1.refreshNextQuarter);
    GeneratedForm.RESOLVE_MEMBER_IOU = new GeneratedForm('Resolve Member IOU', refresh_1.refreshResolveMemberIou);
    GeneratedForm.TAKE_ATTENDANCE = new GeneratedForm('Take Attendance', refresh_1.refreshTakeAttendance);
    GeneratedForm.TRANSFER_FUNDS = new GeneratedForm('Transfer Funds', refresh_1.refreshTransferFunds);
    GeneratedForm.UPDATE_CONTACT_SETTINGS = new GeneratedForm('Update Contact Settings', refresh_1.refreshUpdateContactSettings);
    GeneratedForm.UPDATE_MEMBER_STATUS = new GeneratedForm('Update Member Status', refresh_1.refreshUpdateMemberStatus);
    return GeneratedForm;
}(Generated));
exports.GeneratedForm = GeneratedForm;
var DataTable = (function () {
    function DataTable(name, dependentTables, dependentForms) {
        this.name = name;
        this.dependentTables = dependentTables;
        this.dependentForms = dependentForms;
    }
    DataTable.prototype.getName = function () { return this.name; };
    DataTable.prototype.getDependentTables = function () { return this.dependentTables; };
    DataTable.prototype.getDependentForms = function () { return this.dependentForms; };
    DataTable.MEMBER = new DataTable('Member', [
        GeneratedTable.MEMBERS,
    ], [
        GeneratedForm.ADD_MEMBER_IOU,
        GeneratedForm.COLLECT_DUES,
        GeneratedForm.RESOLVE_MEMBER_IOU,
        GeneratedForm.TAKE_ATTENDANCE,
        GeneratedForm.UPDATE_CONTACT_SETTINGS,
        GeneratedForm.UPDATE_MEMBER_STATUS
    ]);
    DataTable.INCOME = new DataTable('Income', [
        GeneratedTable.ACCOUNT_INFO,
        GeneratedTable.INCOMES,
        GeneratedTable.ALL_TRANSACTIONS,
        GeneratedTable.STATEMENTS
    ], [
        GeneratedForm.CONFIRM_TRANSFER,
        GeneratedForm.TRANSFER_FUNDS
    ]);
    DataTable.EXPENSE = new DataTable('Expense', [
        GeneratedTable.ACCOUNT_INFO,
        GeneratedTable.EXPENSES,
        GeneratedTable.ALL_TRANSACTIONS,
        GeneratedTable.STATEMENTS
    ], [
        GeneratedForm.CONFIRM_TRANSFER,
        GeneratedForm.TRANSFER_FUNDS
    ]);
    DataTable.RECIPIENT = new DataTable('Recipient', [
        GeneratedTable.EXPENSES,
        GeneratedTable.ALL_TRANSACTIONS
    ], []);
    DataTable.PAYMENT_TYPE = new DataTable('Payment Type', [
        GeneratedTable.ACCOUNT_INFO,
        GeneratedTable.INCOMES,
        GeneratedTable.EXPENSES,
        GeneratedTable.ALL_TRANSACTIONS,
        GeneratedTable.STATEMENTS
    ], [
        GeneratedForm.ADD_EXPENSE,
        GeneratedForm.ADD_INCOME,
        GeneratedForm.COLLECT_DUES,
        GeneratedForm.CONFIRM_TRANSFER,
        GeneratedForm.RESOLVE_MEMBER_IOU,
        GeneratedForm.TRANSFER_FUNDS
    ]);
    DataTable.STATEMENT = new DataTable('Statement', [
        GeneratedTable.STATEMENTS
    ], [
        GeneratedForm.CONFIRM_TRANSFER,
        GeneratedForm.TRANSFER_FUNDS
    ]);
    DataTable.ATTENDANCE = new DataTable('Attendance', [
        GeneratedTable.MEMBERS
    ], []);
    DataTable.CLUB_INFO = new DataTable('Club Info', [
        GeneratedTable.ACCOUNT_INFO,
        GeneratedTable.MEMBERS
    ], [
        GeneratedForm.COLLECT_DUES,
        GeneratedForm.NEXT_QUARTER
    ]);
    return DataTable;
}());
exports.DataTable = DataTable;
var RefreshLogger = (function () {
    function RefreshLogger() {
    }
    RefreshLogger.markAsUpdated = function (table) {
        this.tables.add(table);
    };
    RefreshLogger.markAsPriority = function (form) {
        this.priorityForm = form;
    };
    RefreshLogger.refreshAll = function () {
        var forms = GeneratedForm.getAll();
        var tables = GeneratedTable.getAll();
        var lock = LockService.getScriptLock();
        lock.tryLock(2 * 60 * 1000);
        if (!lock.hasLock()) {
            console.log('Refresh cancelled, unable to get Lock.');
            return;
        }
        try {
            forms.forEach(function (form) { return disable_1.disableForm(form); });
            tables.forEach(function (table) { return table.getRefreshFn()(); });
            forms.forEach(function (form) { return form.getRefreshFn()(); });
        }
        catch (e) {
            forms.forEach(function (form) { return disable_1.enableForm(form); });
            throw e;
        }
        lock.releaseLock();
    };
    RefreshLogger.refresh = function () {
        var _this = this;
        var forms = new UniqueList();
        this.tables.asArray().forEach(function (table) {
            table.getDependentForms().forEach(function (form) { return forms.add(form); });
        });
        var lock = LockService.getScriptLock();
        lock.tryLock(2 * 60 * 1000);
        if (!lock.hasLock()) {
            console.log('Refresh cancelled, unable to get Lock.');
            return;
        }
        try {
            var formsList = forms.asArray();
            if (this.priorityForm !== null) {
                this.priorityForm.getRefreshFn()();
                formsList = formsList.filter(function (form) { return form !== _this.priorityForm; });
            }
            formsList.forEach(function (form) { return disable_1.disableForm(form); });
            this.tables.asArray().forEach(function (table) {
                table.getDependentTables().forEach(function (x) { return x.getRefreshFn()(); });
            });
            formsList.forEach(function (x) { return x.getRefreshFn()(); });
        }
        catch (e) {
            forms.asArray().forEach(function (form) { return disable_1.enableForm(form); });
            throw e;
        }
        this.tables = new UniqueList();
        this.priorityForm = null;
        lock.releaseLock();
    };
    RefreshLogger.tables = new UniqueList();
    RefreshLogger.priorityForm = null;
    return RefreshLogger;
}());
exports.RefreshLogger = RefreshLogger;
var Data = (function () {
    function Data() {
    }
    return Data;
}());
exports.Data = Data;
var StringData = (function (_super) {
    __extends(StringData, _super);
    function StringData(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        return _this;
    }
    StringData.create = function (s) {
        return new StringData(s);
    };
    StringData.prototype.toString = function () {
        return this.val;
    };
    StringData.prototype.getValue = function () {
        return this.val;
    };
    return StringData;
}(Data));
exports.StringData = StringData;
var IntData = (function (_super) {
    __extends(IntData, _super);
    function IntData(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        if (val % 1 !== 0) {
            throw ErrorType.IllegalArgumentError;
        }
        return _this;
    }
    IntData.create = function (s) {
        var n = parseInt(s, 10);
        if (isNaN(n))
            throw ErrorType.IllegalArgumentError;
        return new IntData(n);
    };
    IntData.prototype.toString = function () {
        return this.val.toString();
    };
    IntData.prototype.getValue = function () {
        return this.val;
    };
    return IntData;
}(Data));
exports.IntData = IntData;
var DateData = (function (_super) {
    __extends(DateData, _super);
    function DateData(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        return _this;
    }
    DateData.create = function (s) {
        var n = parseInt(s, 10);
        if (isNaN(n))
            throw ErrorType.IllegalArgumentError;
        return new DateData(new Date(n));
    };
    DateData.prototype.toDateString = function () {
        var month;
        switch (this.val.getMonth()) {
            case 0:
                month = 'Jan';
                break;
            case 1:
                month = 'Feb';
                break;
            case 2:
                month = 'Mar';
                break;
            case 3:
                month = 'Apr';
                break;
            case 4:
                month = 'May';
                break;
            case 5:
                month = 'Jun';
                break;
            case 6:
                month = 'Jul';
                break;
            case 7:
                month = 'Aug';
                break;
            case 8:
                month = 'Sep';
                break;
            case 9:
                month = 'Oct';
                break;
            case 10:
                month = 'Nov';
                break;
            case 11:
                month = 'Dec';
                break;
            default:
                throw ErrorType.AssertionError;
        }
        return month + ' ' + this.val.getDate() + ', ' + this.val.getFullYear();
    };
    DateData.prototype.toString = function () {
        return this.val.valueOf().toString();
    };
    DateData.prototype.getValue = function () {
        return this.val;
    };
    return DateData;
}(Data));
exports.DateData = DateData;
var BooleanData = (function (_super) {
    __extends(BooleanData, _super);
    function BooleanData(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        return _this;
    }
    BooleanData.create = function (s) {
        switch (s) {
            case '0':
                return BooleanData.FALSE;
            case '1':
                return BooleanData.TRUE;
            default:
                throw ErrorType.IllegalArgumentError;
        }
    };
    BooleanData.prototype.toString = function () {
        return this.val ? '1' : '0';
    };
    BooleanData.prototype.getValue = function () {
        return this.val;
    };
    BooleanData.TRUE = new BooleanData(true);
    BooleanData.FALSE = new BooleanData(false);
    return BooleanData;
}(Data));
exports.BooleanData = BooleanData;
var QuarterData = (function (_super) {
    __extends(QuarterData, _super);
    function QuarterData(quarter, year) {
        var _this = _super.call(this) || this;
        _this.quarter = quarter;
        _this.year = year;
        switch (quarter) {
            case Quarter.WINTER:
                _this.val = new IntData(year.getValue() * 4);
                _this.dateString = "Winter " + year;
                break;
            case Quarter.SPRING:
                _this.val = new IntData(year.getValue() * 4 + 1);
                _this.dateString = "Spring " + year;
                break;
            case Quarter.SUMMER:
                _this.val = new IntData(year.getValue() * 4 + 2);
                _this.dateString = "Summer " + year;
                break;
            case Quarter.FALL:
                _this.val = new IntData(year.getValue() * 4 + 3);
                _this.dateString = "Fall " + year;
                break;
            default:
                throw ErrorType.AssertionError;
        }
        return _this;
    }
    QuarterData.create = function (s) {
        var n = parseInt(s, 10);
        if (isNaN(n))
            throw ErrorType.IllegalArgumentError;
        var year = new IntData(Math.floor(n / 4));
        switch (n % 4) {
            case 0:
                return new QuarterData(Quarter.WINTER, year);
            case 1:
                return new QuarterData(Quarter.SPRING, year);
            case 2:
                return new QuarterData(Quarter.SUMMER, year);
            case 3:
                return new QuarterData(Quarter.FALL, year);
            default:
                throw ErrorType.AssertionError;
        }
    };
    QuarterData.prototype.toString = function () {
        return this.val.toString();
    };
    QuarterData.prototype.getValue = function () {
        return this.val.getValue();
    };
    QuarterData.prototype.toDateString = function () {
        return this.dateString;
    };
    QuarterData.prototype.getQuarter = function () {
        return this.quarter;
    };
    QuarterData.prototype.getYear = function () {
        return this.year;
    };
    QuarterData.prototype.next = function () {
        switch (this.quarter) {
            case Quarter.WINTER:
                return new QuarterData(Quarter.SPRING, this.year);
            case Quarter.SPRING:
                return new QuarterData(Quarter.SUMMER, this.year);
            case Quarter.SUMMER:
                return new QuarterData(Quarter.FALL, this.year);
            case Quarter.FALL:
                return new QuarterData(Quarter.WINTER, new IntData(this.year.getValue() + 1));
        }
    };
    return QuarterData;
}(Data));
exports.QuarterData = QuarterData;
var IntListData = (function (_super) {
    __extends(IntListData, _super);
    function IntListData(vals) {
        var _this = _super.call(this) || this;
        _this.vals = vals;
        _this.s = vals.join(',');
        return _this;
    }
    IntListData.create = function (s) {
        if (s.length === 0) {
            return new IntListData([]);
        }
        var vals = s.split(',');
        return new IntListData(vals.map(function (val) {
            var n = parseInt(val, 10);
            if (isNaN(n))
                throw ErrorType.IllegalArgumentError;
            return new IntData(n);
        }));
    };
    IntListData.prototype.toString = function () {
        return this.s;
    };
    IntListData.prototype.getValue = function () {
        return __spread(this.vals);
    };
    return IntListData;
}(Data));
exports.IntListData = IntListData;
var Entry = (function () {
    function Entry(id) {
        this.id = id;
    }
    return Entry;
}());
exports.Entry = Entry;
var MemberEntry = (function (_super) {
    __extends(MemberEntry, _super);
    function MemberEntry(id, name, dateJoined, amountOwed, email, performing, active, officer, currentDuesPaid, notifyPoll, sendReceipt) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        _this.dateJoined = dateJoined;
        _this.amountOwed = amountOwed;
        _this.email = email;
        _this.performing = performing;
        _this.active = active;
        _this.officer = officer;
        _this.currentDuesPaid = currentDuesPaid;
        _this.notifyPoll = notifyPoll;
        _this.sendReceipt = sendReceipt;
        return _this;
    }
    MemberEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.name)
            out.push(this.name.toString());
        if (this.dateJoined)
            out.push(this.dateJoined.toString());
        if (this.amountOwed)
            out.push(this.amountOwed.toString());
        if (this.email)
            out.push(this.email.toString());
        if (this.performing)
            out.push(this.performing.toString());
        if (this.active)
            out.push(this.active.toString());
        if (this.officer)
            out.push(this.officer.toString());
        if (this.currentDuesPaid)
            out.push(this.currentDuesPaid.toString());
        if (this.notifyPoll)
            out.push(this.notifyPoll.toString());
        if (this.sendReceipt)
            out.push(this.sendReceipt.toString());
        return out;
    };
    MemberEntry.prototype.length = function () {
        return 11;
    };
    return MemberEntry;
}(Entry));
exports.MemberEntry = MemberEntry;
var IncomeEntry = (function (_super) {
    __extends(IncomeEntry, _super);
    function IncomeEntry(id, date, amount, description, paymentTypeId, statementId) {
        var _this = _super.call(this, id) || this;
        _this.date = date;
        _this.amount = amount;
        _this.description = description;
        _this.paymentTypeId = paymentTypeId;
        _this.statementId = statementId;
        return _this;
    }
    IncomeEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.date)
            out.push(this.date.toString());
        if (this.amount)
            out.push(this.amount.toString());
        if (this.description)
            out.push(this.description.toString());
        if (this.paymentTypeId)
            out.push(this.paymentTypeId.toString());
        if (this.statementId)
            out.push(this.statementId.toString());
        return out;
    };
    IncomeEntry.prototype.length = function () {
        return 6;
    };
    return IncomeEntry;
}(Entry));
exports.IncomeEntry = IncomeEntry;
var ExpenseEntry = (function (_super) {
    __extends(ExpenseEntry, _super);
    function ExpenseEntry(id, date, amount, description, paymentTypeId, recipientId, statementId) {
        var _this = _super.call(this, id) || this;
        _this.date = date;
        _this.amount = amount;
        _this.description = description;
        _this.paymentTypeId = paymentTypeId;
        _this.recipientId = recipientId;
        _this.statementId = statementId;
        return _this;
    }
    ExpenseEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.date)
            out.push(this.date.toString());
        if (this.amount)
            out.push(this.amount.toString());
        if (this.description)
            out.push(this.description.toString());
        if (this.paymentTypeId)
            out.push(this.paymentTypeId.toString());
        if (this.recipientId)
            out.push(this.recipientId.toString());
        if (this.statementId)
            out.push(this.statementId.toString());
        return out;
    };
    ExpenseEntry.prototype.length = function () {
        return 7;
    };
    return ExpenseEntry;
}(Entry));
exports.ExpenseEntry = ExpenseEntry;
var RecipientEntry = (function (_super) {
    __extends(RecipientEntry, _super);
    function RecipientEntry(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    RecipientEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.name)
            out.push(this.name.toString());
        return out;
    };
    RecipientEntry.prototype.length = function () {
        return 2;
    };
    return RecipientEntry;
}(Entry));
exports.RecipientEntry = RecipientEntry;
var PaymentTypeEntry = (function (_super) {
    __extends(PaymentTypeEntry, _super);
    function PaymentTypeEntry(id, name) {
        var _this = _super.call(this, id) || this;
        _this.name = name;
        return _this;
    }
    PaymentTypeEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.name)
            out.push(this.name.toString());
        return out;
    };
    PaymentTypeEntry.prototype.length = function () {
        return 2;
    };
    return PaymentTypeEntry;
}(Entry));
exports.PaymentTypeEntry = PaymentTypeEntry;
var StatementEntry = (function (_super) {
    __extends(StatementEntry, _super);
    function StatementEntry(id, date, confirmed) {
        var _this = _super.call(this, id) || this;
        _this.date = date;
        _this.confirmed = confirmed;
        return _this;
    }
    StatementEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.date)
            out.push(this.date.toString());
        if (this.confirmed)
            out.push(this.confirmed.toString());
        return out;
    };
    StatementEntry.prototype.length = function () {
        return 3;
    };
    return StatementEntry;
}(Entry));
exports.StatementEntry = StatementEntry;
var AttendanceEntry = (function (_super) {
    __extends(AttendanceEntry, _super);
    function AttendanceEntry(id, date, member_ids, quarter_id) {
        var _this = _super.call(this, id) || this;
        _this.date = date;
        _this.member_ids = member_ids;
        _this.quarter_id = quarter_id;
        return _this;
    }
    AttendanceEntry.prototype.toArray = function () {
        var out = [];
        if (this.id)
            out.push(this.id.toString());
        if (this.date)
            out.push(this.date.toString());
        if (this.member_ids)
            out.push(this.member_ids.toString());
        if (this.quarter_id)
            out.push(this.quarter_id.toString());
        return out;
    };
    AttendanceEntry.prototype.length = function () {
        return 4;
    };
    return AttendanceEntry;
}(Entry));
exports.AttendanceEntry = AttendanceEntry;
var ClubInfoEntry = (function () {
    function ClubInfoEntry(memberFee, officerFee, daysUntilFeeRequired, currentQuarterId) {
        this.memberFee = memberFee;
        this.officerFee = officerFee;
        this.daysUntilFeeRequired = daysUntilFeeRequired;
        this.currentQuarterId = currentQuarterId;
    }
    ClubInfoEntry.prototype.toArray = function () {
        var out = [];
        if (this.memberFee)
            out.push(this.memberFee.toString());
        if (this.officerFee)
            out.push(this.officerFee.toString());
        if (this.daysUntilFeeRequired)
            out.push(this.daysUntilFeeRequired.toString());
        if (this.currentQuarterId)
            out.push(this.currentQuarterId.toString());
        return out;
    };
    ClubInfoEntry.prototype.length = function () {
        return 4;
    };
    return ClubInfoEntry;
}());
exports.ClubInfoEntry = ClubInfoEntry;
function repeat(val, length) {
    var array = Array(length);
    for (var i = 0; i < length; ++i) {
        array[i] = val;
    }
    return array;
}
exports.repeat = repeat;
function capitalizeString(s) {
    function capitalize(s) {
        if (s.length <= 0) {
            return s;
        }
        return s[0].toUpperCase() + s.substr(1);
    }
    var words = s.split(' ');
    var output = '';
    if (words.length > 0) {
        output += capitalize(words[0]);
        for (var i = 1; i < words.length; ++i) {
            output += ' ' + capitalize(words[i]);
        }
    }
    return output;
}
exports.capitalizeString = capitalizeString;
function centsToString(n) {
    if (n.getValue() < 0) {
        return '-$'.concat((Math.abs(n.getValue()) / 100).toFixed(2));
    }
    else {
        return '$'.concat((n.getValue() / 100).toFixed(2));
    }
}
exports.centsToString = centsToString;
function compareByDateDesc(a, b) {
    if (!a.date || !b.date)
        throw ErrorType.AssertionError;
    return b.date.getValue().valueOf() - a.date.getValue().valueOf();
}
exports.compareByDateDesc = compareByDateDesc;
function datestrToDate(date) {
    var vals = date.split('-');
    if (vals.length < 3)
        throw ErrorType.IllegalArgumentError;
    var year = parseInt(vals[0], 10);
    var month = parseInt(vals[1], 10);
    var day = parseInt(vals[2], 10);
    if (isNaN(year) || isNaN(month) || isNaN(day))
        throw ErrorType.IllegalArgumentError;
    return new Date(year, month - 1, day);
}
exports.datestrToDate = datestrToDate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var types_1 = __webpack_require__(0);
exports.HEADER_LEN = 1;
exports.GAS_OFFSET = 1;
function getFieldIndices(sheetHeader, fields) {
    var output = fields.map(function (v) {
        var i = sheetHeader.indexOf(v);
        if (i === -1)
            throw types_1.ErrorType.NoMatchFoundError;
        return i;
    });
    return output;
}
function getNextId(sheet) {
    var sheetLength = sheet.getLastRow() - exports.HEADER_LEN;
    if (sheetLength === 0)
        return 0;
    var sheetHeader = sheet.getRange(exports.GAS_OFFSET, exports.GAS_OFFSET, 1, sheet.getLastColumn()).getValues()[0].map(function (row) { return row.toString(); });
    var idIndex;
    try {
        idIndex = getFieldIndices(sheetHeader, ['id'])[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            throw types_1.ErrorType.IllegalArgumentError;
        }
        else {
            throw e;
        }
    }
    var id = types_1.IntData.create(sheet.getRange(sheetLength + exports.HEADER_LEN, exports.GAS_OFFSET + idIndex)
        .getValue().toString());
    return id.getValue() + 1;
}
function getIndicesFromIds(sheet, ids) {
    if (ids.length === 0) {
        return [];
    }
    var tableIds = select(sheet, 'id');
    if (tableIds.length === 0)
        throw types_1.ErrorType.NoMatchFoundError;
    var indices = [];
    for (var id_i = 0; id_i < ids.length; ++id_i) {
        for (var table_i = 0; table_i < tableIds.length; ++table_i) {
            if (tableIds[table_i].toString() === ids[id_i].toString()) {
                indices.push(table_i);
                break;
            }
        }
        if (indices.length !== id_i + 1) {
            throw types_1.ErrorType.NoMatchFoundError;
        }
    }
    return indices;
}
exports.getIndicesFromIds = getIndicesFromIds;
function getIdsFromFields(sheet, fields, vals) {
    if (vals.length === 0) {
        return [];
    }
    if (fields.length === 0 || fields.length !== vals[0].length) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var tableVals = selectMulti(sheet, ['id'].concat(fields));
    if (tableVals.length === 0)
        throw types_1.ErrorType.NoMatchFoundError;
    var ids = [];
    for (var val_i = 0; val_i < vals.length; ++val_i) {
        for (var table_i = 0; table_i < tableVals.length; ++table_i) {
            var foundMatch = true;
            for (var j = 0; j < vals[val_i].length; ++j) {
                if (tableVals[table_i][j + 1].toString() !==
                    vals[val_i][j].toString()) {
                    foundMatch = false;
                    break;
                }
            }
            if (foundMatch) {
                ids.push(types_1.IntData.create(tableVals[table_i][0].toString()));
                break;
            }
        }
        if (ids.length !== val_i + 1) {
            throw types_1.ErrorType.NoMatchFoundError;
        }
    }
    return ids;
}
exports.getIdsFromFields = getIdsFromFields;
function append(sheet, entries) {
    var e_1, _a;
    if (entries.length === 0) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var sheetLength = sheet.getLastRow() - exports.HEADER_LEN;
    var firstEntryLength = entries[0].length();
    var curId = getNextId(sheet);
    var ids = [];
    var rows = [];
    var i = 0;
    try {
        for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
            var entry = entries_1_1.value;
            var row = entry.toArray();
            if (entry.id || row.length !== firstEntryLength - 1) {
                throw types_1.ErrorType.IllegalArgumentError;
            }
            row.unshift((curId + i).toString());
            ids.push(new types_1.IntData(curId + i));
            rows.push(row);
            ++i;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (entries_1_1 && !entries_1_1.done && (_a = entries_1["return"])) _a.call(entries_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    sheet
        .getRange(sheetLength + exports.HEADER_LEN + exports.GAS_OFFSET, 1, rows.length, firstEntryLength)
        .setValues(rows);
    orderBy(sheet, ['id'], true);
    return ids;
}
exports.append = append;
function update(sheet, entries) {
    if (entries.length === 0) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var ids = entries.map(function (entry) {
        if (!entry.id) {
            throw types_1.ErrorType.IllegalArgumentError;
        }
        return entry.id;
    });
    var indices = getIndicesFromIds(sheet, ids);
    var numCols = sheet.getLastColumn();
    for (var i = 0; i < entries.length; ++i) {
        var rowArray = entries[i].toArray();
        if (entries[i].length() !== rowArray.length) {
            throw types_1.ErrorType.IllegalArgumentError;
        }
        sheet
            .getRange(indices[i] + exports.HEADER_LEN + exports.GAS_OFFSET, 1, 1, numCols)
            .setValues([rowArray]);
    }
}
exports.update = update;
function remove(sheet, entries) {
    if (entries.length === 0) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var ids = entries.map(function (entry) {
        if (!entry.id) {
            throw types_1.ErrorType.IllegalArgumentError;
        }
        return entry.id;
    });
    var indices = getIndicesFromIds(sheet, ids);
    indices.sort(function (a, b) { return b - a; });
    for (var i = 0; i < indices.length; ++i) {
        sheet.deleteRow(indices[i] + exports.HEADER_LEN + exports.GAS_OFFSET);
    }
}
exports.remove = remove;
function clearData(sheet) {
    var numRows = sheet.getLastRow() - 1;
    var numCols = sheet.getLastColumn();
    if (numRows > 0 && numCols > 0) {
        sheet.getRange(exports.HEADER_LEN + exports.GAS_OFFSET, 0 + exports.GAS_OFFSET, numRows, numCols)
            .clear();
    }
}
exports.clearData = clearData;
function setData(sheet, data, numFormat, backColor, breakLineNums) {
    var e_2, _a;
    clearData(sheet);
    if (data.length <= 0 || data[0].length <= 0) {
        return;
    }
    var range = sheet.getRange(exports.HEADER_LEN + exports.GAS_OFFSET, 0 + exports.GAS_OFFSET, data.length, data[0].length);
    range.setValues(data);
    if (numFormat) {
        if (numFormat.length !== data.length || numFormat[0].length !== data[0].length) {
            throw types_1.ErrorType.IllegalArgumentError;
        }
        range.setNumberFormats(numFormat);
    }
    if (backColor) {
        if (backColor.length !== data.length || backColor[0].length !== data[0].length) {
            throw types_1.ErrorType.AssertionError;
        }
        range.setBackgrounds(backColor);
    }
    if (breakLineNums) {
        try {
            for (var breakLineNums_1 = __values(breakLineNums), breakLineNums_1_1 = breakLineNums_1.next(); !breakLineNums_1_1.done; breakLineNums_1_1 = breakLineNums_1.next()) {
                var lineNum = breakLineNums_1_1.value;
                sheet.getRange(lineNum + exports.HEADER_LEN + exports.GAS_OFFSET, 0 + exports.GAS_OFFSET, 1, data[0].length)
                    .setBorder(true, false, false, false, false, false, types_1.Color.BLACK, SpreadsheetApp.BorderStyle.SOLID_THICK);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (breakLineNums_1_1 && !breakLineNums_1_1.done && (_a = breakLineNums_1["return"])) _a.call(breakLineNums_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}
exports.setData = setData;
function select(sheet, field) {
    var sheetVals = sheet.getDataRange().getValues();
    var i = sheetVals[0].indexOf(field);
    if (i === -1) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    sheetVals.shift();
    return sheetVals.map(function (row) { return row[i]; });
}
exports.select = select;
function selectMulti(sheet, fields) {
    var sheetVals = sheet.getDataRange().getValues();
    var indicies = getFieldIndices(sheetVals[0].map(function (val) { return val.toString(); }), fields);
    sheetVals.shift();
    return sheetVals.map(function (row) { return indicies.map(function (index) { return row[index]; }); });
}
exports.selectMulti = selectMulti;
function selectAll(sheet) {
    var sheetVals = sheet.getDataRange().getValues();
    sheetVals.shift();
    return sheetVals;
}
exports.selectAll = selectAll;
function orderBy(sheet, fields, asc) {
    if (asc === void 0) { asc = true; }
    if (asc instanceof Array && asc.length !== fields.length) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var sheetHeader = sheet
        .getRange(1, 1, 1, sheet.getLastColumn())
        .getValues()[0];
    var indicies = getFieldIndices(sheetHeader.map(function (val) { return val.toString(); }), fields);
    var sortSpec;
    if (!(asc instanceof Array)) {
        sortSpec = indicies.map(function (index) {
            return { column: index + exports.GAS_OFFSET, ascending: asc };
        });
    }
    else {
        sortSpec = indicies.map(function (index, i) {
            return { column: index + exports.GAS_OFFSET, ascending: asc[i] };
        });
    }
    if (sheet.getLastRow() > 1) {
        sheet
            .getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn())
            .sort(sortSpec);
    }
}
exports.orderBy = orderBy;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tablesId_1 = __webpack_require__(3);
var tableOps_1 = __webpack_require__(1);
var types_1 = __webpack_require__(0);
function getMembers(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Member'))
        .map(function (row) { return new types_1.MemberEntry(types_1.IntData.create(row[0].toString()), types_1.StringData.create(row[1].toString()), types_1.DateData.create(row[2].toString()), types_1.IntData.create(row[3].toString()), types_1.StringData.create(row[4].toString()), types_1.BooleanData.create(row[5].toString()), types_1.BooleanData.create(row[6].toString()), types_1.BooleanData.create(row[7].toString()), types_1.BooleanData.create(row[8].toString()), types_1.BooleanData.create(row[9].toString()), types_1.BooleanData.create(row[10].toString())); });
}
exports.getMembers = getMembers;
function getIncomes(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Income'))
        .map(function (row) { return new types_1.IncomeEntry(types_1.IntData.create(row[0].toString()), types_1.DateData.create(row[1].toString()), types_1.IntData.create(row[2].toString()), types_1.StringData.create(row[3].toString()), types_1.IntData.create(row[4].toString()), types_1.IntData.create(row[5].toString())); });
}
exports.getIncomes = getIncomes;
function getExpenses(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Expense'))
        .map(function (row) { return new types_1.ExpenseEntry(types_1.IntData.create(row[0].toString()), types_1.DateData.create(row[1].toString()), types_1.IntData.create(row[2].toString()), types_1.StringData.create(row[3].toString()), types_1.IntData.create(row[4].toString()), types_1.IntData.create(row[5].toString()), types_1.IntData.create(row[6].toString())); });
}
exports.getExpenses = getExpenses;
function getRecipients(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Recipient'))
        .map(function (row) { return new types_1.RecipientEntry(types_1.IntData.create(row[0].toString()), types_1.StringData.create(row[1].toString())); });
}
exports.getRecipients = getRecipients;
function getPaymentTypes(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('PaymentType'))
        .map(function (row) { return new types_1.PaymentTypeEntry(types_1.IntData.create(row[0].toString()), types_1.StringData.create(row[1].toString())); });
}
exports.getPaymentTypes = getPaymentTypes;
function getStatements(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Statement'))
        .map(function (row) { return new types_1.StatementEntry(types_1.IntData.create(row[0].toString()), types_1.DateData.create(row[1].toString()), types_1.BooleanData.create(row[2].toString())); });
}
exports.getStatements = getStatements;
function getAttendances(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.selectAll(sheet.getSheetByName('Attendance'))
        .map(function (row) { return new types_1.AttendanceEntry(types_1.IntData.create(row[0].toString()), types_1.DateData.create(row[1].toString()), types_1.IntListData.create(row[2].toString()), types_1.QuarterData.create(row[3].toString())); });
}
exports.getAttendances = getAttendances;
function getClubInfo(sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    var tableVals = tableOps_1.selectAll(sheet.getSheetByName('ClubInfo'));
    if (tableVals.length === 0)
        throw types_1.ErrorType.IllegalArgumentError;
    return new types_1.ClubInfoEntry(types_1.IntData.create(tableVals[0][0].toString()), types_1.IntData.create(tableVals[0][1].toString()), types_1.IntData.create(tableVals[0][2].toString()), types_1.QuarterData.create(tableVals[0][3].toString()));
}
exports.getClubInfo = getClubInfo;
function getMemberIds(member, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.getIdsFromFields(sheet.getSheetByName('Member'), ['name'], member.map(function (m) { return [m]; }));
}
exports.getMemberIds = getMemberIds;
function getRecipientIds(recipient, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.getIdsFromFields(sheet.getSheetByName('Recipient'), ['name'], recipient.map(function (r) { return [r]; }));
}
exports.getRecipientIds = getRecipientIds;
function getPaymentTypeIds(paymentType, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId) :
        SpreadsheetApp.openById(tablesId_1.ID);
    return tableOps_1.getIdsFromFields(sheet.getSheetByName('PaymentType'), ['name'], paymentType.map(function (p) { return [p]; }));
}
exports.getPaymentTypeIds = getPaymentTypeIds;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1syP5wwkVN_TLSraGv9tQOagMkFxbdT4g4pQK-wK9fig';


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ae_1 = __webpack_require__(5);
var ai_1 = __webpack_require__(6);
var ami_1 = __webpack_require__(7);
var cd_1 = __webpack_require__(8);
var ct_1 = __webpack_require__(9);
var nq_1 = __webpack_require__(10);
var rmi_1 = __webpack_require__(11);
var ta_1 = __webpack_require__(12);
var tf_1 = __webpack_require__(13);
var ucs_1 = __webpack_require__(14);
var ums_1 = __webpack_require__(15);
var types_1 = __webpack_require__(0);
var DISABLED_ITEM_TITLE = 'Loading values, please refresh your browser';
function getIdFromName(formName) {
    switch (formName) {
        case 'Add Expense':
            return ae_1.ID;
        case 'Add Income':
            return ai_1.ID;
        case 'Add Member IOU':
            return ami_1.ID;
        case 'Collect Dues':
            return cd_1.ID;
        case 'Confirm Transfer':
            return ct_1.ID;
        case 'Next Quarter':
            return nq_1.ID;
        case 'Resolve Member IOU':
            return rmi_1.ID;
        case 'Take Attendance':
            return ta_1.ID;
        case 'Transfer Funds':
            return tf_1.ID;
        case 'Update Contact Settings':
            return ucs_1.ID;
        case 'Update Member Status':
            return ums_1.ID;
        default:
            throw types_1.ErrorType.IllegalArgumentError;
    }
}
function disableForm(form) {
    var formApp = FormApp.openById(getIdFromName(form.getName()));
    if (formApp.getItems().length === 0 || formApp.getItems()[0].getTitle() !== DISABLED_ITEM_TITLE) {
        formApp.addCheckboxItem()
            .setTitle(DISABLED_ITEM_TITLE)
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setRequired(true);
        while (formApp.getItems().length > 1) {
            formApp.deleteItem(0);
        }
    }
    else {
        while (formApp.getItems().length > 1) {
            formApp.deleteItem(1);
        }
    }
}
exports.disableForm = disableForm;
function enableForm(form) {
    var formApp = FormApp.openById(getIdFromName(form.getName()));
    if (formApp.getItems().length > 0 && formApp.getItems()[0].getTitle() === DISABLED_ITEM_TITLE) {
        formApp.deleteItem(0);
    }
}
exports.enableForm = enableForm;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1Mq85HM0fSH98wBTtnafhxaDhIZZu5He4cSrtCsBvqHk';


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '16FYl2wx8wy7cHBfBJTRKwqIl4bGkJW19T-pLQifGFp8';


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1qX7v9RiwKYiI36WMbGs3p3KYvtzkngtjuJozWjdYPBo';


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1dF8Pm7gumlq-VOFbNiie-sWcQvcAjNoum3mWGU1y7nQ';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1H-SKdKU4cDlAVj4NZpCzeU3MkZfzW0uB3LK4zSPcjG0';


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1Wsj60-UDViK3dJhMfxVun7C0JbSKMJRUcde3cPqNw5A';


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1yhgtnim36_rR7OLvNN8bBiGzLLAWHsq9b98BMPi5ZA8';


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1hiiB4kZRAX-YNvAe1NR5UfTM79Ee_3n1GI7VmU6eU3w';


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '14kzC322dFw28Z_mUlW2D2K3zdEQvRQ7oXGukNBFUOew';


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1uInN5rB-UP16ZqvpBzRAw0teppYV1fMYe-TDZ1VP3es';


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1dw8oI_yyKAzbYVTOQe_YSaLjYPKQv6JqV3oHiT8oBBY';


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1MS82vtAtB5z3R-q_9X4j4AfJDnGVqLX7oEuiZASNlaU';


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tablesId_1 = __webpack_require__(3);
var tableOps_1 = __webpack_require__(1);
var types_1 = __webpack_require__(0);
function appendMember(name, dateJoined, amountOwed, email, performing, active, officer, currentDuesPaid, notifyPoll, sendReceipt, sheetId) {
    var numEntries = name.length;
    if (dateJoined.length !== numEntries ||
        amountOwed.length !== numEntries ||
        email.length !== numEntries ||
        performing.length !== numEntries ||
        active.length !== numEntries ||
        officer.length !== numEntries ||
        currentDuesPaid.length !== numEntries ||
        notifyPoll.length !== numEntries ||
        sendReceipt.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.MemberEntry(undefined, name[i], dateJoined[i], amountOwed[i], email[i], performing[i], active[i], officer[i], currentDuesPaid[i], notifyPoll[i], sendReceipt[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Member') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Member');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.MEMBER);
    return tableOps_1.append(sheet, entries);
}
exports.appendMember = appendMember;
function appendIncome(date, amount, description, paymentTypeId, statementId, sheetId) {
    var numEntries = date.length;
    if (amount.length !== numEntries ||
        description.length !== numEntries ||
        paymentTypeId.length !== numEntries ||
        statementId.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.IncomeEntry(undefined, date[i], amount[i], description[i], paymentTypeId[i], statementId[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Income') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Income');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.INCOME);
    return tableOps_1.append(sheet, entries);
}
exports.appendIncome = appendIncome;
function appendExpense(date, amount, description, paymentTypeId, recipientId, statementId, sheetId) {
    var numEntries = date.length;
    if (amount.length !== numEntries ||
        description.length !== numEntries ||
        paymentTypeId.length !== numEntries ||
        recipientId.length !== numEntries ||
        statementId.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.ExpenseEntry(undefined, date[i], amount[i], description[i], paymentTypeId[i], recipientId[i], statementId[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Expense') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Expense');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.EXPENSE);
    return tableOps_1.append(sheet, entries);
}
exports.appendExpense = appendExpense;
function appendRecipient(name, sheetId) {
    var numEntries = name.length;
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.RecipientEntry(undefined, name[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Recipient') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Recipient');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.RECIPIENT);
    return tableOps_1.append(sheet, entries);
}
exports.appendRecipient = appendRecipient;
function appendPaymentType(name, sheetId) {
    var numEntries = name.length;
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.PaymentTypeEntry(undefined, name[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('PaymentType') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('PaymentType');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.PAYMENT_TYPE);
    return tableOps_1.append(sheet, entries);
}
exports.appendPaymentType = appendPaymentType;
function appendStatement(date, confirmed, sheetId) {
    var numEntries = date.length;
    if (confirmed.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.StatementEntry(undefined, date[i], confirmed[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Statement') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Statement');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.STATEMENT);
    return tableOps_1.append(sheet, entries);
}
exports.appendStatement = appendStatement;
function appendAttendance(date, memberIds, quarterId, sheetId) {
    var numEntries = date.length;
    if (memberIds.length !== numEntries || quarterId.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.AttendanceEntry(undefined, date[i], memberIds[i], quarterId[i]));
    }
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Attendance') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Attendance');
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.ATTENDANCE);
    return tableOps_1.append(sheet, entries);
}
exports.appendAttendance = appendAttendance;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tablesId_1 = __webpack_require__(3);
var tableOps_1 = __webpack_require__(1);
var types_1 = __webpack_require__(0);
function updateMember(id, name, dateJoined, amountOwed, email, performing, active, officer, currentDuesPaid, notifyPoll, sendReceipt, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Member') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Member');
    var numEntries = id.length;
    if ((name && name.length !== numEntries) ||
        (dateJoined && dateJoined.length !== numEntries) ||
        (amountOwed && amountOwed.length !== numEntries) ||
        (email && email.length !== numEntries) ||
        (performing && performing.length !== numEntries) ||
        (active && active.length !== numEntries) ||
        (officer && officer.length !== numEntries) ||
        (currentDuesPaid && currentDuesPaid.length !== numEntries) ||
        (notifyPoll && notifyPoll.length !== numEntries) ||
        (sendReceipt && sendReceipt.length !== numEntries)) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var indicies = tableOps_1.getIndicesFromIds(sheet, id);
    var allSheetVals = tableOps_1.selectAll(sheet);
    var sheetVals = indicies.map(function (i) { return allSheetVals[i]; });
    if (!name)
        name = sheetVals.map(function (row) { return types_1.StringData.create(row[1].toString()); });
    if (!dateJoined)
        dateJoined = sheetVals.map(function (row) { return types_1.DateData.create(row[2].toString()); });
    if (!amountOwed)
        amountOwed = sheetVals.map(function (row) { return types_1.IntData.create(row[3].toString()); });
    if (!email)
        email = sheetVals.map(function (row) { return types_1.StringData.create(row[4].toString()); });
    if (!performing)
        performing = sheetVals.map(function (row) { return types_1.BooleanData.create(row[5].toString()); });
    if (!active)
        active = sheetVals.map(function (row) { return types_1.BooleanData.create(row[6].toString()); });
    if (!officer)
        officer = sheetVals.map(function (row) { return types_1.BooleanData.create(row[7].toString()); });
    if (!currentDuesPaid)
        currentDuesPaid = sheetVals.map(function (row) { return types_1.BooleanData.create(row[8].toString()); });
    if (!notifyPoll)
        notifyPoll = sheetVals.map(function (row) { return types_1.BooleanData.create(row[9].toString()); });
    if (!sendReceipt)
        sendReceipt = sheetVals.map(function (row) { return types_1.BooleanData.create(row[10].toString()); });
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.MemberEntry(id[i], name[i], dateJoined[i], amountOwed[i], email[i], performing[i], active[i], officer[i], currentDuesPaid[i], notifyPoll[i], sendReceipt[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.MEMBER);
    tableOps_1.update(sheet, entries);
}
exports.updateMember = updateMember;
function updateIncome(id, date, amount, description, paymentTypeId, statementId, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Income') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Income');
    var numEntries = id.length;
    if ((date && date.length !== numEntries) ||
        (amount && amount.length !== numEntries) ||
        (description && description.length !== numEntries) ||
        (paymentTypeId && paymentTypeId.length !== numEntries) ||
        (statementId && statementId.length !== numEntries)) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var indicies = tableOps_1.getIndicesFromIds(sheet, id);
    var allSheetVals = tableOps_1.selectAll(sheet);
    var sheetVals = indicies.map(function (i) { return allSheetVals[i]; });
    if (!date)
        date = sheetVals.map(function (row) { return types_1.DateData.create(row[1].toString()); });
    if (!amount)
        amount = sheetVals.map(function (row) { return types_1.IntData.create(row[2].toString()); });
    if (!description)
        description = sheetVals.map(function (row) { return types_1.StringData.create(row[3].toString()); });
    if (!paymentTypeId)
        paymentTypeId = sheetVals.map(function (row) { return types_1.IntData.create(row[4].toString()); });
    if (!statementId)
        statementId = sheetVals.map(function (row) { return types_1.IntData.create(row[5].toString()); });
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.IncomeEntry(id[i], date[i], amount[i], description[i], paymentTypeId[i], statementId[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.INCOME);
    tableOps_1.update(sheet, entries);
}
exports.updateIncome = updateIncome;
function updateExpense(id, date, amount, description, paymentTypeId, recipientId, statementId, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Expense') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Expense');
    var numEntries = id.length;
    if ((date && date.length !== numEntries) ||
        (amount && amount.length !== numEntries) ||
        (description && description.length !== numEntries) ||
        (paymentTypeId && paymentTypeId.length !== numEntries) ||
        (recipientId && recipientId.length !== numEntries) ||
        (statementId && statementId.length !== numEntries)) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var indicies = tableOps_1.getIndicesFromIds(sheet, id);
    var allSheetVals = tableOps_1.selectAll(sheet);
    var sheetVals = indicies.map(function (i) { return allSheetVals[i]; });
    if (!date)
        date = sheetVals.map(function (row) { return types_1.DateData.create(row[1].toString()); });
    if (!amount)
        amount = sheetVals.map(function (row) { return types_1.IntData.create(row[2].toString()); });
    if (!description)
        description = sheetVals.map(function (row) { return types_1.StringData.create(row[3].toString()); });
    if (!paymentTypeId)
        paymentTypeId = sheetVals.map(function (row) { return types_1.IntData.create(row[4].toString()); });
    if (!recipientId)
        recipientId = sheetVals.map(function (row) { return types_1.IntData.create(row[5].toString()); });
    if (!statementId)
        statementId = sheetVals.map(function (row) { return types_1.IntData.create(row[6].toString()); });
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.ExpenseEntry(id[i], date[i], amount[i], description[i], paymentTypeId[i], recipientId[i], statementId[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.EXPENSE);
    tableOps_1.update(sheet, entries);
}
exports.updateExpense = updateExpense;
function updateRecipient(id, name, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Recipient') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Recipient');
    var numEntries = id.length;
    if (name && name.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.RecipientEntry(id[i], name[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.RECIPIENT);
    tableOps_1.update(sheet, entries);
}
exports.updateRecipient = updateRecipient;
function updatePaymentType(id, name, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('PaymentType') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('PaymentType');
    var numEntries = id.length;
    if (name && name.length !== numEntries) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.PaymentTypeEntry(id[i], name[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.PAYMENT_TYPE);
    tableOps_1.update(sheet, entries);
}
exports.updatePaymentType = updatePaymentType;
function updateStatement(id, date, confirmed, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Statement') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Statement');
    var numEntries = id.length;
    if ((date && date.length !== numEntries) ||
        (confirmed && confirmed.length !== numEntries)) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var indicies = tableOps_1.getIndicesFromIds(sheet, id);
    var allSheetVals = tableOps_1.selectAll(sheet);
    var sheetVals = indicies.map(function (i) { return allSheetVals[i]; });
    if (!date)
        date = sheetVals.map(function (row) { return types_1.DateData.create(row[1].toString()); });
    if (!confirmed)
        confirmed = sheetVals.map(function (row) { return types_1.BooleanData.create(row[2].toString()); });
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.StatementEntry(id[i], date[i], confirmed[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.STATEMENT);
    tableOps_1.update(sheet, entries);
}
exports.updateStatement = updateStatement;
function updateAttendance(id, date, memberIds, quarterId, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Attendance') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Attendance');
    var numEntries = id.length;
    if ((date && date.length !== numEntries) ||
        (memberIds && memberIds.length !== numEntries) ||
        (quarterId && quarterId.length !== numEntries)) {
        throw types_1.ErrorType.IllegalArgumentError;
    }
    var indicies = tableOps_1.getIndicesFromIds(sheet, id);
    var allSheetVals = tableOps_1.selectAll(sheet);
    var sheetVals = indicies.map(function (i) { return allSheetVals[i]; });
    if (!date)
        date = sheetVals.map(function (row) { return types_1.DateData.create(row[1].toString()); });
    if (!memberIds)
        memberIds = sheetVals.map(function (row) { return types_1.IntListData.create(row[2].toString()); });
    if (!quarterId)
        quarterId = sheetVals.map(function (row) { return types_1.QuarterData.create(row[3].toString()); });
    var entries = [];
    for (var i = 0; i < numEntries; ++i) {
        entries.push(new types_1.AttendanceEntry(id[i], date[i], memberIds[i], quarterId[i]));
    }
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.ATTENDANCE);
    tableOps_1.update(sheet, entries);
}
exports.updateAttendance = updateAttendance;
function updateClubInfo(memberFee, officerFee, daysUntilFeeRequired, currentQuarterId, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('ClubInfo') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('ClubInfo');
    var sheetVals = tableOps_1.selectAll(sheet)[0];
    if (!memberFee)
        memberFee = types_1.IntData.create(sheetVals[0].toString());
    if (!officerFee)
        officerFee = types_1.IntData.create(sheetVals[1].toString());
    if (!daysUntilFeeRequired)
        daysUntilFeeRequired = types_1.IntData.create(sheetVals[2].toString());
    if (!currentQuarterId)
        currentQuarterId = types_1.QuarterData.create(sheetVals[3].toString());
    sheet
        .getRange(0 + tableOps_1.HEADER_LEN + tableOps_1.GAS_OFFSET, 1, 1, sheetVals.length)
        .setValues([
        [
            memberFee.toString(),
            officerFee.toString(),
            daysUntilFeeRequired.toString(),
            currentQuarterId.toString(),
        ],
    ]);
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.CLUB_INFO);
}
exports.updateClubInfo = updateClubInfo;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var projectInfo_1 = __webpack_require__(20);
var get_1 = __webpack_require__(2);
var types_1 = __webpack_require__(0);
function sendEmails(emails, subject, body) {
    emails.forEach(function (email) { return GmailApp.sendEmail(email, subject, body); });
}
function emailReceipts(memberNames, amount, description) {
    var e_1, _a;
    memberNames = memberNames.map(function (name) { return new types_1.StringData(name.toString().toLowerCase()); });
    var members = get_1.getMembers();
    var emails = [];
    var startIndex = 0;
    try {
        for (var memberNames_1 = __values(memberNames), memberNames_1_1 = memberNames_1.next(); !memberNames_1_1.done; memberNames_1_1 = memberNames_1.next()) {
            var name = memberNames_1_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curEmail = members[i].email;
                var curSendReceipt = members[i].sendReceipt;
                if (!curName || !curEmail || !curSendReceipt) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.toString() === name.toString()) {
                    if (curSendReceipt.getValue() && curEmail.getValue().length !== 0) {
                        emails.push(curEmail.getValue());
                    }
                    startIndex = i;
                    break;
                }
                i = (i + 1) % members.length;
            } while (i !== startIndex);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (memberNames_1_1 && !memberNames_1_1.done && (_a = memberNames_1["return"])) _a.call(memberNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    sendEmails(emails, "Receipt from " + projectInfo_1.GROUP_NAME, "This is confirming your payment of $" + amount + " to " + projectInfo_1.GROUP_NAME + " for '" + description + "'.");
}
exports.emailReceipts = emailReceipts;
function emailIOUNotification(memberNames, amount, description) {
    var e_2, _a;
    var inputNames = memberNames.map(function (name) { return name.toString().toLowerCase(); });
    var members = get_1.getMembers();
    var emails = [];
    var startIndex = 0;
    try {
        for (var inputNames_1 = __values(inputNames), inputNames_1_1 = inputNames_1.next(); !inputNames_1_1.done; inputNames_1_1 = inputNames_1.next()) {
            var name = inputNames_1_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curEmail = members[i].email;
                var curSendReceipt = members[i].sendReceipt;
                if (!curName || !curEmail || !curSendReceipt) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.toString() === name) {
                    if (curSendReceipt.getValue() || curEmail.getValue().length !== 0) {
                        emails.push(curEmail.getValue());
                    }
                    startIndex = i;
                    break;
                }
                i = (i + 1) % members.length;
            } while (i !== startIndex);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (inputNames_1_1 && !inputNames_1_1.done && (_a = inputNames_1["return"])) _a.call(inputNames_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    sendEmails(emails, "IOU for " + projectInfo_1.GROUP_NAME, "This is confirming that you owe $" + amount + " to " + projectInfo_1.GROUP_NAME + " for '" + description + "'.");
}
exports.emailIOUNotification = emailIOUNotification;
function emailPollNotification(pollName, deadline, link, sheetId) {
    var e_3, _a;
    var members = get_1.getMembers(sheetId);
    var emails = [];
    try {
        for (var members_1 = __values(members), members_1_1 = members_1.next(); !members_1_1.done; members_1_1 = members_1.next()) {
            var member = members_1_1.value;
            if (!member.email || !member.active || !member.performing || !member.notifyPoll)
                throw types_1.ErrorType.AssertionError;
            if (member.active.getValue() && member.notifyPoll.getValue() && member.email.getValue() !== '') {
                emails.push(member.email.getValue());
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (members_1_1 && !members_1_1.done && (_a = members_1["return"])) _a.call(members_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    var weekday;
    switch (deadline.getDay()) {
        case 0:
            weekday = 'Sunday';
            break;
        case 1:
            weekday = 'Monday';
            break;
        case 2:
            weekday = 'Tuesday';
            break;
        case 3:
            weekday = 'Wednesday';
            break;
        case 4:
            weekday = 'Thursday';
            break;
        case 5:
            weekday = 'Friday';
            break;
        case 6:
            weekday = 'Saturday';
            break;
        default:
            throw types_1.ErrorType.AssertionError;
    }
    var month;
    switch (deadline.getMonth()) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            throw types_1.ErrorType.AssertionError;
    }
    var date = deadline.getDate();
    var hours = (((deadline.getHours() - 1) + 12) % 12 + 1).toString();
    var mins = deadline.getMinutes() < 10 ? "0" + deadline.getMinutes() : deadline.getMinutes().toString();
    var ampm = deadline.getHours() < 12 ? 'AM' : 'PM';
    sendEmails(emails, projectInfo_1.GROUP_NAME + " Performance Poll", "Please respond to the " + pollName + " poll before " + weekday + ", " + month + " " + date + " at " + hours + ":" + mins + " " + ampm + ".\nLink: " + link);
}
exports.emailPollNotification = emailPollNotification;
function emailMembers(memberList, subject, body, sheetId) {
    var e_4, _a;
    var inputNames = memberList.map(function (name) { return name.toString().toLowerCase(); });
    var members = get_1.getMembers(sheetId);
    var emails = [];
    var startIndex = 0;
    try {
        for (var inputNames_2 = __values(inputNames), inputNames_2_1 = inputNames_2.next(); !inputNames_2_1.done; inputNames_2_1 = inputNames_2.next()) {
            var name = inputNames_2_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curEmail = members[i].email;
                if (!curName || !curEmail) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.getValue() === name && curEmail.getValue() !== '') {
                    emails.push(curEmail.getValue());
                    startIndex = i;
                    break;
                }
                i = (i + 1) % members.length;
            } while (i !== startIndex);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (inputNames_2_1 && !inputNames_2_1.done && (_a = inputNames_2["return"])) _a.call(inputNames_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
    emails.map(function (email) { return GmailApp.sendEmail(email, subject, body); });
}
exports.emailMembers = emailMembers;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.GROUP_NAME = 'Taiko Kai';
exports.START_QUARTER = '2';
exports.START_YEAR = '2019';
exports.MEMBER_DUES = '15.15';
exports.OFFICER_DUES = '';
exports.NUM_ATTNS = '';


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var tablesId_1 = __webpack_require__(3);
var tableOps_1 = __webpack_require__(1);
var types_1 = __webpack_require__(0);
function removeMember(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Member') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Member');
    var entries = id.map(function (i) { return new types_1.MemberEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.MEMBER);
    tableOps_1.remove(sheet, entries);
}
exports.removeMember = removeMember;
function removeIncome(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Income') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Income');
    var entries = id.map(function (i) { return new types_1.IncomeEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.INCOME);
    tableOps_1.remove(sheet, entries);
}
exports.removeIncome = removeIncome;
function removeExpense(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Expense') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Expense');
    var entries = id.map(function (i) { return new types_1.ExpenseEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.EXPENSE);
    tableOps_1.remove(sheet, entries);
}
exports.removeExpense = removeExpense;
function removeRecipient(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Recipient') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Recipient');
    var entries = id.map(function (i) { return new types_1.RecipientEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.RECIPIENT);
    tableOps_1.remove(sheet, entries);
}
exports.removeRecipient = removeRecipient;
function removePaymentType(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('PaymentType') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('PaymentType');
    var entries = id.map(function (i) { return new types_1.PaymentTypeEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.PAYMENT_TYPE);
    tableOps_1.remove(sheet, entries);
}
exports.removePaymentType = removePaymentType;
function removeStatement(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Statement') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Statement');
    var entries = id.map(function (i) { return new types_1.StatementEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.STATEMENT);
    tableOps_1.remove(sheet, entries);
}
exports.removeStatement = removeStatement;
function removeAttendance(id, sheetId) {
    var sheet = sheetId ?
        SpreadsheetApp.openById(sheetId).getSheetByName('Attendance') :
        SpreadsheetApp.openById(tablesId_1.ID).getSheetByName('Attendance');
    var entries = id.map(function (i) { return new types_1.StatementEntry(i); });
    types_1.RefreshLogger.markAsUpdated(types_1.DataTable.ATTENDANCE);
    tableOps_1.remove(sheet, entries);
}
exports.removeAttendance = removeAttendance;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var email_1 = __webpack_require__(19);
var append_1 = __webpack_require__(17);
var get_1 = __webpack_require__(2);
var update_1 = __webpack_require__(18);
var types_1 = __webpack_require__(0);
function getAmountOwed(memberNames, sheetId) {
    var e_1, _a;
    var members = get_1.getMembers(sheetId);
    var owed = [];
    var startIndex = 0;
    try {
        for (var memberNames_1 = __values(memberNames), memberNames_1_1 = memberNames_1.next(); !memberNames_1_1.done; memberNames_1_1 = memberNames_1.next()) {
            var name = memberNames_1_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curOwed = members[i].amountOwed;
                if (!curName || !curOwed) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.toString() === name.toString()) {
                    owed.push(curOwed);
                    startIndex = i;
                    break;
                }
                i = (i + 1) % members.length;
            } while (i !== startIndex);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (memberNames_1_1 && !memberNames_1_1.done && (_a = memberNames_1["return"])) _a.call(memberNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (owed.length !== memberNames.length) {
        throw types_1.ErrorType.NoMatchFoundError;
    }
    return owed;
}
function getDuesValues(memberNames, sheetId) {
    var e_2, _a;
    var clubInfo = get_1.getClubInfo(sheetId);
    var members = get_1.getMembers(sheetId);
    var duesVals = [];
    var startIndex = 0;
    try {
        for (var memberNames_2 = __values(memberNames), memberNames_2_1 = memberNames_2.next(); !memberNames_2_1.done; memberNames_2_1 = memberNames_2.next()) {
            var name = memberNames_2_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curOfficer = members[i].officer;
                if (!curName || !curOfficer) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.toString() === name.toString()) {
                    duesVals.push(curOfficer.getValue() ? clubInfo.officerFee : clubInfo.memberFee);
                    startIndex = i;
                    break;
                }
                i = (i + 1) % members.length;
            } while (i !== startIndex);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (memberNames_2_1 && !memberNames_2_1.done && (_a = memberNames_2["return"])) _a.call(memberNames_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return duesVals;
}
function yesnoToBool(yesno) {
    switch (yesno) {
        case 'Yes':
            return types_1.BooleanData.TRUE;
        case 'No':
            return types_1.BooleanData.FALSE;
        default:
            throw types_1.ErrorType.IllegalArgumentError;
    }
}
function addExpense(amountRes, description, recipient, paymentType, sheetId) {
    var today = new types_1.DateData(new Date());
    var recipientData = new types_1.StringData(recipient.trim().toLowerCase());
    var payTypeData = new types_1.StringData(paymentType.trim().toLowerCase());
    var payTypeId;
    try {
        payTypeId = get_1.getPaymentTypeIds([payTypeData], sheetId)[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            payTypeId = append_1.appendPaymentType([payTypeData], sheetId)[0];
        }
        else {
            throw e;
        }
    }
    var recipientId;
    try {
        recipientId = get_1.getRecipientIds([recipientData], sheetId)[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            recipientId = append_1.appendRecipient([recipientData], sheetId)[0];
        }
        else {
            throw e;
        }
    }
    var amount = parseFloat(amountRes);
    if (isNaN(amount)) {
        throw "parseFloat error: Unable to parse amount given";
    }
    append_1.appendExpense([today], [new types_1.IntData(Math.round(amount * 100))], [new types_1.StringData(description)], [payTypeId], [recipientId], [new types_1.IntData(-1)], sheetId);
}
exports.addExpense = addExpense;
function addIncome(amountRes, description, paymentType, sheetId) {
    var today = new types_1.DateData(new Date());
    var payTypeData = new types_1.StringData(paymentType.trim().toLowerCase());
    var payTypeId;
    try {
        payTypeId = get_1.getPaymentTypeIds([payTypeData], sheetId)[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            payTypeId = append_1.appendPaymentType([payTypeData], sheetId)[0];
        }
        else {
            throw e;
        }
    }
    var amount = parseFloat(amountRes);
    if (isNaN(amount)) {
        throw "parseFloat error: Unable to parse amount given";
    }
    append_1.appendIncome([today], [new types_1.IntData(Math.round(amount * 100))], [new types_1.StringData(description)], [payTypeId], [new types_1.IntData(-1)], sheetId);
}
exports.addIncome = addIncome;
function addMemberIOU(membersRes, amountRes, description, sheetId) {
    var memberNames = membersRes.map(function (member) { return new types_1.StringData(member.substr(0, member.indexOf(':')).toLowerCase()); });
    if (!sheetId) {
        email_1.emailIOUNotification(memberNames.map(function (member) { return new types_1.StringData(types_1.capitalizeString(member.getValue())); }), amountRes, description);
    }
    var memberIds = get_1.getMemberIds(memberNames, sheetId);
    var amount = parseFloat(amountRes);
    if (isNaN(amount)) {
        throw "parseFloat error: Unable to parse amount given";
    }
    var amountCents = Math.round(amount * 100);
    var curOwed = getAmountOwed(memberNames, sheetId);
    update_1.updateMember(memberIds, undefined, undefined, curOwed.map(function (cur) { return new types_1.IntData(cur.getValue() + amountCents); }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, sheetId);
}
exports.addMemberIOU = addMemberIOU;
function collectDues(memListRes, paymentTypeRes, sheetId) {
    memListRes = memListRes.map(function (res) { return res.substr(0, res.indexOf(':')); });
    var curQuarter = get_1.getClubInfo(sheetId).currentQuarterId;
    var members = memListRes.map(function (name) { return new types_1.StringData(name.toLowerCase()); });
    var descriptions = memListRes.map(function (name) { return new types_1.StringData(name + ", dues for " + curQuarter.toDateString()); });
    var paymentType = new types_1.StringData(paymentTypeRes.trim().toLowerCase());
    var today = new types_1.DateData(new Date());
    var memberIds = get_1.getMemberIds(members, sheetId);
    update_1.updateMember(memberIds, undefined, undefined, undefined, undefined, undefined, undefined, undefined, types_1.repeat(types_1.BooleanData.TRUE, members.length), undefined, undefined, sheetId);
    var duesAmounts = getDuesValues(members, sheetId);
    var payTypeId;
    try {
        payTypeId = get_1.getPaymentTypeIds([paymentType], sheetId)[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            payTypeId = append_1.appendPaymentType([paymentType], sheetId)[0];
        }
        else {
            throw e;
        }
    }
    if (!sheetId) {
        for (var i = 0; i < members.length; ++i) {
            email_1.emailReceipts([new types_1.StringData(types_1.capitalizeString(members[i].getValue()))], (duesAmounts[i].getValue() / 100).toString(), descriptions[i].toString());
        }
    }
    append_1.appendIncome(types_1.repeat(today, members.length), duesAmounts, descriptions, types_1.repeat(payTypeId, members.length), types_1.repeat(new types_1.IntData(-1), members.length), sheetId);
}
exports.collectDues = collectDues;
function confirmTransfer(statementList, sheetId) {
    var ids = statementList.map(function (s) {
        var start = s.lastIndexOf('[');
        var end = s.lastIndexOf(']');
        return types_1.IntData.create(s.substr(start + 1, end - start - 1));
    });
    update_1.updateStatement(ids, undefined, types_1.repeat(types_1.BooleanData.TRUE, ids.length), sheetId);
}
exports.confirmTransfer = confirmTransfer;
function nextQuarter(sheetId) {
    var clubInfo = get_1.getClubInfo(sheetId);
    var ids = get_1.getMembers(sheetId).map(function (member) {
        if (!member.id)
            throw types_1.ErrorType.AssertionError;
        return member.id;
    });
    update_1.updateClubInfo(undefined, undefined, undefined, clubInfo.currentQuarterId.next(), sheetId);
    update_1.updateMember(ids, undefined, undefined, undefined, undefined, undefined, undefined, undefined, types_1.repeat(types_1.BooleanData.FALSE, ids.length), undefined, undefined, sheetId);
}
exports.nextQuarter = nextQuarter;
function resolveMemberIOU(membersRes, amount, description, paymentType, sheetId) {
    var memberNames = membersRes.map(function (member) { return new types_1.StringData(member.substr(0, member.indexOf(':')).toLowerCase()); });
    if (!sheetId) {
        email_1.emailReceipts(memberNames.map(function (member) { return new types_1.StringData(types_1.capitalizeString(member.getValue())); }), amount, description);
    }
    var memberIds = get_1.getMemberIds(memberNames, sheetId);
    var amountCents = Math.round(parseFloat(amount) * 100);
    var curOwed = getAmountOwed(memberNames, sheetId);
    var payTypeData = new types_1.StringData(paymentType.trim().toLowerCase());
    var payTypeId;
    try {
        payTypeId = get_1.getPaymentTypeIds([payTypeData], sheetId)[0];
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            payTypeId = append_1.appendPaymentType([payTypeData], sheetId)[0];
        }
        else {
            throw e;
        }
    }
    update_1.updateMember(memberIds, undefined, undefined, curOwed.map(function (cur) { return new types_1.IntData(cur.getValue() - amountCents); }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, sheetId);
    var today = new types_1.DateData(new Date());
    append_1.appendIncome(types_1.repeat(today, memberNames.length), types_1.repeat(new types_1.IntData(amountCents), memberNames.length), memberNames.map(function (name) { return new types_1.StringData(types_1.capitalizeString(name.toString()) + ' ' + description + ' (debt)'); }), types_1.repeat(payTypeId, memberNames.length), types_1.repeat(new types_1.IntData(-1), memberNames.length), sheetId);
}
exports.resolveMemberIOU = resolveMemberIOU;
function takeAttendance(memListRes, newMemberRes, sheetId) {
    var e_3, _a;
    if (!memListRes) {
        if (!newMemberRes) {
            return;
        }
        memListRes = [];
    }
    var curQuarter = get_1.getClubInfo(sheetId).currentQuarterId;
    var today = new types_1.DateData(new Date());
    var curNames = get_1.getMembers(sheetId).map(function (member) {
        if (!member.name)
            throw types_1.ErrorType.AssertionError;
        return member.name.getValue();
    });
    memListRes = memListRes.map(function (name) { return name.toLowerCase(); });
    var prevMembersData = memListRes.map(function (name) { return new types_1.StringData(name); });
    var newMembersData = [];
    var newIds;
    if (newMemberRes === undefined) {
        newIds = [];
    }
    else {
        newMemberRes = newMemberRes.toLowerCase();
        var newMembers = newMemberRes.split('\n').map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
        try {
            for (var newMembers_1 = __values(newMembers), newMembers_1_1 = newMembers_1.next(); !newMembers_1_1.done; newMembers_1_1 = newMembers_1.next()) {
                var member = newMembers_1_1.value;
                if (curNames.indexOf(member) === -1) {
                    newMembersData.push(new types_1.StringData(member));
                }
                else {
                    memListRes.indexOf(member);
                    prevMembersData.push(new types_1.StringData(member));
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (newMembers_1_1 && !newMembers_1_1.done && (_a = newMembers_1["return"])) _a.call(newMembers_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (newMembersData.length > 0) {
            newIds = append_1.appendMember(newMembersData, types_1.repeat(today, newMembersData.length), types_1.repeat(new types_1.IntData(0), newMembersData.length), types_1.repeat(new types_1.StringData(''), newMembersData.length), types_1.repeat(types_1.BooleanData.FALSE, newMembersData.length), types_1.repeat(types_1.BooleanData.TRUE, newMembersData.length), types_1.repeat(types_1.BooleanData.FALSE, newMembersData.length), types_1.repeat(types_1.BooleanData.FALSE, newMembersData.length), types_1.repeat(types_1.BooleanData.FALSE, newMembersData.length), types_1.repeat(types_1.BooleanData.FALSE, newMembersData.length), sheetId);
        }
        else {
            newIds = [];
        }
    }
    if (prevMembersData.length === 0) {
        append_1.appendAttendance([today], [new types_1.IntListData(newIds)], [curQuarter], sheetId);
    }
    else {
        var prevIds = get_1.getMemberIds(prevMembersData, sheetId);
        prevIds.sort(function (valA, valB) { return valA.getValue() - valB.getValue(); });
        append_1.appendAttendance([today], [new types_1.IntListData(prevIds.concat(newIds))], [curQuarter], sheetId);
    }
}
exports.takeAttendance = takeAttendance;
function transferFunds(incomes, expenses, sheetId) {
    if (incomes || expenses) {
        var today = new types_1.DateData(new Date());
        var statementId = append_1.appendStatement([today], [types_1.BooleanData.FALSE], sheetId)[0];
        if (incomes) {
            var incomeIds = incomes.map(function (s) {
                var start = s.lastIndexOf('[');
                var end = s.lastIndexOf(']');
                return types_1.IntData.create(s.substr(start + 1, end - start - 1));
            });
            update_1.updateIncome(incomeIds, undefined, undefined, undefined, undefined, types_1.repeat(statementId, incomeIds.length), sheetId);
        }
        if (expenses) {
            var expenseIds = expenses.map(function (s) {
                var start = s.lastIndexOf('[');
                var end = s.lastIndexOf(']');
                return types_1.IntData.create(s.substr(start + 1, end - start - 1));
            });
            update_1.updateExpense(expenseIds, undefined, undefined, undefined, undefined, undefined, types_1.repeat(statementId, expenseIds.length), sheetId);
        }
    }
}
exports.transferFunds = transferFunds;
function updateContactSettings(name, email, phone, carrier, notifyPoll, sendReceipt, sheetId) {
    var memberData = new types_1.StringData(name.toLowerCase());
    var memberId = get_1.getMemberIds([memberData], sheetId);
    var emailData;
    if (email) {
        emailData = new types_1.StringData(email);
    }
    else if (phone && carrier) {
        phone = phone.replace('-', '').replace('-', '');
        var carrierSuffix = types_1.CARRIERS[carrier];
        if (carrierSuffix === undefined)
            throw types_1.ErrorType.AssertionError;
        emailData = new types_1.StringData(phone.concat(carrierSuffix));
    }
    update_1.updateMember(memberId, undefined, undefined, undefined, emailData ? [emailData] : undefined, undefined, undefined, undefined, undefined, notifyPoll ? [yesnoToBool(notifyPoll)] : undefined, sendReceipt ? [yesnoToBool(sendReceipt)] : undefined, sheetId);
}
exports.updateContactSettings = updateContactSettings;
function updateMemberStatus(memberNames, performingRes, activeRes, officerRes, sheetId) {
    var memberData = memberNames.map(function (name) { return new types_1.StringData(name.toLowerCase()); });
    var memberId = get_1.getMemberIds(memberData, sheetId);
    update_1.updateMember(memberId, undefined, undefined, undefined, undefined, performingRes ? types_1.repeat(yesnoToBool(performingRes), memberId.length) : undefined, activeRes ? types_1.repeat(yesnoToBool(activeRes), memberId.length) : undefined, officerRes ? types_1.repeat(yesnoToBool(officerRes), memberId.length) : undefined, undefined, undefined, undefined, sheetId);
}
exports.updateMemberStatus = updateMemberStatus;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ae_1 = __webpack_require__(5);
var ai_1 = __webpack_require__(6);
var ami_1 = __webpack_require__(7);
var cd_1 = __webpack_require__(8);
var ct_1 = __webpack_require__(9);
var nq_1 = __webpack_require__(10);
var rmi_1 = __webpack_require__(11);
var ta_1 = __webpack_require__(12);
var tf_1 = __webpack_require__(13);
var ucs_1 = __webpack_require__(14);
var ums_1 = __webpack_require__(15);
var get_1 = __webpack_require__(2);
var types_1 = __webpack_require__(0);
var disable_1 = __webpack_require__(4);
function refreshAllForms() {
    refreshAddExpense();
    refreshAddIncome();
    refreshAddMemberIou();
    refreshCollectDues();
    refreshConfirmTransfer();
    refreshNextQuarter();
    refreshResolveMemberIou();
    refreshTakeAttendance();
    refreshTransferFunds();
    refreshUpdateContactSettings();
    refreshUpdateMemberStatus();
}
exports.refreshAllForms = refreshAllForms;
function refreshAddExpense() {
    var payTypes = get_1.getPaymentTypes().map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    });
    var form = FormApp.openById(ae_1.ID);
    form.addTextItem()
        .setTitle('Amount')
        .setValidation(FormApp.createTextValidation()
        .requireNumber()
        .build())
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('Description')
        .setRequired(true);
    form.addTextItem()
        .setTitle('Recipient')
        .setRequired(true);
    if (payTypes.length === 0) {
        form.addTextItem()
            .setTitle('Payment Type')
            .setRequired(true);
    }
    else {
        form.addMultipleChoiceItem()
            .setTitle('Payment Type')
            .showOtherOption(true)
            .setRequired(true)
            .setChoiceValues(payTypes);
    }
    disable_1.enableForm(types_1.GeneratedForm.ADD_EXPENSE);
}
exports.refreshAddExpense = refreshAddExpense;
function refreshAddIncome() {
    var payTypes = get_1.getPaymentTypes().map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    });
    var form = FormApp.openById(ai_1.ID);
    form.addTextItem()
        .setTitle('Amount')
        .setValidation(FormApp.createTextValidation()
        .requireNumber()
        .build())
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('Description')
        .setRequired(true);
    if (payTypes.length === 0) {
        form.addTextItem()
            .setTitle('Payment Type')
            .setRequired(true);
    }
    else {
        form.addMultipleChoiceItem()
            .setTitle('Payment Type')
            .showOtherOption(true)
            .setRequired(true)
            .setChoiceValues(payTypes);
    }
    disable_1.enableForm(types_1.GeneratedForm.ADD_INCOME);
}
exports.refreshAddIncome = refreshAddIncome;
function refreshAddMemberIou() {
    var memberNames = get_1.getMembers()
        .filter(function (entry) { return entry.active && entry.active.getValue(); })
        .map(function (entry) {
        if (!entry.name || !entry.amountOwed)
            throw types_1.ErrorType.AssertionError;
        var amount = types_1.centsToString(entry.amountOwed);
        return types_1.capitalizeString(entry.name.getValue()) + ': ' + amount;
    })
        .sort();
    var form = FormApp.openById(ami_1.ID);
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No members found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Member')
            .setRequired(true)
            .setChoiceValues(memberNames);
    }
    form.addTextItem()
        .setTitle('Amount')
        .setValidation(FormApp.createTextValidation()
        .requireNumber()
        .build())
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('Description')
        .setRequired(true);
    disable_1.enableForm(types_1.GeneratedForm.ADD_MEMBER_IOU);
}
exports.refreshAddMemberIou = refreshAddMemberIou;
function refreshCollectDues() {
    var clubInfo = get_1.getClubInfo();
    var memberFee = types_1.centsToString(clubInfo.memberFee);
    var officerFee = types_1.centsToString(clubInfo.officerFee);
    var memberNames = [];
    get_1.getMembers().forEach(function (entry) {
        if (!entry.name || !entry.active || !entry.currentDuesPaid || !entry.officer)
            throw types_1.ErrorType.AssertionError;
        if (entry.active.getValue() && !entry.currentDuesPaid.getValue()) {
            var fee = entry.officer.getValue() ? officerFee : memberFee;
            memberNames.push(types_1.capitalizeString(entry.name.getValue()) + ': ' + fee);
        }
    });
    memberNames.sort();
    var payTypes = get_1.getPaymentTypes().map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    });
    var form = FormApp.openById(cd_1.ID);
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No active members found that haven\'t paid dues')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Member')
            .setRequired(true)
            .setChoiceValues(memberNames);
    }
    if (payTypes.length === 0) {
        form.addTextItem()
            .setTitle('Payment Type')
            .setRequired(true);
    }
    else {
        form.addMultipleChoiceItem()
            .setTitle('Payment Type')
            .showOtherOption(true)
            .setRequired(true)
            .setChoiceValues(payTypes);
    }
    disable_1.enableForm(types_1.GeneratedForm.COLLECT_DUES);
}
exports.refreshCollectDues = refreshCollectDues;
function refreshConfirmTransfer() {
    var statementDetails = {};
    get_1.getIncomes().forEach(function (entry) {
        if (!entry.amount || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        var curDetails = statementDetails[entry.statementId.getValue()];
        if (!curDetails) {
            curDetails = {
                payType: entry.paymentTypeId.getValue(),
                amount: 0
            };
            statementDetails[entry.statementId.getValue()] = curDetails;
        }
        curDetails.amount += entry.amount.getValue();
    });
    get_1.getExpenses().forEach(function (entry) {
        if (!entry.amount || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        var curDetails = statementDetails[entry.statementId.getValue()];
        if (!curDetails) {
            curDetails = {
                payType: entry.paymentTypeId.getValue(),
                amount: 0
            };
            statementDetails[entry.statementId.getValue()] = curDetails;
        }
        curDetails.amount -= entry.amount.getValue();
    });
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var transfers = [];
    get_1.getStatements().sort(types_1.compareByDateDesc).forEach(function (entry) {
        if (!entry.id || !entry.date || !entry.confirmed)
            throw types_1.ErrorType.AssertionError;
        if (!entry.confirmed.getValue()) {
            var curDetails = statementDetails[entry.id.getValue()];
            if (!curDetails)
                throw types_1.ErrorType.AssertionError;
            var payType = idToPayType[curDetails.payType];
            if (payType === undefined)
                throw types_1.ErrorType.AssertionError;
            transfers.push(entry.date.toDateString() +
                ', ' + types_1.centsToString(new types_1.IntData(curDetails.amount)) +
                ' ' + types_1.capitalizeString(payType) +
                ' [' + entry.id.toString() + ']');
        }
    });
    var form = FormApp.openById(ct_1.ID);
    if (transfers.length === 0) {
        form.addCheckboxItem()
            .setTitle('No unconfirmed statements found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Transfer')
            .setRequired(true)
            .setChoiceValues(transfers);
    }
    disable_1.enableForm(types_1.GeneratedForm.CONFIRM_TRANSFER);
}
exports.refreshConfirmTransfer = refreshConfirmTransfer;
function refreshNextQuarter() {
    var clubInfo = get_1.getClubInfo();
    var form = FormApp.openById(nq_1.ID);
    form.addCheckboxItem()
        .setTitle('Confirmation')
        .setRequired(true)
        .setChoiceValues(['Is it ' + clubInfo.currentQuarterId.next().toDateString() + '?']);
    disable_1.enableForm(types_1.GeneratedForm.NEXT_QUARTER);
}
exports.refreshNextQuarter = refreshNextQuarter;
function refreshResolveMemberIou() {
    var memberNames = get_1.getMembers()
        .filter(function (entry) { return entry.active && entry.active.getValue(); })
        .map(function (entry) {
        if (!entry.name || !entry.amountOwed)
            throw types_1.ErrorType.AssertionError;
        var amount = types_1.centsToString(entry.amountOwed);
        return types_1.capitalizeString(entry.name.getValue()) + ': ' + amount;
    })
        .sort();
    var payTypes = get_1.getPaymentTypes().map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    });
    var form = FormApp.openById(rmi_1.ID);
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No members found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Member')
            .setRequired(true)
            .setChoiceValues(memberNames);
    }
    form.addTextItem()
        .setTitle('Amount')
        .setValidation(FormApp.createTextValidation()
        .requireNumber()
        .build())
        .setRequired(true);
    form.addParagraphTextItem()
        .setTitle('Description')
        .setRequired(true);
    if (payTypes.length === 0) {
        form.addTextItem()
            .setTitle('Payment Type')
            .setRequired(true);
    }
    else {
        form.addMultipleChoiceItem()
            .setTitle('Payment Type')
            .showOtherOption(true)
            .setRequired(true)
            .setChoiceValues(payTypes);
    }
    disable_1.enableForm(types_1.GeneratedForm.RESOLVE_MEMBER_IOU);
}
exports.refreshResolveMemberIou = refreshResolveMemberIou;
function refreshTakeAttendance() {
    var memberNames = get_1.getMembers()
        .filter(function (entry) {
        if (!entry.active)
            throw types_1.ErrorType.AssertionError;
        return entry.active.getValue();
    })
        .sort(function (a, b) {
        if (!a.dateJoined || !a.name || !a.active ||
            !b.dateJoined || !b.name || !b.active) {
            throw types_1.ErrorType.AssertionError;
        }
        var aYear = a.dateJoined.getValue().getFullYear();
        var bYear = b.dateJoined.getValue().getFullYear();
        if (aYear !== bYear) {
            return aYear - bYear;
        }
        else {
            return a.name.getValue().localeCompare(b.name.getValue());
        }
    })
        .map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    });
    var form = FormApp.openById(ta_1.ID);
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No members found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-']);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Member')
            .setChoiceValues(memberNames);
    }
    form.addParagraphTextItem()
        .setTitle('New Members')
        .setHelpText('Separate each name with a new line');
    disable_1.enableForm(types_1.GeneratedForm.TAKE_ATTENDANCE);
}
exports.refreshTakeAttendance = refreshTakeAttendance;
function refreshTransferFunds() {
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var incomes = [];
    get_1.getIncomes().sort(types_1.compareByDateDesc).forEach(function (entry) {
        if (!entry.id || !entry.amount || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        if (entry.statementId.getValue() === -1) {
            var payType = idToPayType[entry.paymentTypeId.getValue()];
            if (payType === undefined)
                throw types_1.ErrorType.AssertionError;
            incomes.push(types_1.centsToString(entry.amount) +
                ' ' + types_1.capitalizeString(payType) +
                ' [' + entry.id.toString() + ']');
        }
    });
    var expenses = [];
    get_1.getExpenses().sort(types_1.compareByDateDesc).forEach(function (entry) {
        if (!entry.id || !entry.amount || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        if (entry.statementId.getValue() === -1) {
            var payType = idToPayType[entry.paymentTypeId.getValue()];
            if (payType === undefined)
                throw types_1.ErrorType.AssertionError;
            expenses.push(types_1.centsToString(entry.amount) +
                ' ' + types_1.capitalizeString(payType) +
                ' [' + entry.id.toString() + ']');
        }
    });
    var form = FormApp.openById(tf_1.ID);
    if (incomes.length === 0) {
        form.addCheckboxItem()
            .setTitle('No incomes left to transfer')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-']);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Income')
            .setChoiceValues(incomes);
    }
    if (expenses.length === 0) {
        form.addCheckboxItem()
            .setTitle('No expenses left to transfer')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-']);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Expense')
            .setChoiceValues(expenses);
    }
    disable_1.enableForm(types_1.GeneratedForm.TRANSFER_FUNDS);
}
exports.refreshTransferFunds = refreshTransferFunds;
function refreshUpdateContactSettings() {
    var memberNames = [];
    get_1.getMembers().forEach(function (entry) {
        if (!entry.name || !entry.active)
            throw types_1.ErrorType.AssertionError;
        if (entry.active.getValue()) {
            memberNames.push(types_1.capitalizeString(entry.name.getValue()));
        }
    });
    memberNames.sort();
    var carriers = Object.keys(types_1.CARRIERS);
    var form = FormApp.openById(ucs_1.ID);
    form.setDescription('Please only choose phone OR email, only one will be recorded.');
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No active members found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addMultipleChoiceItem()
            .setTitle('Name')
            .setRequired(true)
            .setChoiceValues(memberNames);
    }
    form.addTextItem()
        .setTitle('Email');
    if (carriers.length > 0) {
        form.addTextItem()
            .setTitle('Phone Number')
            .setHelpText('Using the form \'XXX-XXX-XXXX\'')
            .setValidation(FormApp.createTextValidation()
            .requireTextMatchesPattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')
            .build());
        form.addMultipleChoiceItem()
            .setTitle('Phone Carrier')
            .setChoiceValues(carriers);
    }
    form.addMultipleChoiceItem()
        .setTitle('Recieve notification when new poll is created?')
        .setChoiceValues(['Yes', 'No']);
    form.addMultipleChoiceItem()
        .setTitle('Recieve receipts after paying dues?')
        .setChoiceValues(['Yes', 'No']);
    disable_1.enableForm(types_1.GeneratedForm.UPDATE_CONTACT_SETTINGS);
}
exports.refreshUpdateContactSettings = refreshUpdateContactSettings;
function refreshUpdateMemberStatus() {
    var memberNames = get_1.getMembers()
        .filter(function (entry) { return entry.active && entry.active.getValue(); })
        .map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    })
        .sort();
    var form = FormApp.openById(ums_1.ID);
    if (memberNames.length === 0) {
        form.addCheckboxItem()
            .setTitle('No members found')
            .setValidation(FormApp.createCheckboxValidation()
            .requireSelectAtMost(0)
            .build())
            .setChoiceValues(['-'])
            .setRequired(true);
    }
    else {
        form.addCheckboxItem()
            .setTitle('Member')
            .setRequired(true)
            .setChoiceValues(memberNames);
    }
    form.addMultipleChoiceItem()
        .setTitle('Performing?')
        .setChoiceValues(['Yes', 'No']);
    form.addMultipleChoiceItem()
        .setTitle('Active?')
        .setChoiceValues(['Yes', 'No']);
    form.addMultipleChoiceItem()
        .setTitle('Officer?')
        .setChoiceValues(['Yes', 'No']);
    disable_1.enableForm(types_1.GeneratedForm.UPDATE_MEMBER_STATUS);
}
exports.refreshUpdateMemberStatus = refreshUpdateMemberStatus;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var viewsId_1 = __webpack_require__(16);
var tableOps_1 = __webpack_require__(1);
var get_1 = __webpack_require__(2);
var types_1 = __webpack_require__(0);
function refreshAllViews() {
    refreshAccountInfo();
    refreshMembers();
    refreshIncomes();
    refreshExpenses();
    refreshAllTransactions();
    refreshStatements();
}
exports.refreshAllViews = refreshAllViews;
function refreshAccountInfo() {
    var curQuarter = get_1.getClubInfo().currentQuarterId;
    var unconfirmedList = [];
    get_1.getStatements().forEach(function (entry) {
        if (!entry.id || !entry.confirmed)
            throw types_1.ErrorType.AssertionError;
        if (!entry.confirmed.getValue())
            unconfirmedList.push(entry.id.getValue());
    });
    var venmoId;
    try {
        venmoId = get_1.getPaymentTypeIds([new types_1.StringData('venmo')])[0].getValue();
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            venmoId = NaN;
        }
        else {
            throw e;
        }
    }
    var total = 0;
    var bank = 0;
    var venmo = 0;
    var onHand = 0;
    get_1.getIncomes().forEach(function (income) {
        if (!income.amount || !income.paymentTypeId || !income.statementId)
            throw types_1.ErrorType.AssertionError;
        total += income.amount.getValue();
        if (income.statementId.getValue() === -1) {
            if (income.paymentTypeId.getValue() === venmoId) {
                venmo += income.amount.getValue();
            }
            else {
                onHand += income.amount.getValue();
            }
        }
        else {
            if (unconfirmedList.indexOf(income.statementId.getValue()) === -1) {
                bank += income.amount.getValue();
            }
        }
    });
    get_1.getExpenses().forEach(function (expense) {
        if (!expense.amount || !expense.paymentTypeId || !expense.statementId)
            throw types_1.ErrorType.AssertionError;
        total -= expense.amount.getValue();
        if (expense.statementId.getValue() === -1) {
            if (expense.paymentTypeId.getValue() === venmoId) {
                venmo -= expense.amount.getValue();
            }
            else {
                onHand -= expense.amount.getValue();
            }
        }
        else {
            if (unconfirmedList.indexOf(expense.statementId.getValue()) === -1) {
                bank -= expense.amount.getValue();
            }
        }
    });
    var tableVals = [[
            curQuarter.toDateString(),
            (total / 100).toString(),
            (bank / 100).toString(),
            (venmo / 100).toString(),
            (onHand / 100).toString()
        ]];
    var tableFormats = [[
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.MONEY
        ]];
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('Account Info');
    tableOps_1.setData(sheet, tableVals, tableFormats);
}
exports.refreshAccountInfo = refreshAccountInfo;
function refreshMembers() {
    var clubInfo = get_1.getClubInfo();
    var memAttendance = {};
    var abcMembers = get_1.getMembers()
        .filter(function (member) { return member.active && member.active.getValue(); })
        .sort(function (a, b) {
        if (!a.dateJoined || !a.name || !a.active ||
            !b.dateJoined || !b.name || !b.active) {
            throw types_1.ErrorType.AssertionError;
        }
        if (a.active.getValue() !== b.active.getValue()) {
            if (a.active.getValue()) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            if (a.active.getValue()) {
                var aYear = a.dateJoined.getValue().getFullYear();
                var bYear = b.dateJoined.getValue().getFullYear();
                if (aYear !== bYear) {
                    return aYear - bYear;
                }
                else {
                    return a.name.getValue().localeCompare(b.name.getValue());
                }
            }
            else {
                return a.name.getValue().localeCompare(b.name.getValue());
            }
        }
    });
    get_1.getAttendances().forEach(function (entry) {
        if (!entry.date || !entry.member_ids || !entry.quarter_id)
            throw types_1.ErrorType.AssertionError;
        var curDate = entry.date.getValue();
        var dateNum = curDate.getFullYear() * 1000 +
            curDate.getMonth() * 50 +
            curDate.getDate();
        if (entry.quarter_id.getValue() === clubInfo.currentQuarterId.getValue()) {
            entry.member_ids.getValue().forEach(function (memberId) {
                var curSet = memAttendance[memberId.getValue()];
                if (!curSet) {
                    curSet = new types_1.UniqueList();
                    memAttendance[memberId.getValue()] = curSet;
                }
                curSet.add(dateNum);
            });
        }
    });
    var tableVals = [];
    var tableFormats = [];
    var tableColors = [];
    var breakLineNums = [];
    var prevYear = NaN;
    abcMembers.forEach(function (member, i) {
        if (!member.id ||
            !member.name ||
            !member.dateJoined ||
            !member.amountOwed ||
            !member.currentDuesPaid ||
            !member.active)
            throw types_1.ErrorType.AssertionError;
        var attnsSet = memAttendance[member.id.getValue()];
        var numAttns = attnsSet ? attnsSet.size() : 0;
        tableVals.push([
            types_1.capitalizeString(member.name.toString()),
            member.dateJoined.toDateString(),
            (member.amountOwed.getValue() / 100).toString(),
            member.currentDuesPaid.getValue() ? 'Yes' : 'No',
            numAttns.toString()
        ]);
        tableFormats.push([
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.DATE,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.INTEGER
        ]);
        var defaultColor = member.active.getValue() ? types_1.Color.WHITE : types_1.Color.LIGHT_GRAY;
        var duesOwed = !member.currentDuesPaid.getValue() && numAttns >= clubInfo.daysUntilFeeRequired.getValue();
        tableColors.push([
            defaultColor,
            defaultColor,
            member.amountOwed.getValue() !== 0 ? types_1.Color.LIGHT_RED : defaultColor,
            duesOwed ? types_1.Color.PALE_RED : defaultColor,
            duesOwed ? types_1.Color.PALE_RED : defaultColor
        ]);
        if (member.active.getValue()) {
            var curYear = member.dateJoined.getValue().getFullYear();
            if (curYear !== prevYear) {
                if (!isNaN(prevYear)) {
                    breakLineNums.push(i);
                }
                prevYear = curYear;
            }
        }
        else {
            if (!isNaN(prevYear)) {
                breakLineNums.push(i);
                prevYear = NaN;
            }
        }
    });
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('Members');
    tableOps_1.setData(sheet, tableVals, tableFormats, tableColors, breakLineNums);
}
exports.refreshMembers = refreshMembers;
function refreshIncomes() {
    var incomes = get_1.getIncomes().sort(types_1.compareByDateDesc);
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var backColors = [types_1.Color.PALE_BLUE, types_1.Color.PALE_GREEN];
    var tableVals = [];
    var tableFormats = [];
    var tableColors = [];
    incomes.forEach(function (income, i) {
        if (!income.date ||
            !income.amount ||
            !income.description ||
            !income.paymentTypeId ||
            !income.statementId)
            throw types_1.ErrorType.AssertionError;
        var payType = idToPayType[income.paymentTypeId.getValue()];
        if (payType === undefined)
            throw types_1.ErrorType.AssertionError;
        var inAccount = income.statementId.getValue() !== -1;
        tableVals.push([
            income.date.toDateString(),
            (income.amount.getValue() / 100).toString(),
            income.description.getValue(),
            payType,
            inAccount ? 'Yes' : 'No'
        ]);
        tableFormats.push([
            types_1.NumberFormat.DATE,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT
        ]);
        var curColor = backColors[i % backColors.length];
        tableColors.push([
            curColor,
            curColor,
            curColor,
            curColor,
            inAccount ? curColor : types_1.Color.LIGHT_RED
        ]);
    });
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('Incomes');
    tableOps_1.setData(sheet, tableVals, tableFormats, tableColors);
}
exports.refreshIncomes = refreshIncomes;
function refreshExpenses() {
    var expenses = get_1.getExpenses().sort(types_1.compareByDateDesc);
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var idToRecipient = {};
    get_1.getRecipients().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToRecipient[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var backColors = [types_1.Color.PALE_BLUE, types_1.Color.PALE_GREEN];
    var tableVals = [];
    var tableFormats = [];
    var tableColors = [];
    expenses.forEach(function (expense, i) {
        if (!expense.date ||
            !expense.amount ||
            !expense.description ||
            !expense.paymentTypeId ||
            !expense.recipientId ||
            !expense.statementId)
            throw types_1.ErrorType.AssertionError;
        var payType = idToPayType[expense.paymentTypeId.getValue()];
        var recipient = idToRecipient[expense.recipientId.getValue()];
        if (payType === undefined || recipient === undefined)
            throw types_1.ErrorType.AssertionError;
        var inAccount = expense.statementId.getValue() !== -1;
        tableVals.push([
            expense.date.toDateString(),
            (expense.amount.getValue() / -100).toString(),
            expense.description.getValue(),
            recipient,
            payType,
            inAccount ? 'Yes' : 'No'
        ]);
        tableFormats.push([
            types_1.NumberFormat.DATE,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT
        ]);
        var curColor = backColors[i % backColors.length];
        tableColors.push([
            curColor,
            curColor,
            curColor,
            curColor,
            curColor,
            inAccount ? curColor : types_1.Color.LIGHT_RED
        ]);
    });
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('Expenses');
    tableOps_1.setData(sheet, tableVals, tableFormats, tableColors);
}
exports.refreshExpenses = refreshExpenses;
function refreshAllTransactions() {
    var incomes = get_1.getIncomes().sort(types_1.compareByDateDesc);
    var expenses = get_1.getExpenses().sort(types_1.compareByDateDesc);
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var idToRecipient = {};
    get_1.getRecipients().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToRecipient[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var backColors = [types_1.Color.PALE_BLUE, types_1.Color.PALE_GREEN];
    var tableVals = [];
    var tableFormats = [];
    var tableColors = [];
    var inc_i = 0;
    var exp_i = 0;
    while (inc_i < incomes.length || exp_i < expenses.length) {
        var inAccount = void 0;
        var curColor = backColors[(exp_i + inc_i) % backColors.length];
        if (inc_i < incomes.length && exp_i < expenses.length) {
            var incDate = incomes[inc_i].date;
            var expDate = expenses[exp_i].date;
            if (!incDate)
                throw types_1.ErrorType.AssertionError;
            if (!expDate)
                throw types_1.ErrorType.AssertionError;
            if (incDate.getValue() > expDate.getValue()) {
                var curDate = incomes[inc_i].date;
                var curAmount = incomes[inc_i].amount;
                var curDesc = incomes[inc_i].description;
                var curPayId = incomes[inc_i].paymentTypeId;
                var curStateId = incomes[inc_i].statementId;
                if (!curDate ||
                    !curAmount ||
                    !curDesc ||
                    !curPayId ||
                    !curStateId)
                    throw types_1.ErrorType.AssertionError;
                var payType = idToPayType[curPayId.getValue()];
                if (payType === undefined)
                    throw types_1.ErrorType.AssertionError;
                inAccount = curStateId.getValue() !== -1;
                tableVals.push([
                    curDate.toDateString(),
                    (curAmount.getValue() / 100).toString(),
                    curDesc.getValue(),
                    '-',
                    payType,
                    inAccount ? 'Yes' : 'No'
                ]);
                ++inc_i;
            }
            else {
                var curDate = expenses[exp_i].date;
                var curAmount = expenses[exp_i].amount;
                var curDesc = expenses[exp_i].description;
                var curPayId = expenses[exp_i].paymentTypeId;
                var curRecip = expenses[exp_i].recipientId;
                var curStateId = expenses[exp_i].statementId;
                if (!curDate ||
                    !curAmount ||
                    !curDesc ||
                    !curPayId ||
                    !curRecip ||
                    !curStateId)
                    throw types_1.ErrorType.AssertionError;
                var payType = idToPayType[curPayId.getValue()];
                var recipient = idToRecipient[curRecip.getValue()];
                if (payType === undefined || recipient === undefined)
                    throw types_1.ErrorType.AssertionError;
                inAccount = curStateId.getValue() !== -1;
                tableVals.push([
                    curDate.toDateString(),
                    (curAmount.getValue() / -100).toString(),
                    curDesc.getValue(),
                    recipient,
                    payType,
                    inAccount ? 'Yes' : 'No'
                ]);
                ++exp_i;
            }
        }
        else if (inc_i < incomes.length) {
            var curDate = incomes[inc_i].date;
            var curAmount = incomes[inc_i].amount;
            var curDesc = incomes[inc_i].description;
            var curPayId = incomes[inc_i].paymentTypeId;
            var curStateId = incomes[inc_i].statementId;
            if (!curDate ||
                !curAmount ||
                !curDesc ||
                !curPayId ||
                !curStateId)
                throw types_1.ErrorType.AssertionError;
            var payType = idToPayType[curPayId.getValue()];
            if (payType === undefined)
                throw types_1.ErrorType.AssertionError;
            inAccount = curStateId.getValue() !== -1;
            tableVals.push([
                curDate.toDateString(),
                (curAmount.getValue() / 100).toString(),
                curDesc.getValue(),
                '-',
                payType,
                inAccount ? 'Yes' : 'No'
            ]);
            ++inc_i;
        }
        else {
            var curDate = expenses[exp_i].date;
            var curAmount = expenses[exp_i].amount;
            var curDesc = expenses[exp_i].description;
            var curPayId = expenses[exp_i].paymentTypeId;
            var curRecip = expenses[exp_i].recipientId;
            var curStateId = expenses[exp_i].statementId;
            if (!curDate ||
                !curAmount ||
                !curDesc ||
                !curPayId ||
                !curRecip ||
                !curStateId)
                throw types_1.ErrorType.AssertionError;
            var payType = idToPayType[curPayId.getValue()];
            var recipient = idToRecipient[curRecip.getValue()];
            if (payType === undefined || recipient === undefined)
                throw types_1.ErrorType.AssertionError;
            inAccount = curStateId.getValue() !== -1;
            tableVals.push([
                curDate.toDateString(),
                (curAmount.getValue() / -100).toString(),
                curDesc.getValue(),
                recipient,
                payType,
                inAccount ? 'Yes' : 'No'
            ]);
            ++exp_i;
        }
        tableFormats.push([
            types_1.NumberFormat.DATE,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT
        ]);
        tableColors.push([
            curColor,
            curColor,
            curColor,
            curColor,
            curColor,
            inAccount ? curColor : types_1.Color.LIGHT_RED
        ]);
    }
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('All Transactions');
    tableOps_1.setData(sheet, tableVals, tableFormats, tableColors);
}
exports.refreshAllTransactions = refreshAllTransactions;
function refreshStatements() {
    var statements = get_1.getStatements().sort(types_1.compareByDateDesc);
    var statementDetails = {};
    get_1.getIncomes().forEach(function (income) {
        if (!income.amount || !income.paymentTypeId || !income.statementId)
            throw types_1.ErrorType.AssertionError;
        if (income.statementId.getValue() !== -1) {
            var curDetails = statementDetails[income.statementId.getValue()];
            if (!curDetails) {
                curDetails = {
                    amount: 0,
                    payType: income.paymentTypeId.getValue()
                };
                statementDetails[income.statementId.getValue()] = curDetails;
            }
            curDetails.amount += income.amount.getValue();
        }
    });
    get_1.getExpenses().forEach(function (expense) {
        if (!expense.amount || !expense.paymentTypeId || !expense.statementId)
            throw types_1.ErrorType.AssertionError;
        if (expense.statementId.getValue() !== -1) {
            var curDetails = statementDetails[expense.statementId.getValue()];
            if (!curDetails) {
                curDetails = {
                    amount: 0,
                    payType: expense.paymentTypeId.getValue()
                };
                statementDetails[expense.statementId.getValue()] = curDetails;
            }
            curDetails.amount -= expense.amount.getValue();
        }
    });
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var backColors = [types_1.Color.PALE_BLUE, types_1.Color.PALE_GREEN];
    var tableVals = [];
    var tableFormats = [];
    var tableColors = [];
    statements.forEach(function (statement, i) {
        if (!statement.id ||
            !statement.date ||
            !statement.confirmed)
            throw types_1.ErrorType.AssertionError;
        var curDetails = statementDetails[statement.id.getValue()];
        if (!curDetails) {
            curDetails = {
                amount: 0,
                payType: NaN
            };
        }
        var payType = idToPayType[curDetails.payType];
        if (payType === undefined)
            payType = '';
        tableVals.push([
            statement.date.toDateString(),
            (curDetails.amount / 100).toString(),
            payType,
            statement.confirmed.getValue() ? 'Yes' : 'No'
        ]);
        tableFormats.push([
            types_1.NumberFormat.DATE,
            types_1.NumberFormat.MONEY,
            types_1.NumberFormat.TEXT,
            types_1.NumberFormat.TEXT,
        ]);
        var curColor = backColors[i % backColors.length];
        tableColors.push([
            curColor,
            curColor,
            curColor,
            statement.confirmed.getValue() ? curColor : types_1.Color.LIGHT_RED
        ]);
    });
    var sheet = SpreadsheetApp.openById(viewsId_1.ID).getSheetByName('Statements');
    tableOps_1.setData(sheet, tableVals, tableFormats, tableColors);
}
exports.refreshStatements = refreshStatements;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var email_1 = __webpack_require__(19);
var viewsId_1 = __webpack_require__(16);
var append_1 = __webpack_require__(17);
var get_1 = __webpack_require__(2);
var remove_1 = __webpack_require__(21);
var update_1 = __webpack_require__(18);
var types_1 = __webpack_require__(0);
function menuAddMember(name, dateJoined, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var nameData = new types_1.StringData(name.toLowerCase());
    var date = types_1.DateData.create(dateJoined);
    try {
        get_1.getMemberIds([nameData], sheetId);
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast('Name is already in use', 'Adding Failed', 5);
        }
        else {
            throw 'Name is already in use';
        }
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            append_1.appendMember([nameData], [date], [new types_1.IntData(0)], [new types_1.StringData('')], [types_1.BooleanData.FALSE], [types_1.BooleanData.FALSE], [types_1.BooleanData.FALSE], [types_1.BooleanData.FALSE], [types_1.BooleanData.FALSE], [types_1.BooleanData.FALSE], sheetId);
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast("Added Member", 'Success', 5);
            }
            types_1.RefreshLogger.refresh();
        }
        else {
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast('Check error log for details', 'Adding Failed', 5);
            }
            throw e;
        }
    }
}
exports.menuAddMember = menuAddMember;
function menuAddAttendance(date, members, quarter, year, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        var dateAsData = types_1.DateData.create(date);
        var memberIds = void 0;
        if (members === '') {
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast("No members listed; attendance not added", 'No Action Taken', 5);
            }
            return;
        }
        else {
            memberIds = new types_1.IntListData(members
                .split(',')
                .map(function (s) { return new types_1.IntData(parseInt(s)); })
                .sort(function (a, b) { return a.getValue() - b.getValue(); }));
        }
        var quarterVal = void 0;
        switch (quarter) {
            case 'Winter':
                quarterVal = types_1.Quarter.WINTER;
                break;
            case 'Spring':
                quarterVal = types_1.Quarter.SPRING;
                break;
            case 'Summer':
                quarterVal = types_1.Quarter.SUMMER;
                break;
            case 'Fall':
                quarterVal = types_1.Quarter.FALL;
                break;
            default:
                throw types_1.ErrorType.IllegalArgumentError;
        }
        var quarterId = new types_1.QuarterData(quarterVal, types_1.IntData.create(year));
        append_1.appendAttendance([dateAsData], [memberIds], [quarterId], sheetId);
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new attendance record", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddAttendance = menuAddAttendance;
function menuAddIncome(date, amount, description, payType, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        var payId = get_1.getPaymentTypeIds([new types_1.StringData(payType.toLowerCase())], sheetId)[0];
        var amountVal = parseFloat(amount);
        if (isNaN(amountVal))
            throw types_1.ErrorType.IllegalArgumentError;
        append_1.appendIncome([types_1.DateData.create(date)], [new types_1.IntData(Math.round(amountVal * 100))], [types_1.StringData.create(description)], [payId], [new types_1.IntData(-1)], sheetId);
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new income", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddIncome = menuAddIncome;
function menuAddExpense(date, amount, description, recipient, payType, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        var payId = get_1.getPaymentTypeIds([new types_1.StringData(payType.toLowerCase())], sheetId)[0];
        var amountVal = parseFloat(amount);
        if (isNaN(amountVal))
            throw types_1.ErrorType.IllegalArgumentError;
        var recipientData = new types_1.StringData(recipient.toLowerCase());
        var recipientId = void 0;
        try {
            recipientId = get_1.getRecipientIds([recipientData], sheetId)[0];
        }
        catch (e) {
            if (e === types_1.ErrorType.NoMatchFoundError) {
                recipientId = append_1.appendRecipient([recipientData], sheetId)[0];
            }
            else {
                throw e;
            }
        }
        append_1.appendExpense([types_1.DateData.create(date)], [new types_1.IntData(Math.round(amountVal * 100))], [types_1.StringData.create(description)], [payId], [recipientId], [new types_1.IntData(-1)], sheetId);
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new expense", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddExpense = menuAddExpense;
function menuAddStatement(date, incomes, expenses, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        if (incomes.length === 0 && expenses.length === 0) {
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast("No incomes or expenses were specified", 'No Change', 5);
            }
            return;
        }
        var statementId = append_1.appendStatement([types_1.DateData.create(date)], [types_1.BooleanData.FALSE], sheetId)[0];
        if (incomes.length > 0) {
            var incomeIds = incomes.split('\n').map(types_1.IntData.create);
            update_1.updateIncome(incomeIds, undefined, undefined, undefined, undefined, types_1.repeat(statementId, incomeIds.length), sheetId);
        }
        if (expenses.length > 0) {
            var expenseIds = expenses.split('\n').map(types_1.IntData.create);
            update_1.updateExpense(expenseIds, undefined, undefined, undefined, undefined, undefined, types_1.repeat(statementId, expenseIds.length), sheetId);
        }
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new statement", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddStatement = menuAddStatement;
function menuAddPayType(name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        var nameData = types_1.StringData.create(name.toLowerCase());
        try {
            get_1.getPaymentTypeIds([nameData], sheetId);
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast("Payment type already exists", 'Failed', 5);
            }
            return;
        }
        catch (e) {
            if (e === types_1.ErrorType.NoMatchFoundError) {
                append_1.appendPaymentType([nameData], sheetId);
            }
            else {
                throw e;
            }
        }
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new payment type", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddPayType = menuAddPayType;
function menuAddRecipient(name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    try {
        var nameData = types_1.StringData.create(name.toLowerCase());
        try {
            get_1.getRecipientIds([nameData], sheetId);
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast("Recipient already exists", 'Failed', 5);
            }
            return;
        }
        catch (e) {
            if (e === types_1.ErrorType.NoMatchFoundError) {
                append_1.appendRecipient([nameData], sheetId);
            }
            else {
                throw e;
            }
        }
    }
    catch (e) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Check logs for details", 'Failed', 5);
        }
        throw e;
    }
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Added new recipient", 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.menuAddRecipient = menuAddRecipient;
function renameMember(oldName, newName, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var oldNameData = new types_1.StringData(oldName.toLowerCase());
    var newNameData = new types_1.StringData(newName.toLowerCase());
    var noMatch = false;
    try {
        get_1.getMemberIds([newNameData], sheetId);
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            noMatch = true;
        }
        else {
            throw e;
        }
    }
    if (!noMatch) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast('New name is already in use, try merging instead', 'Renaming Failed', 5);
        }
    }
    else {
        var id = get_1.getMemberIds([oldNameData], sheetId)[0];
        update_1.updateMember([id], [newNameData], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, sheetId);
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Renamed " + oldName + " to " + newName, 'Success', 5);
        }
    }
    types_1.RefreshLogger.refresh();
}
exports.renameMember = renameMember;
function renamePaymentType(oldName, newName, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var oldNameData = new types_1.StringData(oldName.toLowerCase());
    var newNameData = new types_1.StringData(newName.toLowerCase());
    var noMatch = false;
    try {
        get_1.getPaymentTypeIds([newNameData], sheetId);
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            noMatch = true;
        }
        else {
            throw e;
        }
    }
    if (!noMatch) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast('New name is already in use, try merging instead', 'Renaming Failed', 5);
        }
    }
    else {
        var id = get_1.getPaymentTypeIds([oldNameData], sheetId)[0];
        update_1.updatePaymentType([id], [newNameData], sheetId);
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Renamed " + oldName + " to " + newName, 'Success', 5);
        }
    }
    types_1.RefreshLogger.refresh();
}
exports.renamePaymentType = renamePaymentType;
function renameRecipient(oldName, newName, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var oldNameData = new types_1.StringData(oldName.toLowerCase());
    var newNameData = new types_1.StringData(newName.toLowerCase());
    var noMatch = false;
    try {
        get_1.getRecipientIds([newNameData], sheetId);
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            noMatch = true;
        }
        else {
            throw e;
        }
    }
    if (!noMatch) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast('New name is already in use, try merging instead', 'Renaming Failed', 5);
        }
    }
    else {
        var id = get_1.getRecipientIds([oldNameData], sheetId)[0];
        update_1.updateRecipient([id], [newNameData], sheetId);
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Renamed " + oldName + " to " + newName, 'Success', 5);
        }
    }
    types_1.RefreshLogger.refresh();
}
exports.renameRecipient = renameRecipient;
function mergeMember(aliases, name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var aliasList = aliases.toLowerCase().split('\n');
    var i = aliasList.indexOf(name.toLowerCase());
    if (i !== -1) {
        aliasList.splice(i, 1);
    }
    if (aliasList.length === 0 ||
        (aliasList.length === 1 && aliasList[0].length === 0)) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Either you selected no aliases or selected the same alias and name", 'No Action Taken', 5);
        }
        return;
    }
    var aliasIds = get_1.getMemberIds(aliasList.map(function (s) { return new types_1.StringData(s); }), sheetId).map(function (n) { return n.getValue(); });
    var newId = get_1.getMemberIds([new types_1.StringData(name.toLowerCase())], sheetId)[0];
    var updateData = {
        ids: [],
        memIds: []
    };
    get_1.getAttendances(sheetId).forEach(function (attendance) {
        if (!attendance.id || !attendance.member_ids)
            throw types_1.ErrorType.AssertionError;
        var curIds = attendance.member_ids.getValue().map(function (n) { return n.getValue(); });
        var prunedIds = curIds.filter(function (id) { return aliasIds.indexOf(id) === -1; });
        if (prunedIds.length < curIds.length) {
            if (prunedIds.indexOf(newId.getValue()) === -1) {
                prunedIds.push(newId.getValue());
                prunedIds.sort();
            }
            updateData.ids.push(attendance.id);
            updateData.memIds.push(new types_1.IntListData(prunedIds.map(function (id) { return new types_1.IntData(id); })));
        }
    });
    if (updateData.ids.length > 0) {
        update_1.updateAttendance(updateData.ids, undefined, updateData.memIds, undefined, sheetId);
    }
    remove_1.removeMember(aliasIds.map(function (n) { return new types_1.IntData(n); }), sheetId);
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Merged into " + name, 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.mergeMember = mergeMember;
function mergePaymentType(aliases, name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var aliasList = aliases.toLowerCase().split('\n');
    var i = aliasList.indexOf(name.toLowerCase());
    if (i !== -1) {
        aliasList.splice(i, 1);
    }
    if (aliasList.length === 0 ||
        (aliasList.length === 1 && aliasList[0].length === 0)) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Either you selected no aliases or selected the same alias and name", 'No Action Taken', 5);
        }
        return;
    }
    var aliasIds = get_1.getPaymentTypeIds(aliasList.map(function (s) { return new types_1.StringData(s); }), sheetId).map(function (n) { return n.getValue(); });
    var newId = get_1.getPaymentTypeIds([new types_1.StringData(name.toLowerCase())], sheetId)[0];
    var incomeIds = [];
    get_1.getIncomes(sheetId).forEach(function (income) {
        if (!income.id || !income.paymentTypeId)
            throw types_1.ErrorType.AssertionError;
        if (aliasIds.indexOf(income.paymentTypeId.getValue()) !== -1) {
            incomeIds.push(income.id);
        }
    });
    var expenseIds = [];
    get_1.getExpenses(sheetId).forEach(function (expense) {
        if (!expense.id || !expense.paymentTypeId)
            throw types_1.ErrorType.AssertionError;
        if (aliasIds.indexOf(expense.paymentTypeId.getValue()) !== -1) {
            expenseIds.push(expense.id);
        }
    });
    if (incomeIds.length > 0) {
        update_1.updateIncome(incomeIds, undefined, undefined, undefined, types_1.repeat(newId, incomeIds.length), undefined, sheetId);
    }
    if (expenseIds.length > 0) {
        update_1.updateExpense(expenseIds, undefined, undefined, undefined, types_1.repeat(newId, expenseIds.length), undefined, undefined, sheetId);
    }
    remove_1.removePaymentType(aliasIds.map(function (n) { return new types_1.IntData(n); }), sheetId);
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Merged into " + name, 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.mergePaymentType = mergePaymentType;
function mergeRecipient(aliases, name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var aliasList = aliases.toLowerCase().split('\n');
    var i = aliasList.indexOf(name.toLowerCase());
    if (i !== -1) {
        aliasList.splice(i, 1);
    }
    if (aliasList.length === 0 ||
        (aliasList.length === 1 && aliasList[0].length === 0)) {
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Either you selected no aliases or selected the same alias and name", 'No Action Taken', 5);
        }
        return;
    }
    var aliasIds = get_1.getRecipientIds(aliasList.map(function (s) { return new types_1.StringData(s); }), sheetId).map(function (n) { return n.getValue(); });
    var newId = get_1.getRecipientIds([new types_1.StringData(name.toLowerCase())], sheetId)[0];
    var expenseIds = [];
    get_1.getExpenses(sheetId).forEach(function (expense) {
        if (!expense.id || !expense.recipientId)
            throw types_1.ErrorType.AssertionError;
        if (aliasIds.indexOf(expense.recipientId.getValue()) !== -1) {
            expenseIds.push(expense.id);
        }
    });
    if (expenseIds.length > 0) {
        update_1.updateExpense(expenseIds, undefined, undefined, undefined, undefined, types_1.repeat(newId, expenseIds.length), undefined, sheetId);
    }
    remove_1.removeRecipient(aliasIds.map(function (n) { return new types_1.IntData(n); }), sheetId);
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast("Merged into " + name, 'Success', 5);
    }
    types_1.RefreshLogger.refresh();
}
exports.mergeRecipient = mergeRecipient;
function menuDeleteMember(name, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var attns = get_1.getAttendances(sheetId);
    var nameData = new types_1.StringData(name.toLowerCase());
    try {
        var id_1 = get_1.getMemberIds([nameData], sheetId)[0].getValue();
        var newAttnIds_1 = [];
        var newAttnMems_1 = [];
        attns.forEach(function (entry) {
            if (!entry.member_ids || !entry.id)
                throw types_1.ErrorType.AssertionError;
            var membersPresent = entry.member_ids.getValue().map(function (x) { return x.getValue(); });
            var curMatch = membersPresent.indexOf(id_1);
            var flag = false;
            while (curMatch !== -1) {
                flag = true;
                membersPresent.splice(curMatch, 1);
                curMatch = membersPresent.indexOf(id_1);
            }
            if (flag) {
                newAttnIds_1.push(entry.id);
                newAttnMems_1.push(new types_1.IntListData(membersPresent.map(function (n) { return new types_1.IntData(n); })));
            }
        });
        update_1.updateAttendance(newAttnIds_1, undefined, newAttnMems_1, undefined, sheetId);
        remove_1.removeMember([new types_1.IntData(id_1)], sheetId);
        if (toastMsg) {
            SpreadsheetApp.openById(viewsId_1.ID).toast("Deleted " + name, 'Success', 5);
        }
    }
    catch (e) {
        if (e === types_1.ErrorType.NoMatchFoundError) {
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast('Name not found', 'Deletion Failed', 5);
            }
        }
        else {
            if (toastMsg) {
                SpreadsheetApp.openById(viewsId_1.ID).toast('Check error log for details', 'Adding Failed', 5);
            }
            throw e;
        }
    }
    types_1.RefreshLogger.refresh();
}
exports.menuDeleteMember = menuDeleteMember;
function pollNotification(title, deadline, link, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    email_1.emailPollNotification(title, new Date(deadline), link, sheetId);
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast('Emails sent', 'Success', 5);
    }
}
exports.pollNotification = pollNotification;
function notifyMembers(memberNames, subject, body, sheetId, toastMsg) {
    if (toastMsg === undefined) {
        toastMsg = true;
    }
    var memberList = memberNames.toLowerCase().split('\n').map(function (name) { return new types_1.StringData(name); });
    email_1.emailMembers(memberList, subject, body, sheetId);
    if (toastMsg) {
        SpreadsheetApp.openById(viewsId_1.ID).toast('Emails sent', 'Success', 5);
    }
}
exports.notifyMembers = notifyMembers;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var actions_1 = __webpack_require__(22);
var append_1 = __webpack_require__(17);
var get_1 = __webpack_require__(2);
var remove_1 = __webpack_require__(21);
var update_1 = __webpack_require__(18);
var types_1 = __webpack_require__(0);
var handlers_1 = __webpack_require__(25);
var unitTester_1 = __webpack_require__(31);
function testAppendPartOne() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testAppendMember', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendMember([], [], [], [], [], [], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendMember([new types_1.StringData('joe schmo'), new types_1.StringData('asdf')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendMember([new types_1.StringData('joe schmo')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                tableVals.member.push([
                    '0',
                    'joe schmo',
                    '123456789',
                    '0',
                    'asdf@gmail.com',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendMember([new types_1.StringData('abc'), new types_1.StringData('xyz')], [new types_1.DateData(new Date(123)), new types_1.DateData(new Date(789))], [new types_1.IntData(100), new types_1.IntData(-55)], [new types_1.StringData('email@email.com'), new types_1.StringData('asdf@asdf.com')], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], id);
                tableVals.member.push([
                    '0',
                    'abc',
                    '123',
                    '100',
                    'email@email.com',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1'
                ]);
                tableVals.member.push([
                    '1',
                    'xyz',
                    '789',
                    '-55',
                    'asdf@asdf.com',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendMember([new types_1.StringData('joe schmo')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                tableVals.member.push([
                    '45',
                    'joe schmo',
                    '123456789',
                    '0',
                    'asdf@gmail.com',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendMember([new types_1.StringData('abc'), new types_1.StringData('xyz')], [new types_1.DateData(new Date(123)), new types_1.DateData(new Date(789))], [new types_1.IntData(100), new types_1.IntData(-55)], [new types_1.StringData('email@email.com'), new types_1.StringData('asdf@asdf.com')], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], id);
                tableVals.member.push([
                    '45',
                    'abc',
                    '123',
                    '100',
                    'email@email.com',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1'
                ]);
                tableVals.member.push([
                    '46',
                    'xyz',
                    '789',
                    '-55',
                    'asdf@asdf.com',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAppendIncome', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendIncome([], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendIncome([new types_1.DateData(new Date(123456789)), new types_1.DateData(new Date(123))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendIncome([new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                tableVals.income.push([
                    '0',
                    '123456789',
                    '444',
                    'test',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendIncome([new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.income.push([
                    '0',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0'
                ]);
                tableVals.income.push([
                    '1',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '77'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendIncome([new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                tableVals.income.push([
                    '373',
                    '123456789',
                    '444',
                    'test',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendIncome([new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.income.push([
                    '373',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0'
                ]);
                tableVals.income.push([
                    '374',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '77'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAppendExpense', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendExpense([], [], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendExpense([new types_1.DateData(new Date(123456789)), new types_1.DateData(new Date(123))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendExpense([new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                tableVals.expense.push([
                    '0',
                    '123456789',
                    '444',
                    'test',
                    '0',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendExpense([new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(21), new types_1.IntData(12)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.expense.push([
                    '0',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '21',
                    '0'
                ]);
                tableVals.expense.push([
                    '1',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '12',
                    '77'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendExpense([new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                tableVals.expense.push([
                    '161',
                    '123456789',
                    '444',
                    'test',
                    '0',
                    '0',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendExpense([new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(21), new types_1.IntData(12)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.expense.push([
                    '161',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '21',
                    '0'
                ]);
                tableVals.expense.push([
                    '162',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '12',
                    '77'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ])
    ]);
}
exports.testAppendPartOne = testAppendPartOne;
function testAppendPartTwo() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testAppendRecipient', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendRecipient([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendRecipient([new types_1.StringData('Recipient 1')], id);
                tableVals.recipient.push([
                    '0',
                    'Recipient 1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendRecipient([new types_1.StringData('costco'), new types_1.StringData('this is a recipient')], id);
                tableVals.recipient.push([
                    '0',
                    'costco'
                ]);
                tableVals.recipient.push([
                    '1',
                    'this is a recipient'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendRecipient([new types_1.StringData('Recipient 1')], id);
                tableVals.recipient.push([
                    '58',
                    'Recipient 1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendRecipient([new types_1.StringData('costco'), new types_1.StringData('this is a recipient')], id);
                tableVals.recipient.push([
                    '58',
                    'costco'
                ]);
                tableVals.recipient.push([
                    '59',
                    'this is a recipient'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAppendPaymentType', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendPaymentType([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendPaymentType([new types_1.StringData('Pay type 1')], id);
                tableVals.paymentType.push([
                    '0',
                    'Pay type 1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendPaymentType([new types_1.StringData('cash'), new types_1.StringData('asdfasdf')], id);
                tableVals.paymentType.push([
                    '0',
                    'cash'
                ]);
                tableVals.paymentType.push([
                    '1',
                    'asdfasdf'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendPaymentType([new types_1.StringData('Pay type 1')], id);
                tableVals.paymentType.push([
                    '7',
                    'Pay type 1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendPaymentType([new types_1.StringData('cash'), new types_1.StringData('asdfasdf')], id);
                tableVals.paymentType.push([
                    '7',
                    'cash'
                ]);
                tableVals.paymentType.push([
                    '8',
                    'asdfasdf'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAppendStatement', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendStatement([], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendStatement([new types_1.DateData(new Date(11111)), new types_1.DateData(new Date(123))], [types_1.BooleanData.TRUE], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendStatement([new types_1.DateData(new Date(11111))], [types_1.BooleanData.TRUE], id);
                tableVals.statement.push([
                    '0',
                    '11111',
                    '1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendStatement([new types_1.DateData(new Date(40)), new types_1.DateData(new Date(222222))], [types_1.BooleanData.TRUE, types_1.BooleanData.FALSE], id);
                tableVals.statement.push([
                    '0',
                    '40',
                    '1'
                ]);
                tableVals.statement.push([
                    '1',
                    '222222',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendStatement([new types_1.DateData(new Date(11111))], [types_1.BooleanData.TRUE], id);
                tableVals.statement.push([
                    '223',
                    '11111',
                    '1'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendStatement([new types_1.DateData(new Date(40)), new types_1.DateData(new Date(222222))], [types_1.BooleanData.TRUE, types_1.BooleanData.FALSE], id);
                tableVals.statement.push([
                    '223',
                    '40',
                    '1'
                ]);
                tableVals.statement.push([
                    '224',
                    '222222',
                    '0'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAppendAttendance', [
            new unitTester_1.UnitTest('appendZero', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendAttendance([], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    append_1.appendAttendance([new types_1.DateData(new Date(12321)), new types_1.DateData(new Date(123))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendAttendance([new types_1.DateData(new Date(12321))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                tableVals.attendance.push([
                    '0',
                    '12321',
                    '1,5',
                    '401'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                append_1.appendAttendance([new types_1.DateData(new Date(1)), new types_1.DateData(new Date(800800))], [new types_1.IntListData([]), new types_1.IntListData([new types_1.IntData(0), new types_1.IntData(7), new types_1.IntData(25)])], [new types_1.QuarterData(types_1.Quarter.FALL, new types_1.IntData(111)), new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(1))], id);
                tableVals.attendance.push([
                    '0',
                    '1',
                    '',
                    '447'
                ]);
                tableVals.attendance.push([
                    '1',
                    '800800',
                    '0,7,25',
                    '4'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendOneToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendAttendance([new types_1.DateData(new Date(12321))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                tableVals.attendance.push([
                    '50',
                    '12321',
                    '1,5',
                    '401'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('appendTwoToNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                append_1.appendAttendance([new types_1.DateData(new Date(1)), new types_1.DateData(new Date(800800))], [new types_1.IntListData([]), new types_1.IntListData([new types_1.IntData(0), new types_1.IntData(7), new types_1.IntData(25)])], [new types_1.QuarterData(types_1.Quarter.FALL, new types_1.IntData(111)), new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(1))], id);
                tableVals.attendance.push([
                    '50',
                    '1',
                    '',
                    '447'
                ]);
                tableVals.attendance.push([
                    '51',
                    '800800',
                    '0,7,25',
                    '4'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ])
    ]);
}
exports.testAppendPartTwo = testAppendPartTwo;
function testGet() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testGetMembers', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.member = tableVals.member.slice(0, 1).concat(get_1.getMembers(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Member', tableVals.member, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.member = tableVals.member.slice(0, 1).concat(get_1.getMembers(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Member', tableVals.member, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetIncome', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.income = tableVals.income.slice(0, 1).concat(get_1.getIncomes(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Income', tableVals.income, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.income = tableVals.income.slice(0, 1).concat(get_1.getIncomes(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Income', tableVals.income, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetExpense', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.expense = tableVals.expense.slice(0, 1).concat(get_1.getExpenses(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Expense', tableVals.expense, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.expense = tableVals.expense.slice(0, 1).concat(get_1.getExpenses(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Expense', tableVals.expense, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetRecipient', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.recipient = tableVals.recipient.slice(0, 1).concat(get_1.getRecipients(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Recipient', tableVals.recipient, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.recipient = tableVals.recipient.slice(0, 1).concat(get_1.getRecipients(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Recipient', tableVals.recipient, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetPaymentType', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.paymentType = tableVals.paymentType.slice(0, 1).concat(get_1.getPaymentTypes(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('PaymentType', tableVals.paymentType, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.paymentType = tableVals.paymentType.slice(0, 1).concat(get_1.getPaymentTypes(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('PaymentType', tableVals.paymentType, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetStatement', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.statement = tableVals.statement.slice(0, 1).concat(get_1.getStatements(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Statement', tableVals.statement, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.statement = tableVals.statement.slice(0, 1).concat(get_1.getStatements(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Statement', tableVals.statement, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetAttendance', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                tableVals.attendance = tableVals.attendance.slice(0, 1).concat(get_1.getAttendances(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Attendance', tableVals.attendance, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.attendance = tableVals.attendance.slice(0, 1).concat(get_1.getAttendances(id).map(function (entry) { return entry.toArray(); }));
                return unitTester_1.checkTableValues('Attendance', tableVals.attendance, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetClubInfo', [
            new unitTester_1.UnitTest('empty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    get_1.getClubInfo(id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkTableValues('ClubInfo', tableVals.clubInfo, id);
            }),
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                tableVals.clubInfo = tableVals.clubInfo.slice(0, 1).concat([get_1.getClubInfo(id).toArray()]);
                return unitTester_1.checkTableValues('ClubInfo', tableVals.clubInfo, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testGetMemberIds', [
            new unitTester_1.UnitTest('emptyParam', function (id) {
                try {
                    get_1.getMemberIds([], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('emptyNoMatch', function (id) {
                try {
                    get_1.getMemberIds([new types_1.StringData('missing boy')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('nonEmptyMatch', function (id) {
                unitTester_1.fillWithData(id);
                var ids = get_1.getMemberIds([
                    new types_1.StringData('malachi keenan'),
                    new types_1.StringData('huey wilkins'),
                    new types_1.StringData('chris freeman'),
                    new types_1.StringData('shannen bryan'),
                    new types_1.StringData('ava-mae wicks'),
                ], id);
                return unitTester_1.arraysEqual(['1', '10', '8', '9', '3'], ids.map(function (n) { return n.toString(); }));
            }),
            new unitTester_1.UnitTest('nonEmptyNoMatch', function (id) {
                unitTester_1.fillWithData(id);
                try {
                    get_1.getMemberIds([new types_1.StringData('malachi keenan'), new types_1.StringData('another missing boy')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            })
        ]),
        new unitTester_1.UnitTestSet('testGetRecipientIds', [
            new unitTester_1.UnitTest('emptyParam', function (id) {
                try {
                    get_1.getRecipientIds([], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('emptyNoMatch', function (id) {
                try {
                    get_1.getRecipientIds([new types_1.StringData('missing value')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('nonEmptyMatch', function (id) {
                unitTester_1.fillWithData(id);
                var ids = get_1.getRecipientIds([
                    new types_1.StringData('amazon'),
                    new types_1.StringData('costco'),
                    new types_1.StringData('microsoft'),
                    new types_1.StringData('mercer'),
                    new types_1.StringData('madewell')
                ], id);
                return unitTester_1.arraysEqual(['1', '0', '14', '12', '6'], ids.map(function (n) { return n.toString(); }));
            }),
            new unitTester_1.UnitTest('nonEmptyNoMatch', function (id) {
                unitTester_1.fillWithData(id);
                try {
                    get_1.getRecipientIds([new types_1.StringData('costco'), new types_1.StringData('another missing value')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            })
        ]),
        new unitTester_1.UnitTestSet('testGetPaymentTypeIds', [
            new unitTester_1.UnitTest('emptyParam', function (id) {
                try {
                    get_1.getPaymentTypeIds([], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('emptyNoMatch', function (id) {
                try {
                    get_1.getPaymentTypeIds([new types_1.StringData('missing value')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            }),
            new unitTester_1.UnitTest('nonEmptyMatch', function (id) {
                unitTester_1.fillWithData(id);
                var ids = get_1.getPaymentTypeIds([
                    new types_1.StringData('debit'),
                    new types_1.StringData('venmo'),
                    new types_1.StringData('cash'),
                    new types_1.StringData('check')
                ], id);
                return unitTester_1.arraysEqual(['6', '4', '0', '1'], ids.map(function (n) { return n.toString(); }));
            }),
            new unitTester_1.UnitTest('nonEmptyNoMatch', function (id) {
                unitTester_1.fillWithData(id);
                try {
                    get_1.getPaymentTypeIds([new types_1.StringData('debit'), new types_1.StringData('another missing value')], id);
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return true;
            })
        ]),
    ]);
}
exports.testGet = testGet;
function testFormActionsPartOne() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('addExpense', [
            new unitTester_1.UnitTest('newRecipientAndPayType', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                actions_1.addExpense('1.16', 'this is a description', ' A New Recipient ', 'a payment type   ', id);
                var expenses = get_1.getExpenses(id);
                var expenseDate = expenses[expenses.length - 1].date;
                if (!expenseDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.expense.push(['0', expenseDate.toString(), '116', 'this is a description', '0', '0', '-1']);
                tableVals.recipient.push(['0', 'a new recipient']);
                tableVals.paymentType.push(['0', 'a payment type']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('newRecipient', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addExpense('10.99', 'A Description', 'A New Recipient', 'Venmo', id);
                var expenses = get_1.getExpenses(id);
                var expenseDate = expenses[expenses.length - 1].date;
                if (!expenseDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.expense.push(['161', expenseDate.toString(), '1099', 'A Description', '4', '58', '-1']);
                tableVals.recipient.push(['58', 'a new recipient']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('newPayType', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addExpense('69.69', 'New Shoes', 'Trader Joes', 'new paytype', id);
                var expenses = get_1.getExpenses(id);
                var expenseDate = expenses[expenses.length - 1].date;
                if (!expenseDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.expense.push(['161', expenseDate.toString(), '6969', 'New Shoes', '7', '57', '-1']);
                tableVals.paymentType.push(['7', 'new paytype']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('existingPayTypeAndRecipient', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addExpense('100', 'Bought things', '  Menchie\'s  ', 'cash   ', id);
                var expenses = get_1.getExpenses(id);
                var expenseDate = expenses[expenses.length - 1].date;
                if (!expenseDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.expense.push(['161', expenseDate.toString(), '10000', 'Bought things', '0', '11', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('addIncome', [
            new unitTester_1.UnitTest('newPayType', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addIncome('69.69', 'New Shoes', 'new paytype', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.income.push(['373', incomeDate.toString(), '6969', 'New Shoes', '7', '-1']);
                tableVals.paymentType.push(['7', 'new paytype']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('existingPayType', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addIncome('100', 'Bought things', 'cash   ', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.income.push(['373', incomeDate.toString(), '10000', 'Bought things', '0', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('addMemberIOU', [
            new unitTester_1.UnitTest('single', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addMemberIOU(['Orson Vang: -$14.20'], '14.20', 'A couple of ding dongs', id);
                tableVals.member[6][3] = '1420';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('double', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.addMemberIOU(['Desiree Rudd: $40.00', 'Vikram Townsend: $0.00'], '67', 'More things to do', id);
                tableVals.member[27][3] = '6700';
                tableVals.member[33][3] = '6700';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('collectDues', [
            new unitTester_1.UnitTest('single', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.collectDues(['Malachi Keenan: $500.00'], 'cash', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member[2][8] = '1';
                tableVals.income.push(['373', incomeDate.toString(), '50000', 'Malachi Keenan, dues for Spring 2019', '0', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('double', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.collectDues(['Skyla Robbins: $2.00', 'Huey Wilkins: $500.00'], 'Venmo', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member[40][8] = '1';
                tableVals.member[11][8] = '1';
                tableVals.income.push(['373', incomeDate.toString(), '200', 'Skyla Robbins, dues for Spring 2019', '4', '-1']);
                tableVals.income.push(['374', incomeDate.toString(), '50000', 'Huey Wilkins, dues for Spring 2019', '4', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('confirmTransfer', [
            new unitTester_1.UnitTest('single', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.confirmTransfer(['Jul 21, 2019, $20.00 Cash [10]'], id);
                tableVals.statement[11][2] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('double', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.confirmTransfer(['Jan 10, 2019, $14.14 Cash [15]', 'Aug 01, 2019, $20.00 Cash [10]'], id);
                tableVals.statement[16][2] = '1';
                tableVals.statement[11][2] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
    ]);
}
exports.testFormActionsPartOne = testFormActionsPartOne;
function testFormActionsPartTwo() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('nextQuarter', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.nextQuarter(id);
                tableVals.clubInfo[1][3] = '8078';
                tableVals.member.slice(1).forEach(function (row) { return row[8] = '0'; });
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('resolveMemberIOU', [
            new unitTester_1.UnitTest('single', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.resolveMemberIOU(['Tarik Santos: $44.00'], '99', 'Hot cheetos', 'Debit', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member[5][3] = '-9900';
                tableVals.income.push(['373', incomeDate.toString(), '9900', 'Tarik Santos Hot cheetos (debt)', '6', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('double', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.resolveMemberIOU(['Esha Ritter: $500.00', 'Jayden-james Short: $44.44'], '2.50', 'New bananas', 'Cash', id);
                var incomes = get_1.getIncomes(id);
                var incomeDate = incomes[incomes.length - 1].date;
                if (!incomeDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member[41][3] = '-250';
                tableVals.member[43][3] = '-250';
                tableVals.income.push(['373', incomeDate.toString(), '250', 'Esha Ritter New bananas (debt)', '0', '-1']);
                tableVals.income.push(['374', incomeDate.toString(), '250', 'Jayden-james Short New bananas (debt)', '0', '-1']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('takeAttendance', [
            new unitTester_1.UnitTest('blank', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                actions_1.takeAttendance(undefined, undefined, id);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('noNewNames', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.takeAttendance(['elvis vinson', 'esme frame'], undefined, id);
                var attendance = get_1.getAttendances(id);
                var attendanceDate = attendance[attendance.length - 1].date;
                if (!attendanceDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.attendance.push(['50', attendanceDate.toString(), '16,17', '8077']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('onlyNewNames', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.takeAttendance(undefined, ' Porko Rosso', id);
                var attendance = get_1.getAttendances(id);
                var attendanceDate = attendance[attendance.length - 1].date;
                if (!attendanceDate)
                    throw types_1.ErrorType.AssertionError;
                var members = get_1.getMembers(id);
                var memberDate = members[members.length - 1].dateJoined;
                if (!memberDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member.push(['45', 'porko rosso', memberDate.toString(), '0', '', '0', '1', '0', '0', '0', '0']);
                tableVals.attendance.push(['50', attendanceDate.toString(), '45', '8077']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('newAndOldNames', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.takeAttendance(['elvis vinson'], ' Mark rubio\n  \n\n sir Fetchd  \n', id);
                var attendance = get_1.getAttendances(id);
                var attendanceDate = attendance[attendance.length - 1].date;
                if (!attendanceDate)
                    throw types_1.ErrorType.AssertionError;
                var members = get_1.getMembers(id);
                var membersDate = members[members.length - 1].dateJoined;
                if (!membersDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.member.push(['45', 'mark rubio', membersDate.toString(), '0', '', '0', '1', '0', '0', '0', '0']);
                tableVals.member.push(['46', 'sir fetchd', membersDate.toString(), '0', '', '0', '1', '0', '0', '0', '0']);
                tableVals.attendance.push(['50', attendanceDate.toString(), '17,45,46', '8077']);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('transferFunds', [
            new unitTester_1.UnitTest('blank', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.transferFunds(undefined, undefined, id);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('onlyIncome', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.transferFunds(['$22.22 Cash [0]'], undefined, id);
                var statements = get_1.getStatements(id);
                var statementDate = statements[statements.length - 1].date;
                if (!statementDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.statement.push(['223', statementDate.toString(), '0']);
                tableVals.income[1][5] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('onlyExpense', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.transferFunds(undefined, ['-$30.00 Venmo [5]', '-$100.99 Cash [10]'], id);
                var statements = get_1.getStatements(id);
                var statementDate = statements[statements.length - 1].date;
                if (!statementDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.statement.push(['223', statementDate.toString(), '0']);
                tableVals.expense[6][6] = '223';
                tableVals.expense[11][6] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('bothIncomeAndExpense', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.transferFunds(['$10.00 Venmo [0]', '$0.99 Cash [20]'], ['-$30.00 Venmo [5]'], id);
                var statements = get_1.getStatements(id);
                var statementDate = statements[statements.length - 1].date;
                if (!statementDate)
                    throw types_1.ErrorType.AssertionError;
                tableVals.statement.push(['223', statementDate.toString(), '0']);
                tableVals.income[1][5] = '223';
                tableVals.income[21][5] = '223';
                tableVals.expense[6][6] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('updateContactSettings', [
            new unitTester_1.UnitTest('phone', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.updateContactSettings('Carina Mckee', undefined, '2456667898', 'Verizon', 'No', 'Yes', id);
                tableVals.member[13][4] = '2456667898@vtext.com';
                tableVals.member[13][9] = '0';
                tableVals.member[13][10] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('email', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.updateContactSettings('kaci mcdermott', 'myemail@email.mail', undefined, undefined, undefined, undefined, id);
                tableVals.member[31][4] = 'myemail@email.mail';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('updateMemberStatus', [
            new unitTester_1.UnitTest('single', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.updateMemberStatus(['Ava-Mae Wicks'], 'Yes', undefined, 'Yes', id);
                tableVals.member[4][5] = '1';
                tableVals.member[4][7] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('double', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                actions_1.updateMemberStatus(['elvis vinson', 'imaad oneal'], undefined, 'Yes', undefined, id);
                tableVals.member[18][6] = '1';
                tableVals.member[19][6] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ])
    ]);
}
exports.testFormActionsPartTwo = testFormActionsPartTwo;
function testUpdatePartOne() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testUpdateMember', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateMember([], [], [], [], [], [], [], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('emptyUndefinedUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateMember([], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateMember([new types_1.IntData(0), new types_1.IntData(1)], [new types_1.StringData('joe schmo')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateMember([new types_1.IntData(0)], [new types_1.StringData('joe schmo')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateMember([new types_1.IntData(50)], [new types_1.StringData('joe schmo')], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(0)], [new types_1.StringData('asdf@gmail.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], [new types_1.BooleanData(false)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOnePartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateMember([new types_1.IntData(10)], [new types_1.StringData('abc')], [new types_1.DateData(new Date(123))], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, id);
                tableVals.member[11][1] = 'abc';
                tableVals.member[11][2] = '123';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateMember([new types_1.IntData(10)], [new types_1.StringData('abc')], [new types_1.DateData(new Date(123))], [new types_1.IntData(100)], [new types_1.StringData('email@email.com')], [new types_1.BooleanData(false)], [new types_1.BooleanData(true)], [new types_1.BooleanData(false)], [new types_1.BooleanData(true)], [new types_1.BooleanData(false)], [new types_1.BooleanData(true)], id);
                tableVals.member[11] = [
                    '10',
                    'abc',
                    '123',
                    '100',
                    'email@email.com',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoPartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateMember([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.StringData('abc'), new types_1.StringData('xyz')], [new types_1.DateData(new Date(123)), new types_1.DateData(new Date(789))], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, id);
                tableVals.member[11][1] = 'abc';
                tableVals.member[11][2] = '123';
                tableVals.member[16][1] = 'xyz';
                tableVals.member[16][2] = '789';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateMember([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.StringData('abc'), new types_1.StringData('xyz')], [new types_1.DateData(new Date(123)), new types_1.DateData(new Date(789))], [new types_1.IntData(100), new types_1.IntData(-55)], [new types_1.StringData('email@email.com'), new types_1.StringData('asdf@asdf.com')], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], [new types_1.BooleanData(false), new types_1.BooleanData(true)], [new types_1.BooleanData(true), new types_1.BooleanData(false)], id);
                tableVals.member[11] = [
                    '10',
                    'abc',
                    '123',
                    '100',
                    'email@email.com',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1'
                ];
                tableVals.member[16] = [
                    '15',
                    'xyz',
                    '789',
                    '-55',
                    'asdf@asdf.com',
                    '1',
                    '0',
                    '1',
                    '0',
                    '1',
                    '0'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdateIncome', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateIncome([], [], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('emptyUndefinedUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateIncome([], undefined, undefined, undefined, undefined, undefined, id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateIncome([new types_1.IntData(0), new types_1.IntData(1)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateIncome([new types_1.IntData(0)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateIncome([new types_1.IntData(400)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOnePartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateIncome([new types_1.IntData(10)], [new types_1.DateData(new Date(334455))], [new types_1.IntData(0)], undefined, undefined, undefined, id);
                tableVals.income[11][1] = '334455';
                tableVals.income[11][2] = '0';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateIncome([new types_1.IntData(10)], [new types_1.DateData(new Date(334455))], [new types_1.IntData(0)], [new types_1.StringData('other test')], [new types_1.IntData(1)], [new types_1.IntData(0)], id);
                tableVals.income[11] = [
                    '10',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoPartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateIncome([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], undefined, undefined, undefined, id);
                tableVals.income[11][1] = '334455';
                tableVals.income[11][2] = '0';
                tableVals.income[16][1] = '111223';
                tableVals.income[16][2] = '1000000';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateIncome([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.income[11] = [
                    '10',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0'
                ];
                tableVals.income[16] = [
                    '15',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '77'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdateExpense', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateExpense([], [], [], [], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('emptyUndefinedUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateExpense([], undefined, undefined, undefined, undefined, undefined, undefined, id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateExpense([new types_1.IntData(0), new types_1.IntData(1)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateExpense([new types_1.IntData(0)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateExpense([new types_1.IntData(200)], [new types_1.DateData(new Date(123456789))], [new types_1.IntData(444)], [new types_1.StringData('test')], [new types_1.IntData(0)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOnePartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateExpense([new types_1.IntData(10)], [new types_1.DateData(new Date(334455))], [new types_1.IntData(0)], undefined, undefined, undefined, undefined, id);
                tableVals.expense[11][1] = '334455';
                tableVals.expense[11][2] = '0';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateExpense([new types_1.IntData(10)], [new types_1.DateData(new Date(334455))], [new types_1.IntData(0)], [new types_1.StringData('other test')], [new types_1.IntData(1)], [new types_1.IntData(0)], [new types_1.IntData(0)], id);
                tableVals.expense[11] = [
                    '10',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0',
                    '0'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoPartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateExpense([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], undefined, undefined, undefined, undefined, id);
                tableVals.expense[11][1] = '334455';
                tableVals.expense[11][2] = '0';
                tableVals.expense[16][1] = '111223';
                tableVals.expense[16][2] = '1000000';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateExpense([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(334455)), new types_1.DateData(new Date(111223))], [new types_1.IntData(0), new types_1.IntData(1000000)], [new types_1.StringData('other test'), new types_1.StringData('Large sum')], [new types_1.IntData(1), new types_1.IntData(99)], [new types_1.IntData(0), new types_1.IntData(77)], [new types_1.IntData(0), new types_1.IntData(77)], id);
                tableVals.expense[11] = [
                    '10',
                    '334455',
                    '0',
                    'other test',
                    '1',
                    '0',
                    '0'
                ];
                tableVals.expense[16] = [
                    '15',
                    '111223',
                    '1000000',
                    'Large sum',
                    '99',
                    '77',
                    '77'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ])
    ]);
}
exports.testUpdatePartOne = testUpdatePartOne;
function testUpdatePartTwo() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testUpdateRecipient', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateRecipient([], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateRecipient([new types_1.IntData(0), new types_1.IntData(1)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateRecipient([new types_1.IntData(0)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateRecipient([new types_1.IntData(100)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateRecipient([new types_1.IntData(10)], [new types_1.StringData('costco')], id);
                tableVals.recipient[11][1] = 'costco';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateRecipient([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.StringData('costco'), new types_1.StringData('this is a recipient')], id);
                tableVals.recipient[11][1] = 'costco';
                tableVals.recipient[16][1] = 'this is a recipient';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdatePaymentType', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updatePaymentType([], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updatePaymentType([new types_1.IntData(0), new types_1.IntData(1)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updatePaymentType([new types_1.IntData(0)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updatePaymentType([new types_1.IntData(10)], [new types_1.StringData('test')], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updatePaymentType([new types_1.IntData(1)], [new types_1.StringData('xxxxx')], id);
                tableVals.paymentType[2][1] = 'xxxxx';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updatePaymentType([new types_1.IntData(1), new types_1.IntData(6)], [new types_1.StringData('xxxxx'), new types_1.StringData('yyy')], id);
                tableVals.paymentType[2][1] = 'xxxxx';
                tableVals.paymentType[4][1] = 'yyy';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdateStatement', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateStatement([], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('emptyUndefinedUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateStatement([], undefined, undefined, id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateStatement([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(40))], [types_1.BooleanData.TRUE], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateStatement([new types_1.IntData(0)], [new types_1.DateData(new Date(40))], [types_1.BooleanData.TRUE], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateStatement([new types_1.IntData(250)], [new types_1.DateData(new Date(40))], [types_1.BooleanData.TRUE], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOnePartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateStatement([new types_1.IntData(10)], [new types_1.DateData(new Date(40))], undefined, id);
                tableVals.statement[11][1] = '40';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateStatement([new types_1.IntData(10)], [new types_1.DateData(new Date(40))], [types_1.BooleanData.TRUE], id);
                tableVals.statement[11] = [
                    '10',
                    '40',
                    '1'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoPartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateStatement([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(40)), new types_1.DateData(new Date(222222))], undefined, id);
                tableVals.statement[11][1] = '40';
                tableVals.statement[16][1] = '222222';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateStatement([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(40)), new types_1.DateData(new Date(222222))], [types_1.BooleanData.TRUE, types_1.BooleanData.FALSE], id);
                tableVals.statement[11] = [
                    '10',
                    '40',
                    '1'
                ];
                tableVals.statement[16] = [
                    '15',
                    '222222',
                    '0'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdateAttendance', [
            new unitTester_1.UnitTest('emptyUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateAttendance([], [], [], [], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('emptyUndefinedUpdate', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateAttendance([], undefined, undefined, undefined, id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateUnevenData', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateAttendance([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(12321))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    update_1.updateAttendance([new types_1.IntData(0)], [new types_1.DateData(new Date(12321))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    update_1.updateAttendance([new types_1.IntData(100)], [new types_1.DateData(new Date(12321))], [new types_1.IntListData([new types_1.IntData(1), new types_1.IntData(5)])], [new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(100))], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOnePartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateAttendance([new types_1.IntData(10)], [new types_1.DateData(new Date(1))], undefined, undefined, id);
                tableVals.attendance[11][1] = '1';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateOneAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateAttendance([new types_1.IntData(10)], [new types_1.DateData(new Date(1))], [new types_1.IntListData([])], [new types_1.QuarterData(types_1.Quarter.FALL, new types_1.IntData(111))], id);
                tableVals.attendance[11] = [
                    '10',
                    '1',
                    '',
                    '447'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoPartialFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateAttendance([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(1)), new types_1.DateData(new Date(800800))], undefined, undefined, id);
                tableVals.attendance[11][1] = '1';
                tableVals.attendance[16][1] = '800800';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateTwoAllFields', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateAttendance([new types_1.IntData(10), new types_1.IntData(15)], [new types_1.DateData(new Date(1)), new types_1.DateData(new Date(800800))], [new types_1.IntListData([]), new types_1.IntListData([new types_1.IntData(0), new types_1.IntData(7), new types_1.IntData(25)])], [new types_1.QuarterData(types_1.Quarter.FALL, new types_1.IntData(111)), new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(1))], id);
                tableVals.attendance[11] = [
                    '10',
                    '1',
                    '',
                    '447'
                ];
                tableVals.attendance[16] = [
                    '15',
                    '800800',
                    '0,7,25',
                    '4'
                ];
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testUpdateClubInfo', [
            new unitTester_1.UnitTest('undefinedUpdateNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateClubInfo(undefined, undefined, undefined, undefined, id);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updatePartialNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateClubInfo(new types_1.IntData(10), undefined, new types_1.IntData(4), undefined, id);
                tableVals.clubInfo[1][0] = '10';
                tableVals.clubInfo[1][2] = '4';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('updateAllNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                update_1.updateClubInfo(new types_1.IntData(10), new types_1.IntData(100), new types_1.IntData(4), new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(1)), id);
                tableVals.clubInfo[1][0] = '10';
                tableVals.clubInfo[1][1] = '100';
                tableVals.clubInfo[1][2] = '4';
                tableVals.clubInfo[1][3] = '5';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
    ]);
}
exports.testUpdatePartTwo = testUpdatePartTwo;
function testRemovePartOne() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testRemoveMember', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeMember([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeMember([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeMember([new types_1.IntData(50)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeMember([new types_1.IntData(10)], id);
                tableVals.member.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeMember([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.member.splice(16, 1);
                tableVals.member.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testRemoveIncome', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeIncome([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeIncome([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeIncome([new types_1.IntData(400)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeIncome([new types_1.IntData(10)], id);
                tableVals.income.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeIncome([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.income.splice(16, 1);
                tableVals.income.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testRemoveExpense', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeExpense([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeExpense([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeExpense([new types_1.IntData(200)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeExpense([new types_1.IntData(10)], id);
                tableVals.expense.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeExpense([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.expense.splice(16, 1);
                tableVals.expense.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ])
    ]);
}
exports.testRemovePartOne = testRemovePartOne;
function testRemovePartTwo() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testRemoveRecipient', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeRecipient([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeRecipient([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeRecipient([new types_1.IntData(100)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeRecipient([new types_1.IntData(10)], id);
                tableVals.recipient.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeRecipient([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.recipient.splice(16, 1);
                tableVals.recipient.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testRemovePaymentType', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removePaymentType([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removePaymentType([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removePaymentType([new types_1.IntData(10)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removePaymentType([new types_1.IntData(1)], id);
                tableVals.paymentType.splice(2, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removePaymentType([new types_1.IntData(1), new types_1.IntData(6)], id);
                tableVals.paymentType.splice(4, 1);
                tableVals.paymentType.splice(2, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testRemoveStatement', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeStatement([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeStatement([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeStatement([new types_1.IntData(250)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeStatement([new types_1.IntData(10)], id);
                tableVals.statement.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeStatement([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.statement.splice(16, 1);
                tableVals.statement.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
        new unitTester_1.UnitTestSet('testRemoveAttendance', [
            new unitTester_1.UnitTest('emptyRemove', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeAttendance([], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.IllegalArgumentError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundEmpty', function (id) {
                var tableVals = unitTester_1.getEmptyTableState();
                try {
                    remove_1.removeAttendance([new types_1.IntData(0)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeNotFoundNonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                try {
                    remove_1.removeAttendance([new types_1.IntData(100)], id);
                    return false;
                }
                catch (e) {
                    if (e !== types_1.ErrorType.NoMatchFoundError) {
                        throw e;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeOne', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeAttendance([new types_1.IntData(10)], id);
                tableVals.attendance.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('removeTwo', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                remove_1.removeAttendance([new types_1.IntData(10), new types_1.IntData(15)], id);
                tableVals.attendance.splice(16, 1);
                tableVals.attendance.splice(11, 1);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
        ]),
    ]);
}
exports.testRemovePartTwo = testRemovePartTwo;
function testMenuHandlersPartOne() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testAddMember', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddMember('joejoe', '1234', id, false);
                tableVals.member.push([
                    '45',
                    'joejoe',
                    '1234',
                    '0',
                    '',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAddIncome', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddIncome('1234', '45.01', 'description', 'check', id, false);
                tableVals.income.push([
                    '373',
                    '1234',
                    '4501',
                    'description',
                    '1',
                    '-1',
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAddExpense', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddExpense('1234', '45', 'description', 'madewell', 'check', id, false);
                tableVals.expense.push([
                    '161',
                    '1234',
                    '4500',
                    'description',
                    '1',
                    '6',
                    '-1',
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAddRecipient', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddRecipient('asdf', id, false);
                tableVals.recipient.push([
                    '58',
                    'asdf',
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAddPayType', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddPayType('asdf', id, false);
                tableVals.paymentType.push([
                    '7',
                    'asdf',
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testAddStatement', [
            new unitTester_1.UnitTest('noIncomesNoExpenses', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddStatement('123344', '', '', id, false);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('noIncomesSomeExpenses', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddStatement('123344', '', '10\n44', id, false);
                tableVals.statement.push([
                    '223',
                    '123344',
                    '0'
                ]);
                tableVals.expense[11][6] = '223';
                tableVals.expense[45][6] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('someIncomesNoExpenses', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddStatement('123344', '9\n39', '', id, false);
                tableVals.statement.push([
                    '223',
                    '123344',
                    '0'
                ]);
                tableVals.income[10][5] = '223';
                tableVals.income[40][5] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('someIncomesSomeExpenses', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddStatement('123344', '1\n3\n9', '22', id, false);
                tableVals.statement.push([
                    '223',
                    '123344',
                    '0'
                ]);
                tableVals.income[2][5] = '223';
                tableVals.income[4][5] = '223';
                tableVals.income[10][5] = '223';
                tableVals.expense[23][6] = '223';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
    ]);
}
exports.testMenuHandlersPartOne = testMenuHandlersPartOne;
function testMenuHandlersPartTwo() {
    unitTester_1.UnitTester.runTests([
        new unitTester_1.UnitTestSet('testAddAttendance', [
            new unitTester_1.UnitTest('noMembers', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddAttendance('123344', '', 'Summer', '2000', id, false);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            }),
            new unitTester_1.UnitTest('someMembers', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuAddAttendance('123344', '0,1,1,2,3,5', 'Summer', '2000', id, false);
                tableVals.attendance.push([
                    '50',
                    '123344',
                    '0,1,1,2,3,5',
                    '8002'
                ]);
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testRenameMember', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.renameMember('huey wilkins', 'joejoe', id, false);
                tableVals.member[11][1] = 'joejoe';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testRenameRecipient', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.renameRecipient('madewell', 'asdf', id, false);
                tableVals.recipient[7][1] = 'asdf';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testRenamePaymentType', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.renamePaymentType('venmo', 'asdf', id, false);
                tableVals.paymentType[3][1] = 'asdf';
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testMergeMember', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.mergeMember('tarik santos', 'chris freeman', id, false);
                var tarikId = '4';
                var chrisId = '8';
                tableVals.member.splice(5, 1);
                for (var i = 0; i < tableVals.attendance.length; ++i) {
                    var ids = tableVals.attendance[i][2].split(',');
                    if (ids.indexOf(tarikId) !== -1) {
                        ids.splice(ids.indexOf(tarikId), 1);
                        if (ids.indexOf(chrisId) === -1) {
                            ids.push(chrisId);
                            ids.sort();
                        }
                        tableVals.attendance[i][2] = ids.join(',');
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testMergeRecipient', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.mergeRecipient('mercer\nmadewell', 'amazon', id, false);
                var madewellId = '6';
                var mercerId = '12';
                var amazonId = '1';
                tableVals.recipient.splice(13, 1);
                tableVals.recipient.splice(7, 1);
                for (var i = 0; i < tableVals.expense.length; ++i) {
                    if (tableVals.expense[i][5] === madewellId) {
                        tableVals.expense[i][5] = amazonId;
                    }
                    if (tableVals.expense[i][5] === mercerId) {
                        tableVals.expense[i][5] = amazonId;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testMergePaymentType', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.mergePaymentType('cash\nvenmo', 'debit', id, false);
                var cashId = '0';
                var venmoId = '4';
                var debitId = '6';
                tableVals.paymentType.splice(3, 1);
                tableVals.paymentType.splice(1, 1);
                for (var i = 0; i < tableVals.income.length; ++i) {
                    if (tableVals.income[i][4] === cashId) {
                        tableVals.income[i][4] = debitId;
                    }
                    if (tableVals.income[i][4] === venmoId) {
                        tableVals.income[i][4] = debitId;
                    }
                }
                for (var i = 0; i < tableVals.expense.length; ++i) {
                    if (tableVals.expense[i][4] === cashId) {
                        tableVals.expense[i][4] = debitId;
                    }
                    if (tableVals.expense[i][4] === venmoId) {
                        tableVals.expense[i][4] = debitId;
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
        new unitTester_1.UnitTestSet('testDeleteMember', [
            new unitTester_1.UnitTest('nonEmpty', function (id) {
                var tableVals = unitTester_1.fillWithData(id);
                handlers_1.menuDeleteMember('felicia mill', id, false);
                var feliciaId = '11';
                tableVals.member.splice(12, 1);
                for (var i = 0; i < tableVals.attendance.length; ++i) {
                    var ids = tableVals.attendance[i][2].split(',');
                    if (ids.indexOf(feliciaId) !== -1) {
                        ids.splice(ids.indexOf(feliciaId), 1);
                        tableVals.attendance[i][2] = ids.join(',');
                    }
                }
                return unitTester_1.checkDatabaseValues(tableVals, id);
            })
        ]),
    ]);
}
exports.testMenuHandlersPartTwo = testMenuHandlersPartTwo;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
exports.__esModule = true;
var tableOps_1 = __webpack_require__(1);
function checkTableValues(tableName, testVals, id) {
    var trueVals = SpreadsheetApp.openById(id).getSheetByName(tableName).getDataRange().getValues();
    if (trueVals.length !== testVals.length ||
        (trueVals.length > 0 &&
            testVals.length > 0 &&
            trueVals[0].length !== testVals[0].length)) {
        return false;
    }
    for (var row = 0; row < trueVals.length; ++row) {
        for (var col = 0; col < trueVals[0].length; ++col) {
            if (trueVals[row][col].toString() !== testVals[row][col]) {
                return false;
            }
        }
    }
    return true;
}
exports.checkTableValues = checkTableValues;
function checkDatabaseValues(values, id) {
    return (checkTableValues('Member', values.member, id) &&
        checkTableValues('Income', values.income, id) &&
        checkTableValues('Expense', values.expense, id) &&
        checkTableValues('Recipient', values.recipient, id) &&
        checkTableValues('PaymentType', values.paymentType, id) &&
        checkTableValues('Statement', values.statement, id) &&
        checkTableValues('Attendance', values.attendance, id) &&
        checkTableValues('ClubInfo', values.clubInfo, id));
}
exports.checkDatabaseValues = checkDatabaseValues;
function arraysEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a.length != b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
function getEmptyTableState() {
    return {
        member: [[
                'id',
                'name',
                'dateJoined',
                'amountOwed',
                'email',
                'performing',
                'active',
                'officer',
                'currentDuesPaid',
                'notifyPoll',
                'sendReceipt'
            ]],
        income: [[
                'id',
                'date',
                'amount',
                'description',
                'paymentTypeId',
                'statementId'
            ]],
        expense: [[
                'id',
                'date',
                'amount',
                'description',
                'paymentTypeId',
                'recipientId',
                'statementId'
            ]],
        recipient: [[
                'id',
                'name'
            ]],
        paymentType: [[
                'id',
                'name'
            ]],
        statement: [[
                'id',
                'date',
                'confirmed'
            ]],
        attendance: [[
                'id',
                'date',
                'memberIds',
                'quarterId'
            ]],
        clubInfo: [[
                'memberFee',
                'officerFee',
                'daysUntilFeeRequired',
                'currentQuarterId'
            ]]
    };
}
exports.getEmptyTableState = getEmptyTableState;
function clearAllData(sheetId) {
    var sheetApp = SpreadsheetApp.openById(sheetId);
    tableOps_1.clearData(sheetApp.getSheetByName('Member'));
    tableOps_1.clearData(sheetApp.getSheetByName('Income'));
    tableOps_1.clearData(sheetApp.getSheetByName('Expense'));
    tableOps_1.clearData(sheetApp.getSheetByName('Recipient'));
    tableOps_1.clearData(sheetApp.getSheetByName('PaymentType'));
    tableOps_1.clearData(sheetApp.getSheetByName('Statement'));
    tableOps_1.clearData(sheetApp.getSheetByName('Attendance'));
    tableOps_1.clearData(sheetApp.getSheetByName('ClubInfo'));
}
exports.clearAllData = clearAllData;
function fillWithData(sheetId) {
    var sheetApp = SpreadsheetApp.openById(sheetId);
    var tableState = {
        member: [
            ['id', 'name', 'dateJoined', 'amountOwed', 'email', 'performing', 'active', 'officer', 'currentDuesPaid', 'notifyPoll', 'sendReceipt'],
            ['0', 'richie garrison', '1435737600000', '0', 'bigmauler@hotmail.com', '0', '1', '0', '1', '1', '1'],
            ['1', 'malachi keenan', '1514793600000', '0', 'jsmith@me.com', '0', '0', '0', '0', '0', '1'],
            ['2', 'saffron chang', '1388563200000', '0', '5067893344@vtext.com', '0', '0', '0', '0', '0', '0'],
            ['3', 'ava-mae wicks', '1506844800000', '0', 'esbeck@yahoo.ca', '1', '1', '0', '1', '1', '0'],
            ['4', 'tarik santos', '1483257600000', '0', 'keutzer@att.net', '1', '1', '0', '1', '1', '1'],
            ['5', 'orson vang', '1538380800000', '0', 'mmccool@live.com', '0', '0', '0', '0', '1', '1'],
            ['6', 'allana mcgee', '1538380800000', '0', '', '0', '0', '0', '0', '1', '1'],
            ['7', 'taylan whittington', '1462089600000', '0', '', '0', '0', '0', '0', '0', '1'],
            ['8', 'chris freeman', '1538380800000', '1000', 'gastown@msn.com', '1', '1', '0', '1', '0', '0'],
            ['9', 'shannen bryan', '1388563200000', '0', 'dprice@sbcglobal.net', '0', '0', '0', '0', '1', '0'],
            ['10', 'huey wilkins', '1388563200000', '500', 'pavel@sbcglobal.net', '0', '0', '0', '0', '0', '0'],
            ['11', 'felicia mill', '1538380800000', '0', '5667665698@vtext.com', '1', '1', '0', '1', '0', '0'],
            ['12', 'carina mckee', '1435737600000', '0', '', '1', '1', '0', '0', '1', '0'],
            ['13', 'montgomery pickett', '1420099200000', '0', '5860991232@tmomail.com', '1', '1', '0', '1', '1', '1'],
            ['14', 'griffin werner', '1475308800000', '0', '8906767890@tmomail.com', '1', '1', '0', '1', '1', '0'],
            ['15', 'archibald parkinson', '1506844800000', '0', 'jsmith@me.com', '1', '1', '1', '1', '0', '1'],
            ['16', 'esme frame', '1538380800000', '0', '5067893344@vtext.com', '1', '1', '0', '1', '0', '1'],
            ['17', 'elvis vinson', '1388563200000', '0', 'esbeck@yahoo.ca', '0', '0', '0', '0', '0', '0'],
            ['18', 'imaad oneal', '1538380800000', '0', 'keutzer@att.net', '1', '1', '1', '1', '0', '0'],
            ['19', 'tegan ingram', '1475308800000', '0', 'mmccool@live.com', '1', '1', '0', '1', '0', '1'],
            ['20', 'lukas traynor', '1538380800000', '0', 'ntegrity@msn.com', '1', '1', '1', '1', '1', '1'],
            ['21', 'nylah martin', '1475308800000', '0', 'balchen@me.com', '1', '1', '1', '1', '0', '1'],
            ['22', 'hanna jeffery', '1538380800000', '0', 'gastown@msn.com', '1', '1', '0', '0', '1', '0'],
            ['23', 'kamran wiley', '1506844800000', '1500', '5667665698@vtext.com', '1', '1', '1', '1', '1', '0'],
            ['24', 'anees black', '1412150400000', '0', 'mmccool@live.com', '1', '1', '0', '1', '0', '0'],
            ['25', 'abdallah mckeown', '1538380800000', '0', 'ntegrity@msn.com', '1', '1', '0', '0', '0', '1'],
            ['26', 'vikram townsend', '1475308800000', '0', '2034221697@tmomail.com', '0', '0', '0', '0', '1', '1'],
            ['27', 'rowena bonilla', '1506844800000', '0', 'mmccool@live.com', '1', '1', '1', '1', '1', '0'],
            ['28', 'tayyib mcdonnell', '1538380800000', '0', 'ntegrity@msn.com', '0', '0', '0', '0', '1', '0'],
            ['29', 'bianka irving', '1443686400000', '0', 'balchen@me.com', '1', '1', '0', '1', '0', '1'],
            ['30', 'kaci mcdermott', '1430467200000', '0', 'gastown@msn.com', '0', '0', '0', '0', '1', '1'],
            ['31', 'regan cross', '1475308800000', '0', '', '1', '1', '0', '1', '1', '1'],
            ['32', 'desiree rudd', '1506844800000', '0', '', '1', '1', '0', '1', '0', '0'],
            ['33', 'lex griffin', '1538380800000', '0', '8906767890@tmomail.com', '1', '1', '0', '1', '0', '1'],
            ['34', 'angelica millington', '1506844800000', '0', '', '1', '1', '1', '1', '1', '1'],
            ['35', 'teresa hoffman', '1538380800000', '0', '', '0', '0', '0', '0', '0', '0'],
            ['36', 'esa clegg', '1506844800000', '0', '', '1', '1', '0', '1', '1', '0'],
            ['37', 'dottie fisher', '1538380800000', '0', '', '1', '1', '0', '1', '0', '1'],
            ['38', 'kristina gallegos', '1506844800000', '0', '8906767890@tmomail.com', '1', '1', '0', '1', '0', '0'],
            ['39', 'skyla robbins', '1506844800000', '0', '', '1', '1', '1', '1', '0', '1'],
            ['40', 'esha ritter', '1538380800000', '0', '', '1', '1', '0', '1', '1', '0'],
            ['41', 'louisa manning', '1506844800000', '0', '', '0', '0', '0', '0', '1', '0'],
            ['42', 'jayden-james short', '1506844800000', '0', '', '1', '1', '0', '1', '0', '0'],
            ['43', 'muna currie', '1506844800000', '0', 'keutzer@att.net', '0', '0', '0', '0', '0', '1'],
            ['44', 'dua dawe', '1538380800000', '0', '', '1', '1', '0', '1', '0', '1']
        ],
        income: [
            ['id', 'date', 'amount', 'description', 'paymentTypeId', 'statementId'],
            ['0', '1362124800000', '0', 'box of tissues, and a book of matches', '0', '-1'],
            ['1', '1364803200000', '24000', 'A novel', '0', '1'],
            ['2', '1367395200000', '8000', 'bottle of ink', '0', '2'],
            ['3', '1370073600000', '0', 'a roll of duct tape', '0', '3'],
            ['4', '1372665600000', '8000', 'roll of stickers', '0', '4'],
            ['5', '1375344000000', '0', 'a frying pan', '0', '5'],
            ['6', '1378022400000', '0', 'a pack of cards', '0', '6'],
            ['7', '1380614400000', '53000', 'trash bag', '0', '7'],
            ['8', '1383292800000', '1500', 'lip balm', '0', '8'],
            ['9', '1385884800000', '1500', 'a box of tissues, and a book of matches', '0', '9'],
            ['10', '1388563200000', '37000', 'A handbasket', '0', '10'],
            ['11', '1391241600000', '35000', 'perfume', '0', '11'],
            ['12', '1393660800000', '33000', 'beans', '0', '12'],
            ['13', '1396339200000', '90000', 'a roll of duct tape', '0', '13'],
            ['14', '1398931200000', '13000', 'a few batteries', '0', '14'],
            ['15', '1401609600000', '36000', 'colored pencils in muted colors', '0', '15'],
            ['16', '1404201600000', '29500', 'A bottle of pills', '0', '16'],
            ['17', '1406880000000', '10500', 'a frying pan', '0', '17'],
            ['18', '1409558400000', '0', 'bandana', '0', '18'],
            ['19', '1412150400000', '0', 'box of crayons', '0', '19'],
            ['20', '1414828800000', '42500', 'a roll of duct tape', '0', '-1'],
            ['21', '1417420800000', '64000', 'A light bulb', '0', '21'],
            ['22', '1420099200000', '78800', 'roll of stickers', '0', '22'],
            ['23', '1422777600000', '69160', 'a pack of cards', '0', '23'],
            ['24', '1425196800000', '0', 'candle', '0', '24'],
            ['25', '1427875200000', '74500', 'roll of stickers', '0', '25'],
            ['26', '1430467200000', '22100', 'A light bulb', '0', '26'],
            ['27', '1433145600000', '30000', 'colored pencils in muted colors', '0', '27'],
            ['28', '1435737600000', '0', 'incense holder', '0', '28'],
            ['29', '1438416000000', '0', 'box of crayons', '0', '29'],
            ['30', '1441094400000', '36500', 'a vase of flowers', '0', '30'],
            ['31', '1443686400000', '77250', 'a pack of cards', '0', '31'],
            ['32', '1446364800000', '90000', 'bottle of ink', '0', '32'],
            ['33', '1448956800000', '40000', 'A handbasket', '0', '33'],
            ['34', '1451635200000', '0', 'yarn, and a wrench', '0', '34'],
            ['35', '1454313600000', '34000', 'a vase of flowers', '0', '35'],
            ['36', '1456819200000', '0', 'box of crayons', '0', '36'],
            ['37', '1459497600000', '54000', 'A novel', '0', '37'],
            ['38', '1462089600000', '30000', 'yarn, and a wrench', '0', '38'],
            ['39', '1464768000000', '3000', 'a few batteries', '0', '39'],
            ['40', '1467360000000', '100000', 'incense holder', '0', '40'],
            ['41', '1470038400000', '17000', 'candle', '0', '41'],
            ['42', '1472716800000', '30000', 'incense holder', '0', '42'],
            ['43', '1475308800000', '57000', 'yarn, and a wrench', '0', '43'],
            ['44', '1477987200000', '95000', 'A light bulb', '0', '44'],
            ['45', '1480579200000', '50000', 'candle', '0', '45'],
            ['46', '1483257600000', '20000', 'bottle of ink', '0', '46'],
            ['47', '1485936000000', '75000', 'A bottle of pills', '0', '47'],
            ['48', '1488355200000', '3000', 'A handbasket', '0', '48'],
            ['49', '1491033600000', '91000', 'colored pencils in muted colors', '0', '49'],
            ['50', '1493625600000', '56755', 'box of crayons', '0', '50'],
            ['51', '1496304000000', '102000', 'A light bulb', '0', '51'],
            ['52', '1498896000000', '57', 'a roll of duct tape', '0', '52'],
            ['54', '1504339200000', '35000', 'harmonica', '1', '54'],
            ['55', '1505635200000', '4000', 'incense holder', '0', '55'],
            ['56', '1506067200000', '18', 'bandana', '0', '56'],
            ['57', '1508745600000', '13504', 'A bottle of pills', '4', '57'],
            ['58', '1508745600000', '3000', 'a box of tissues, and a book of matches', '4', '58'],
            ['59', '1508745600000', '33', 'a frying pan', '4', '60'],
            ['60', '1508745600000', '16', 'A novel', '4', '59'],
            ['61', '1508832000000', '33000', 'bandana', '4', '65'],
            ['62', '1508832000000', '22000', 'trash bag', '4', '64'],
            ['63', '1508832000000', '18000', 'a pack of cards', '4', '63'],
            ['64', '1508832000000', '5700', 'box of tissues, and a book of matches', '4', '62'],
            ['65', '1508832000000', '3000', 'A novel', '4', '61'],
            ['66', '1509004800000', '35000', 'bottle of ink', '1', '66'],
            ['67', '1509091200000', '19', 'a roll of duct tape', '0', '67'],
            ['68', '1509350400000', '27000', 'roll of stickers', '4', '72'],
            ['69', '1510560000000', '3000', 'a frying pan', '4', '73'],
            ['70', '1511510400000', '19', 'a pack of cards', '0', '74'],
            ['71', '1512115200000', '9500', 'trash bag', '0', '78'],
            ['72', '1512374400000', '63050', 'lip balm', '4', '81'],
            ['73', '1512374400000', '6000', 'a box of tissues, and a book of matches', '4', '80'],
            ['74', '1512374400000', '17500', 'A handbasket', '0', '79'],
            ['75', '1512460800000', '70000', 'perfume', '1', '82'],
            ['76', '1513929600000', '19', 'beans', '0', '83'],
            ['77', '1516867200000', '1', 'a roll of duct tape', '0', '86'],
            ['78', '1516953600000', '24', 'a few batteries', '0', '87'],
            ['79', '1517212800000', '12000', 'colored pencils in muted colors', '0', '91'],
            ['80', '1518508800000', '51000', 'A bottle of pills', '4', '92'],
            ['81', '1519372800000', '16', 'a frying pan', '0', '93'],
            ['82', '1521792000000', '14', 'bandana', '0', '96'],
            ['83', '1522915200000', '18000', 'box of crayons', '4', '99'],
            ['84', '1522915200000', '15000', 'a roll of duct tape', '4', '98'],
            ['85', '1523260800000', '27000', 'A light bulb', '4', '104'],
            ['86', '1523260800000', '9000', 'roll of stickers', '4', '103'],
            ['87', '1523260800000', '7500', 'a pack of cards', '4', '102'],
            ['88', '1523260800000', '7396', 'candle', '4', '101'],
            ['89', '1523260800000', '3000', 'roll of stickers', '4', '100'],
            ['90', '1523347200000', '8500', 'A light bulb', '4', '108'],
            ['91', '1523347200000', '6500', 'colored pencils in muted colors', '4', '107'],
            ['92', '1523347200000', '3844', 'incense holder', '4', '106'],
            ['93', '1523347200000', '300', 'box of crayons', '4', '105'],
            ['94', '1523433600000', '6000', 'a vase of flowers', '0', '111'],
            ['95', '1523433600000', '9000', 'a pack of cards', '0', '110'],
            ['96', '1523433600000', '1200', 'bottle of ink', '0', '109'],
            ['97', '1524470400000', '20032', 'A handbasket', '0', '112'],
            ['98', '1524643200000', '25000', 'yarn, and a wrench', '0', '116'],
            ['99', '1524643200000', '52000', 'a vase of flowers', '0', '115'],
            ['100', '1524643200000', '13500', 'box of crayons', '0', '114'],
            ['101', '1524643200000', '1800', 'A novel', '0', '113'],
            ['102', '1524729600000', '51524', 'yarn, and a wrench', '4', '117'],
            ['103', '1524816000000', '16', 'a few batteries', '0', '118'],
            ['104', '1526889600000', '73400', 'incense holder', '0', '129'],
            ['105', '1527235200000', '14', 'candle', '0', '130'],
            ['106', '1529308800000', '10000', 'incense holder', '1', '132'],
            ['107', '1529654400000', '15', 'yarn, and a wrench', '0', '133'],
            ['108', '1531468800000', '3000', 'A light bulb', '0', '135'],
            ['109', '1531881029825', '23148', 'candle', '1', '140'],
            ['110', '1531986467272', '35000', 'bottle of ink', '1', '141'],
            ['111', '1532678400000', '17', 'A bottle of pills', '0', '136'],
            ['112', '1533211872843', '35000', 'A handbasket', '1', '142'],
            ['113', '1534118974505', '4000', 'colored pencils in muted colors', '0', '143'],
            ['114', '1534118941268', '3000', 'box of crayons', '0', '143'],
            ['115', '1538845436210', '1500', 'A light bulb', '4', '153'],
            ['116', '1534844727345', '35000', 'a roll of duct tape', '1', '144'],
            ['117', '1534752467873', '30000', 'harmonica', '1', '144'],
            ['118', '1538880252637', '3000', 'incense holder', '4', '154'],
            ['119', '1535878355310', '20', 'bandana', '0', '145'],
            ['120', '1538779832830', '1500', 'A bottle of pills', '4', '153'],
            ['121', '1538356448650', '3000', 'a box of tissues, and a book of matches', '4', '153'],
            ['122', '1538878876132', '3000', 'a frying pan', '0', '155'],
            ['123', '1538356424202', '8500', 'A novel', '4', '153'],
            ['124', '1538201005613', '2000', 'bandana', '4', '153'],
            ['125', '1538200994124', '2000', 'trash bag', '4', '153'],
            ['126', '1538200974554', '3000', 'a pack of cards', '4', '153'],
            ['127', '1538200217056', '3000', 'box of tissues, and a book of matches', '4', '153'],
            ['128', '1538878876132', '3000', 'A novel', '0', '155'],
            ['129', '1537981995222', '1500', 'bottle of ink', '4', '153'],
            ['130', '1534135930109', '2753', 'a roll of duct tape', '4', '153'],
            ['131', '1538200939449', '2000', 'roll of stickers', '0', '155'],
            ['132', '1538777912105', '1500', 'a frying pan', '0', '155'],
            ['133', '1534845004376', '48000', 'a pack of cards', '4', '154'],
            ['134', '1538880252637', '3000', 'trash bag', '4', '154'],
            ['135', '1558854000000', '7625', 'lip balm', '4', '218'],
            ['136', '1539143510877', '35000', 'a box of tissues, and a book of matches', '1', '156'],
            ['137', '1541228680156', '3000', 'A handbasket', '4', '159'],
            ['138', '1540012910561', '3000', 'perfume', '0', '158'],
            ['139', '1541107978921', '3000', 'beans', '4', '159'],
            ['140', '1542749208787', '5000', 'a roll of duct tape', '4', '176'],
            ['141', '1542163627054', '1000', 'a few batteries', '4', '176'],
            ['142', '1541023547122', '1000', 'colored pencils in muted colors', '4', '176'],
            ['143', '1540875252719', '3000', 'A bottle of pills', '4', '159'],
            ['144', '1540011630519', '3000', 'a frying pan', '0', '158'],
            ['145', '1540006087876', '3000', 'bandana', '0', '158'],
            ['146', '1539487880119', '1000', 'box of crayons', '0', '158'],
            ['147', '1541023535151', '1000', 'a roll of duct tape', '4', '176'],
            ['148', '1539495477720', '36', 'A light bulb', '0', '152'],
            ['149', '1540851443991', '1000', 'roll of stickers', '4', '176'],
            ['150', '1539483901308', '1000', 'a pack of cards', '0', '158'],
            ['151', '1539483881963', '3000', 'candle', '0', '158'],
            ['152', '1540851419916', '3000', 'roll of stickers', '4', '159'],
            ['153', '1540849707706', '3000', 'A light bulb', '4', '159'],
            ['154', '1540846602325', '3000', 'colored pencils in muted colors', '4', '159'],
            ['155', '1539412011254', '3000', 'incense holder', '0', '158'],
            ['156', '1540848929917', '1000', 'box of crayons', '4', '176'],
            ['157', '1540847778187', '1000', 'a vase of flowers', '4', '176'],
            ['158', '1540779777010', '1500', 'a pack of cards', '4', '159'],
            ['159', '1540727026238', '1500', 'bottle of ink', '4', '159'],
            ['160', '1540844431000', '1000', 'A handbasket', '4', '176'],
            ['161', '1540596582044', '33', 'yarn, and a wrench', '0', '157'],
            ['162', '1540779990755', '1000', 'a vase of flowers', '4', '176'],
            ['163', '1540727014312', '3000', 'box of crayons', '4', '159'],
            ['164', '1541228705477', '1000', 'A novel', '0', '166'],
            ['165', '1540726993698', '1', 'yarn, and a wrench', '4', '159'],
            ['166', '1540625019763', '1000', 'a few batteries', '4', '176'],
            ['167', '1540625002202', '3000', 'incense holder', '4', '159'],
            ['168', '1540624977062', '3000', 'candle', '4', '159'],
            ['169', '1540624957259', '3000', 'incense holder', '4', '159'],
            ['170', '1540624892196', '1000', 'yarn, and a wrench', '4', '176'],
            ['171', '1540691716733', '3000', 'A light bulb', '0', '166'],
            ['172', '1540627020732', '3000', 'candle', '0', '166'],
            ['173', '1540627006005', '3000', 'bottle of ink', '0', '166'],
            ['174', '1540626994568', '1000', 'A bottle of pills', '0', '166'],
            ['175', '1540624871942', '1500', 'A handbasket', '4', '159'],
            ['176', '1540598266451', '3000', 'colored pencils in muted colors', '4', '159'],
            ['177', '1540496698100', '3000', 'box of crayons', '4', '159'],
            ['178', '1540196708225', '3000', 'A light bulb', '4', '159'],
            ['179', '1540596598406', '1000', 'a roll of duct tape', '4', '176'],
            ['180', '1540596582044', '1000', 'harmonica', '4', '176'],
            ['181', '1540011843078', '3000', 'incense holder', '4', '159'],
            ['182', '1540196687974', '1000', 'bandana', '4', '176'],
            ['183', '1540159155542', '1000', 'A bottle of pills', '4', '176'],
            ['184', '1540011721455', '3000', 'a box of tissues, and a book of matches', '4', '159'],
            ['185', '1540011705228', '3000', 'a frying pan', '4', '159'],
            ['186', '1539499620577', '1000', 'A novel', '4', '176'],
            ['187', '1539457565729', '3000', 'bandana', '4', '159'],
            ['188', '1539494477672', '1000', 'trash bag', '4', '176'],
            ['189', '1539412620222', '1000', 'a pack of cards', '4', '176'],
            ['190', '1539412043533', '3000', 'box of tissues, and a book of matches', '4', '159'],
            ['191', '1539145999140', '1500', 'A novel', '4', '159'],
            ['192', '1540598351955', '1500', 'bottle of ink', '0', '166'],
            ['193', '1539412196539', '1000', 'a roll of duct tape', '4', '176'],
            ['194', '1539412065006', '1000', 'roll of stickers', '4', '176'],
            ['195', '1548479360126', '3500', 'a frying pan', '0', '179'],
            ['196', '1543785244055', '40000', 'a pack of cards', '1', '165'],
            ['197', '1544944932788', '1700', 'trash bag', '4', '177'],
            ['198', '1544904854688', '4700', 'lip balm', '4', '177'],
            ['199', '1550898479692', '3000', 'a box of tissues, and a book of matches', '0', '180'],
            ['200', '1548116957536', '3400', 'A handbasket', '0', '167'],
            ['201', '1544745626777', '5200', 'perfume', '0', '167'],
            ['202', '1558594800000', '4000', 'beans', '0', '208'],
            ['203', '1544387550262', '300', 'a roll of duct tape', '0', '167'],
            ['204', '1544818300832', '4700', 'a few batteries', '4', '177'],
            ['205', '1544777338785', '1700', 'colored pencils in muted colors', '4', '177'],
            ['206', '1544727486765', '4700', 'A bottle of pills', '4', '177'],
            ['207', '1544644991963', '4700', 'a frying pan', '4', '177'],
            ['208', '1544644751637', '3400', 'bandana', '4', '177'],
            ['209', '1544642263011', '4700', 'box of crayons', '4', '177'],
            ['210', '1544330109701', '1700', 'a roll of duct tape', '0', '167'],
            ['211', '1544600944195', '3000', 'A light bulb', '4', '177'],
            ['212', '1544516942060', '3500', 'roll of stickers', '4', '177'],
            ['213', '1544298177396', '6400', 'a pack of cards', '4', '177'],
            ['214', '1544298158206', '1700', 'candle', '4', '177'],
            ['215', '1544326977683', '6400', 'roll of stickers', '0', '167'],
            ['216', '1548797119072', '1500', 'A light bulb', '0', '180'],
            ['217', '1548970316853', '3000', 'colored pencils in muted colors', '4', '178'],
            ['218', '1548887717159', '3000', 'incense holder', '4', '178'],
            ['219', '1548887714811', '3000', 'box of crayons', '4', '178'],
            ['220', '1548119098475', '1500', 'a vase of flowers', '4', '181'],
            ['221', '1548822337057', '3000', 'a pack of cards', '4', '178'],
            ['222', '1548646208819', '3000', 'bottle of ink', '4', '178'],
            ['223', '1548555413847', '3000', 'A handbasket', '4', '178'],
            ['224', '1548119093629', '1500', 'yarn, and a wrench', '4', '181'],
            ['225', '1548491464973', '3000', 'a vase of flowers', '4', '178'],
            ['226', '1548458775750', '3000', 'box of crayons', '4', '178'],
            ['227', '1556002800000', '15000', 'A novel', '4', '218'],
            ['228', '1557471600000', '600', 'yarn, and a wrench', '4', '218'],
            ['229', '1557471600000', '600', 'a few batteries', '4', '218'],
            ['230', '1556199363962', '3000', 'incense holder', '4', '218'],
            ['231', '1548456770639', '3000', 'candle', '4', '178'],
            ['232', '1548403634999', '39', 'incense holder', '0', '169'],
            ['233', '1548455536893', '3000', 'yarn, and a wrench', '4', '178'],
            ['234', '1548359996418', '3000', 'A light bulb', '4', '178'],
            ['235', '1548120398458', '3500', 'candle', '4', '178'],
            ['236', '1555921242666', '3000', 'bottle of ink', '4', '218'],
            ['237', '1548478694802', '3000', 'A bottle of pills', '0', '179'],
            ['238', '1548117969364', '1500', 'A handbasket', '0', '179'],
            ['239', '1543630888863', '3000', 'colored pencils in muted colors', '0', '179'],
            ['240', '1555791128387', '1500', 'box of crayons', '4', '218'],
            ['241', '1548120343898', '3500', 'A light bulb', '4', '178'],
            ['242', '1548796283617', '3500', 'a roll of duct tape', '0', '180'],
            ['243', '1548555385633', '3000', 'harmonica', '0', '180'],
            ['244', '1548554819907', '3000', 'incense holder', '0', '180'],
            ['245', '1548119097197', '3000', 'bandana', '4', '178'],
            ['246', '1548119096018', '3000', 'A bottle of pills', '4', '178'],
            ['247', '1548554289743', '3000', 'a box of tissues, and a book of matches', '0', '180'],
            ['248', '1548479100894', '3000', 'a frying pan', '0', '180'],
            ['249', '1548119094886', '3000', 'A novel', '4', '178'],
            ['250', '1555791126148', '1500', 'bandana', '4', '218'],
            ['251', '1548119092537', '1500', 'trash bag', '4', '178'],
            ['252', '1548119091330', '1500', 'a pack of cards', '4', '178'],
            ['253', '1548119089883', '3000', 'box of tissues, and a book of matches', '4', '178'],
            ['254', '1555658057498', '1500', 'A novel', '4', '218'],
            ['255', '1555577960347', '1500', 'bottle of ink', '4', '218'],
            ['256', '1555573870862', '3000', 'a roll of duct tape', '4', '218'],
            ['257', '1555573869404', '3000', 'roll of stickers', '4', '218'],
            ['258', '1555573867292', '3000', 'a frying pan', '4', '218'],
            ['259', '1555555316705', '3000', 'a pack of cards', '4', '218'],
            ['260', '1550613579028', '40000', 'trash bag', '1', '174'],
            ['261', '1550614610316', '197', 'lip balm', '0', '175'],
            ['262', '1544298205091', '4700', 'a box of tissues, and a book of matches', '0', '180'],
            ['263', '1551482983241', '43', 'A handbasket', '0', '172'],
            ['264', '1555555283461', '3000', 'perfume', '4', '218'],
            ['265', '1555555281853', '3000', 'beans', '4', '218'],
            ['266', '1555357138741', '3000', 'a roll of duct tape', '4', '218'],
            ['267', '1555357136383', '3000', 'a few batteries', '4', '218'],
            ['268', '1555135681048', '1500', 'colored pencils in muted colors', '4', '218'],
            ['269', '1555135679960', '3000', 'A bottle of pills', '4', '218'],
            ['270', '1555135678936', '1500', 'a frying pan', '4', '218'],
            ['271', '1555135677786', '3000', 'bandana', '4', '218'],
            ['272', '1555135676721', '3000', 'box of crayons', '4', '218'],
            ['273', '1559429559011', '1700', 'a roll of duct tape', '0', '208'],
            ['274', '1555135675483', '1500', 'A light bulb', '4', '218'],
            ['275', '1559374624972', '100', 'roll of stickers', '0', '208'],
            ['276', '1555135673883', '3000', 'a pack of cards', '4', '218'],
            ['277', '1554943494351', '1200', 'candle', '4', '218'],
            ['278', '1554746053683', '3000', 'roll of stickers', '4', '218'],
            ['279', '1554518579471', '1200', 'A light bulb', '4', '218'],
            ['280', '1554515175900', '1200', 'colored pencils in muted colors', '4', '218'],
            ['281', '1554439808252', '1200', 'incense holder', '4', '218'],
            ['282', '1554439794884', '3000', 'box of crayons', '4', '218'],
            ['283', '1554412531299', '1200', 'a vase of flowers', '4', '218'],
            ['284', '1554412461207', '1200', 'a pack of cards', '4', '218'],
            ['285', '1554411003873', '1200', 'bottle of ink', '4', '218'],
            ['286', '1554410988443', '1200', 'A handbasket', '4', '218'],
            ['287', '1554410645324', '1200', 'yarn, and a wrench', '4', '218'],
            ['288', '1554164398810', '1200', 'a vase of flowers', '4', '218'],
            ['289', '1554164388837', '1200', 'box of crayons', '4', '218'],
            ['290', '1554164323140', '1200', 'A novel', '4', '218'],
            ['291', '1554164287939', '1200', 'yarn, and a wrench', '4', '218'],
            ['292', '1553824820198', '1200', 'a few batteries', '4', '218'],
            ['293', '1553824792541', '1200', 'incense holder', '4', '218'],
            ['294', '1553824774461', '1200', 'candle', '4', '218'],
            ['295', '1553824752889', '1200', 'incense holder', '4', '218'],
            ['296', '1553824675486', '1200', 'yarn, and a wrench', '4', '218'],
            ['297', '1557009768187', '1500', 'A light bulb', '0', '208'],
            ['298', '1556200224304', '1500', 'candle', '0', '208'],
            ['299', '1553824658518', '1200', 'bottle of ink', '4', '218'],
            ['300', '1553274692981', '1200', 'A bottle of pills', '4', '218'],
            ['301', '1555720762144', '1700', 'A handbasket', '0', '208'],
            ['302', '1555133049839', '3000', 'colored pencils in muted colors', '0', '208'],
            ['303', '1555133048511', '1500', 'box of crayons', '0', '208'],
            ['304', '1555133015352', '1200', 'A light bulb', '0', '208'],
            ['305', '1555132951169', '1200', 'a roll of duct tape', '0', '208'],
            ['306', '1555132808015', '1200', 'harmonica', '0', '208'],
            ['307', '1553274675120', '1200', 'incense holder', '4', '218'],
            ['308', '1552811893938', '1700', 'bandana', '4', '218'],
            ['309', '1552772051980', '1700', 'A bottle of pills', '4', '218'],
            ['310', '1552772001609', '2000', 'a box of tissues, and a book of matches', '4', '218'],
            ['311', '1552602332412', '2000', 'a frying pan', '4', '218'],
            ['312', '1552465020202', '3000', 'A novel', '4', '218'],
            ['313', '1552464962334', '3500', 'bandana', '4', '218'],
            ['314', '1552257702149', '1700', 'trash bag', '4', '218'],
            ['315', '1552257671132', '11666', 'a pack of cards', '4', '218'],
            ['316', '1552257458105', '1700', 'box of tissues, and a book of matches', '4', '218'],
            ['317', '1552257399067', '3500', 'A novel', '4', '218'],
            ['318', '1550006011023', '13500', 'bottle of ink', '4', '218'],
            ['319', '1549922754983', '13500', 'a roll of duct tape', '4', '218'],
            ['320', '1549296156054', '3000', 'roll of stickers', '4', '218'],
            ['321', '1549274239385', '3000', 'a frying pan', '4', '218'],
            ['322', '1549064988323', '3000', 'a pack of cards', '4', '218'],
            ['323', '1549062246382', '3000', 'trash bag', '4', '218'],
            ['324', '1556423875768', '3000', 'lip balm', '0', '207'],
            ['325', '1555115126840', '1200', 'a box of tissues, and a book of matches', '0', '208'],
            ['326', '1556331350460', '3000', 'A handbasket', '0', '207'],
            ['327', '1555736509083', '3000', 'perfume', '0', '207'],
            ['328', '1548822365340', '3500', 'beans', '4', '218'],
            ['329', '1548491462740', '1500', 'a roll of duct tape', '4', '218'],
            ['330', '1548467730046', '1500', 'a few batteries', '4', '218'],
            ['331', '1548120486886', '3500', 'colored pencils in muted colors', '4', '218'],
            ['332', '1554615058250', '2400', 'A bottle of pills', '0', '208'],
            ['333', '1556320885830', '3000', 'a frying pan', '4', '-1'],
            ['334', '1555726882588', '3000', 'bandana', '0', '207'],
            ['335', '1556423865078', '3000', 'box of crayons', '4', '-1'],
            ['336', '1555720724686', '3000', 'a roll of duct tape', '0', '207'],
            ['337', '1554587151197', '100', 'A light bulb', '0', '208'],
            ['338', '1557532636534', '11900', 'roll of stickers', '0', '204'],
            ['339', '1557865338389', '44000', 'a pack of cards', '0', '203'],
            ['340', '1557865391494', '14200', 'candle', '0', '202'],
            ['341', '1552778147278', '3000', 'roll of stickers', '0', '208'],
            ['342', '1544387539969', '1700', 'A light bulb', '0', '208'],
            ['343', '1504335600000', '20000', 'colored pencils in muted colors', '1', '53'],
            ['344', '1542960000000', '37', 'incense holder', '0', '164'],
            ['345', '1545984000000', '50', 'box of crayons', '0', '168'],
            ['346', '1548835200000', '400', 'a vase of flowers', '0', '208'],
            ['347', '1553238000000', '40', 'a pack of cards', '0', '186'],
            ['348', '1556175600000', '34079', 'bottle of ink', '0', '199'],
            ['349', '1556262000000', '25', 'A handbasket', '0', '200'],
            ['350', '1558681200000', '18', 'yarn, and a wrench', '0', '205'],
            ['351', '1556607600000', '68155', 'a vase of flowers', '0', '206'],
            ['352', '1553138247048', '3500', 'box of crayons', '0', '208'],
            ['353', '1556175600000', '443', 'A novel', '0', '208'],
            ['354', '1561705200000', '27', 'yarn, and a wrench', '0', '212'],
            ['355', '1560236400000', '29100', 'a few batteries', '0', '213'],
            ['356', '1556434800000', '1200', 'incense holder', '4', '214'],
            ['357', '1556434800000', '69200', 'candle', '4', '214'],
            ['358', '1558162800000', '1800', 'incense holder', '4', '-1'],
            ['359', '1557471600000', '1200', 'yarn, and a wrench', '4', '-1'],
            ['360', '1548120439384', '3500', 'A light bulb', '4', '218'],
            ['361', '1548120465120', '3500', 'candle', '4', '218'],
            ['362', '1557471600000', '1500', 'bottle of ink', '4', '-1'],
            ['363', '1548195432111', '3500', 'A bottle of pills', '4', '218'],
            ['364', '1556434800000', '8100', 'A handbasket', '4', '215'],
            ['365', '1539065272099', '3000', 'colored pencils in muted colors', '4', '218'],
            ['366', '1558854000000', '1800', 'box of crayons', '0', '-1'],
            ['367', '1565506800000', '1500', 'A light bulb', '4', '-1'],
            ['368', '1565506800000', '1000', 'a roll of duct tape', '1', '217'],
            ['369', '1564124400000', '20', 'harmonica', '0', '219'],
            ['370', '1565583494482', '3500', 'incense holder', '4', '-1'],
            ['371', '1554534000000', '16308', 'bandana', '1', '216'],
            ['372', '1561964400000', '35000', 'A bottle of pills', '1', '-1']
        ],
        expense: [
            ['id', 'date', 'amount', 'description', 'paymentTypeId', 'recipientId', 'statementId'],
            ['0', '1362124800000', '52166', 'a vase of flowers', '0', '0', '0'],
            ['1', '1364803200000', '20279', 'colored pencils in muted colors', '0', '0', '1'],
            ['2', '1367395200000', '0', 'a box of tissues, and a book of matches', '0', '0', '2'],
            ['3', '1370073600000', '0', 'bandana', '0', '0', '3'],
            ['4', '1372665600000', '6400', 'candle', '0', '0', '4'],
            ['5', '1375344000000', '0', 'A handbasket', '0', '0', '-1'],
            ['6', '1378022400000', '3600', 'yarn, and a wrench', '0', '0', '6'],
            ['7', '1380614400000', '17000', 'a few batteries', '0', '0', '7'],
            ['8', '1383292800000', '10351', 'A light bulb', '0', '0', '8'],
            ['9', '1385884800000', '0', 'a frying pan', '0', '0', '9'],
            ['10', '1388563200000', '6677', 'a roll of duct tape', '0', '0', '-1'],
            ['11', '1391241600000', '47630', 'box of crayons', '0', '0', '11'],
            ['12', '1393660800000', '18337', 'incense holder', '0', '0', '12'],
            ['13', '1396339200000', '0', 'a vase of flowers', '0', '0', '13'],
            ['14', '1398931200000', '43879', 'A bottle of pills', '0', '0', '14'],
            ['15', '1401609600000', '1600', 'roll of stickers', '0', '0', '15'],
            ['16', '1404201600000', '4399', 'a pack of cards', '0', '0', '16'],
            ['17', '1406880000000', '0', 'a box of tissues, and a book of matches', '0', '0', '17'],
            ['18', '1409558400000', '0', 'A novel', '0', '0', '18'],
            ['19', '1412150400000', '0', 'bottle of ink', '0', '0', '19'],
            ['20', '1414828800000', '4700', 'box of crayons', '0', '0', '20'],
            ['21', '1417420800000', '11353', 'a roll of duct tape', '0', '0', '21'],
            ['22', '1420099200000', '46050', 'A light bulb', '0', '0', '22'],
            ['23', '1422777600000', '169157', 'A handbasket', '0', '0', '23'],
            ['24', '1425196800000', '19805', 'colored pencils in muted colors', '0', '0', '24'],
            ['25', '1427875200000', '49277', 'bandana', '0', '0', '25'],
            ['26', '1430467200000', '3000', 'A bottle of pills', '0', '0', '26'],
            ['27', '1433145600000', '0', 'yarn, and a wrench', '0', '0', '27'],
            ['28', '1435737600000', '0', 'a few batteries', '0', '0', '28'],
            ['29', '1438416000000', '0', 'candle', '0', '0', '29'],
            ['30', '1441094400000', '174506', 'incense holder', '0', '0', '30'],
            ['31', '1443686400000', '23250', 'a roll of duct tape', '0', '0', '31'],
            ['32', '1446364800000', '16243', 'roll of stickers', '0', '0', '32'],
            ['33', '1448956800000', '0', 'a frying pan', '0', '0', '33'],
            ['34', '1451635200000', '4000', 'a pack of cards', '0', '0', '34'],
            ['35', '1454313600000', '21322', 'A novel', '0', '0', '35'],
            ['36', '1456819200000', '0', 'bottle of ink', '0', '0', '36'],
            ['37', '1459497600000', '10940', 'box of crayons', '0', '0', '37'],
            ['38', '1462089600000', '44328', 'A light bulb', '0', '0', '38'],
            ['39', '1464768000000', '18835', 'trash bag', '0', '0', '39'],
            ['40', '1467360000000', '12150', 'lip balm', '0', '0', '40'],
            ['41', '1470038400000', '103328', 'incense holder', '0', '0', '41'],
            ['42', '1472716800000', '27189', 'a box of tissues, and a book of matches', '0', '0', '42'],
            ['43', '1475308800000', '137500', 'A handbasket', '0', '0', '43'],
            ['44', '1477987200000', '59260', 'perfume', '0', '0', '44'],
            ['45', '1480579200000', '0', 'beans', '0', '0', '45'],
            ['46', '1483257600000', '83323', 'a roll of duct tape', '0', '0', '46'],
            ['47', '1485936000000', '14500', 'a few batteries', '0', '0', '47'],
            ['48', '1488355200000', '71860', 'colored pencils in muted colors', '0', '0', '48'],
            ['49', '1491033600000', '5609', 'A bottle of pills', '0', '0', '49'],
            ['50', '1493625600000', '25737', 'a frying pan', '0', '0', '50'],
            ['51', '1496304000000', '0', 'bandana', '0', '0', '51'],
            ['52', '1505721600000', '113985', 'yarn, and a wrench', '1', '12', '69'],
            ['53', '1505721600000', '4000', 'A light bulb', '1', '13', '75'],
            ['54', '1506499200000', '31017', 'candle', '1', '18', '68'],
            ['55', '1507276800000', '4000', 'a vase of flowers', '1', '13', '76'],
            ['56', '1508745600000', '16', 'box of crayons', '0', '45', '70'],
            ['57', '1508745600000', '33', 'a roll of duct tape', '0', '45', '71'],
            ['58', '1509955200000', '4378', 'harmonica', '1', '26', '77'],
            ['59', '1512374400000', '157110', 'incense holder', '6', '4', '84'],
            ['60', '1512374400000', '6817', 'roll of stickers', '1', '26', '85'],
            ['61', '1516003200000', '7232', 'a pack of cards', '1', '26', '89'],
            ['62', '1516435200000', '1540', 'A handbasket', '1', '26', '90'],
            ['63', '1516521600000', '183333', 'yarn, and a wrench', '1', '34', '94'],
            ['64', '1516867200000', '1', 'a box of tissues, and a book of matches', '0', '31', '88'],
            ['65', '1517990400000', '1652', 'a frying pan', '6', '11', '95'],
            ['66', '1520409600000', '20116', 'A novel', '6', '0', '97'],
            ['67', '1522051200000', '45411', 'bandana', '6', '0', '119'],
            ['68', '1522224000000', '661', 'bottle of ink', '6', '0', '120'],
            ['69', '1522915200000', '2200', 'A bottle of pills', '6', '0', '121'],
            ['70', '1523001600000', '20150', 'A light bulb', '1', '13', '122'],
            ['71', '1523260800000', '36884', 'colored pencils in muted colors', '6', '43', '123'],
            ['72', '1523520000000', '7970', 'box of crayons', '6', '0', '124'],
            ['73', '1523606400000', '12113', 'a vase of flowers', '6', '4', '125'],
            ['74', '1523865600000', '6323', 'incense holder', '6', '0', '126'],
            ['75', '1523952000000', '21800', 'trash bag', '6', '0', '127'],
            ['76', '1524124800000', '69528', 'candle', '6', '0', '128'],
            ['77', '1525420800000', '84670', 'a pack of cards', '6', '42', '131'],
            ['78', '1528963200000', '60000', 'harmonica', '4', '17', '134'],
            ['79', '1530691200000', '1418', 'a few batteries', '6', '7', '137'],
            ['80', '1531867513534', '17925', 'colored pencils in muted colors', '6', '3', '138'],
            ['81', '1531900800000', '1114', 'a frying pan', '6', '3', '139'],
            ['82', '1536551865845', '881', 'bandana', '4', '14', '153'],
            ['83', '1535775647917', '165', 'a roll of duct tape', '4', '14', '153'],
            ['84', '1534118906823', '2753', 'A handbasket', '6', '4', '146'],
            ['85', '1534129865896', '7030', 'yarn, and a wrench', '6', '40', '149'],
            ['86', '1534718251257', '3364', 'box of crayons', '6', '2', '147'],
            ['87', '1535507360958', '3000', 'incense holder', '6', '13', '148'],
            ['88', '1533963847234', '2000', 'roll of stickers', '4', '1', '153'],
            ['89', '1536309888770', '5148', 'colored pencils in muted colors', '6', '3', '150'],
            ['90', '1533024000000', '1500', 'A novel', '4', '1', '153'],
            ['91', '1537767093624', '604', 'a box of tissues, and a book of matches', '6', '41', '151'],
            ['92', '1542139507956', '1000', 'A light bulb', '4', '5', '159'],
            ['93', '1541228738715', '2000', 'harmonica', '6', '13', '160'],
            ['94', '1541296813938', '2000', 'bottle of ink', '6', '13', '161'],
            ['95', '1541904211612', '18827', 'A bottle of pills', '6', '43', '162'],
            ['96', '1541023452468', '1000', 'a roll of duct tape', '4', '28', '159'],
            ['97', '1548117126192', '3000', 'bandana', '4', '22', '176'],
            ['98', '1542568983031', '30000', 'A handbasket', '4', '17', '163'],
            ['99', '1547107653000', '3000', 'candle', '4', '27', '176'],
            ['100', '1543098045215', '1500', 'a few batteries', '4', '20', '176'],
            ['101', '1543640985146', '3000', 'a frying pan', '0', '38', '167'],
            ['102', '1542569046965', '500', 'incense holder', '4', '44', '176'],
            ['103', '1548106917834', '131767', 'a vase of flowers', '6', '4', '170'],
            ['104', '1542249012403', '1000', 'yarn, and a wrench', '4', '24', '176'],
            ['105', '1548305634616', '1050', 'box of crayons', '6', '9', '171'],
            ['106', '1548307116023', '2786', 'A light bulb', '4', '39', '178'],
            ['107', '1548645616031', '1609', 'colored pencils in muted colors', '6', '23', '173'],
            ['108', '1565334000000', '5995', 'a pack of cards', '4', '50', '218'],
            ['109', '1550006103136', '27000', 'trash bag', '1', '33', '187'],
            ['110', '1550006128367', '1000', 'bottle of ink', '1', '33', '217'],
            ['111', '1565334000000', '1200', 'roll of stickers', '4', '50', '218'],
            ['112', '1550467592815', '4697', 'A novel', '0', '25', '175'],
            ['113', '1565074800000', '10834', 'incense holder', '4', '51', '218'],
            ['114', '1565074800000', '1758', 'candle', '4', '50', '218'],
            ['115', '1552116040000', '17500', 'bandana', '6', '13', '182'],
            ['116', '1564902000000', '1333', 'harmonica', '4', '50', '218'],
            ['117', '1552383434684', '155378', 'a few batteries', '0', '35', '183'],
            ['118', '1564902000000', '2748', 'A light bulb', '4', '49', '218'],
            ['119', '1564642800000', '25000', 'a roll of duct tape', '4', '12', '218'],
            ['120', '1556348400000', '1456', 'box of crayons', '4', '48', '218'],
            ['121', '1553025534267', '10400', 'A handbasket', '6', '37', '184'],
            ['122', '1553065393291', '29049', 'a frying pan', '6', '4', '185'],
            ['123', '1554577018855', '10000', 'a pack of cards', '1', '32', '189'],
            ['124', '1554579215755', '16308', 'A bottle of pills', '1', '15', '216'],
            ['125', '1554956878626', '2421', 'A novel', '6', '10', '190'],
            ['126', '1558164114238', '5504', 'roll of stickers', '4', '20', '218'],
            ['127', '1557641086076', '1872', 'yarn, and a wrench', '4', '16', '218'],
            ['128', '1555570815623', '2461', 'bandana', '4', '44', '218'],
            ['129', '1555135439651', '4695', 'a box of tissues, and a book of matches', '4', '44', '218'],
            ['130', '1555227459235', '39417', 'a vase of flowers', '6', '8', '191'],
            ['131', '1555570581193', '3514', 'bottle of ink', '6', '1', '192'],
            ['132', '1555570634290', '991', 'A light bulb', '6', '11', '194'],
            ['133', '1555570672745', '9000', 'a roll of duct tape', '6', '30', '193'],
            ['134', '1555135359698', '989', 'box of crayons', '4', '44', '218'],
            ['135', '1555804265564', '500', 'a few batteries', '0', '6', '208'],
            ['136', '1556200246367', '1943', 'candle', '0', '25', '208'],
            ['137', '1556250866442', '6711', 'a frying pan', '6', '10', '197'],
            ['138', '1556742945536', '10000', 'incense holder', '0', '36', '201'],
            ['139', '1556529122064', '25000', 'harmonica', '0', '21', '201'],
            ['140', '1555135272561', '834', 'roll of stickers', '4', '44', '218'],
            ['141', '1553025422461', '3000', 'A bottle of pills', '4', '19', '218'],
            ['142', '1548835200000', '400', 'A handbasket', '0', '25', '180'],
            ['143', '1552546800000', '80500', 'a roll of duct tape', '1', '53', '188'],
            ['144', '1555570800000', '546', 'A light bulb', '6', '46', '195'],
            ['145', '1555657200000', '58890', 'yarn, and a wrench', '6', '47', '196'],
            ['146', '1556175600000', '5464', 'colored pencils in muted colors', '6', '8', '198'],
            ['147', '1557212400000', '13474', 'bandana', '1', '15', '209'],
            ['148', '1560322800000', '30549', 'a frying pan', '1', '54', '210'],
            ['149', '1560322800000', '30549', 'a box of tissues, and a book of matches', '1', '55', '211'],
            ['150', '1555135316988', '4620', 'box of crayons', '4', '44', '218'],
            ['151', '1552773438160', '3000', 'roll of stickers', '4', '16', '218'],
            ['152', '1552257230255', '1500', 'candle', '4', '44', '218'],
            ['153', '1552465114340', '1200', 'incense holder', '4', '29', '218'],
            ['154', '1550467625380', '600', 'a vase of flowers', '4', '29', '218'],
            ['155', '1551581360788', '1500', 'A light bulb', '4', '44', '218'],
            ['156', '1549047297710', '9394', 'a few batteries', '4', '20', '218'],
            ['157', '1550284485442', '178', 'yarn, and a wrench', '4', '20', '218'],
            ['158', '1565586742646', '3500', 'box of crayons', '6', '52', '221'],
            ['159', '1565586860212', '700', 'A handbasket', '6', '52', '220'],
            ['160', '1564642800000', '822', 'a vase of flowers', '6', '56', '222']
        ],
        recipient: [
            ['id', 'name'],
            ['0', 'costco'],
            ['1', 'amazon'],
            ['2', 'kid\'s club / salon at kid\'s club'],
            ['3', 'kiehl\'s'],
            ['4', 'kumon learning center'],
            ['5', 'lucky brand'],
            ['6', 'madewell'],
            ['7', 'management office'],
            ['8', 'margaret o\'leary'],
            ['9', 'marine layer'],
            ['10', 'market optical'],
            ['11', 'menchie\'s'],
            ['12', 'mercer'],
            ['13', 'metropolitan pilates'],
            ['14', 'microsoft'],
            ['15', 'mr. west cafe bar'],
            ['16', 'mud bay'],
            ['17', 'oiselle'],
            ['18', 'paint the town'],
            ['19', 'paper source'],
            ['20', 'papyrus'],
            ['21', 'pasta & co.'],
            ['22', 'piatti ristorante & bar'],
            ['23', 'pottery barn'],
            ['24', 'pottery barn kids'],
            ['25', 'rachel\'s ginger beer'],
            ['26', 'ram restaurant & brewery'],
            ['27', 'ravenna gardens'],
            ['28', 'rh gallery'],
            ['29', 'room & board'],
            ['30', 'scotch & soda'],
            ['31', 'seattle sun tan'],
            ['32', 'seattle team shop'],
            ['33', 'sephora'],
            ['34', 'skinspirit'],
            ['35', 'soccer west'],
            ['36', 'sole food'],
            ['37', 'something silver'],
            ['38', 'coming soonsoulcycle'],
            ['39', 'starbucks'],
            ['40', 'sunglass hut'],
            ['41', 'tesla'],
            ['42', 'the art study'],
            ['43', 'the confectionery'],
            ['44', 'the frye company'],
            ['45', 'the north face'],
            ['46', 'the ups store'],
            ['47', 'tommy bahama'],
            ['48', 'trophy cupcakes & party'],
            ['49', 'twist'],
            ['50', 'veggie grill'],
            ['51', 'verizon wireless'],
            ['52', 'village shoe repair'],
            ['53', 'virginia mason'],
            ['54', 'warby parker'],
            ['55', 'williams sonoma'],
            ['56', 'yves delorme'],
            ['57', 'trader joes']
        ],
        paymentType: [
            ['id', 'name'],
            ['0', 'cash'],
            ['1', 'check'],
            ['4', 'venmo'],
            ['6', 'debit']
        ],
        statement: [
            ['id', 'date', 'confirmed'],
            ['0', '1506063600000', '1'],
            ['1', '1505631600000', '1'],
            ['2', '1504335600000', '1'],
            ['3', '1504335600000', '1'],
            ['4', '1498892400000', '1'],
            ['5', '1496304000000', '1'],
            ['6', '1493625600000', '1'],
            ['7', '1491033600000', '1'],
            ['8', '1488355200000', '1'],
            ['9', '1485936000000', '1'],
            ['10', '1483257600000', '0'],
            ['11', '1480579200000', '1'],
            ['12', '1477987200000', '1'],
            ['13', '1475308800000', '1'],
            ['14', '1472716800000', '1'],
            ['15', '1470038400000', '0'],
            ['16', '1467360000000', '1'],
            ['17', '1464768000000', '1'],
            ['18', '1462089600000', '1'],
            ['19', '1459497600000', '1'],
            ['20', '1456819200000', '1'],
            ['21', '1454313600000', '1'],
            ['22', '1451635200000', '1'],
            ['23', '1448956800000', '1'],
            ['24', '1446364800000', '1'],
            ['25', '1443686400000', '1'],
            ['26', '1441094400000', '1'],
            ['27', '1438416000000', '1'],
            ['28', '1435737600000', '1'],
            ['29', '1433145600000', '1'],
            ['30', '1430467200000', '1'],
            ['31', '1427875200000', '1'],
            ['32', '1425196800000', '1'],
            ['33', '1422777600000', '1'],
            ['34', '1420099200000', '1'],
            ['35', '1417420800000', '1'],
            ['36', '1414828800000', '1'],
            ['37', '1412150400000', '1'],
            ['38', '1409558400000', '1'],
            ['39', '1406880000000', '1'],
            ['40', '1404201600000', '1'],
            ['41', '1401609600000', '1'],
            ['42', '1398931200000', '1'],
            ['43', '1396339200000', '1'],
            ['44', '1393660800000', '1'],
            ['45', '1391241600000', '1'],
            ['46', '1388563200000', '1'],
            ['47', '1385884800000', '1'],
            ['48', '1383289200000', '1'],
            ['49', '1380610800000', '1'],
            ['50', '1378018800000', '1'],
            ['51', '1375340400000', '1'],
            ['52', '1372662000000', '1'],
            ['53', '1367391600000', '1'],
            ['54', '1370070000000', '1'],
            ['55', '1364799600000', '1'],
            ['56', '1362124800000', '1'],
            ['57', '1508828400000', '1'],
            ['58', '1508828400000', '1'],
            ['59', '1509001200000', '1'],
            ['60', '1509087600000', '1'],
            ['61', '1508742000000', '1'],
            ['62', '1508742000000', '1'],
            ['63', '1508828400000', '1'],
            ['64', '1508828400000', '1'],
            ['65', '1508828400000', '1'],
            ['66', '1508742000000', '1'],
            ['67', '1508742000000', '1'],
            ['68', '1508742000000', '1'],
            ['69', '1508742000000', '1'],
            ['70', '1507618800000', '1'],
            ['71', '1506582000000', '1'],
            ['72', '1511337600000', '1'],
            ['73', '1511510400000', '1'],
            ['74', '1509346800000', '1'],
            ['75', '1509606000000', '1'],
            ['76', '1509606000000', '1'],
            ['77', '1510560000000', '1'],
            ['78', '1512374400000', '1'],
            ['79', '1512374400000', '1'],
            ['80', '1512460800000', '1'],
            ['81', '1513929600000', '1'],
            ['82', '1512374400000', '1'],
            ['83', '1512374400000', '1'],
            ['84', '1512115200000', '1'],
            ['85', '1512374400000', '1'],
            ['86', '1516953600000', '1'],
            ['87', '1516867200000', '1'],
            ['88', '1516867200000', '1'],
            ['89', '1516435200000', '1'],
            ['90', '1516003200000', '1'],
            ['91', '1516521600000', '1'],
            ['92', '1518508800000', '1'],
            ['93', '1517212800000', '1'],
            ['94', '1517990400000', '1'],
            ['95', '1519372800000', '1'],
            ['96', '1521788400000', '1'],
            ['97', '1520409600000', '1'],
            ['98', '1523516400000', '1'],
            ['99', '1523602800000', '1'],
            ['100', '1524726000000', '1'],
            ['101', '1524812400000', '1'],
            ['102', '1522047600000', '1'],
            ['103', '1522220400000', '1'],
            ['104', '1522911600000', '1'],
            ['105', '1524639600000', '1'],
            ['106', '1524639600000', '1'],
            ['107', '1524639600000', '1'],
            ['108', '1524639600000', '1'],
            ['109', '1523430000000', '1'],
            ['110', '1523430000000', '1'],
            ['111', '1524466800000', '1'],
            ['112', '1523257200000', '1'],
            ['113', '1523257200000', '1'],
            ['114', '1523257200000', '1'],
            ['115', '1523257200000', '1'],
            ['116', '1523257200000', '1'],
            ['117', '1522911600000', '1'],
            ['118', '1522911600000', '1'],
            ['119', '1524121200000', '1'],
            ['120', '1523948400000', '1'],
            ['121', '1523862000000', '1'],
            ['122', '1523257200000', '1'],
            ['123', '1522998000000', '1'],
            ['124', '1523430000000', '1'],
            ['125', '1523343600000', '1'],
            ['126', '1523343600000', '1'],
            ['127', '1523343600000', '1'],
            ['128', '1523343600000', '1'],
            ['129', '1527231600000', '1'],
            ['130', '1526886000000', '1'],
            ['131', '1525417200000', '1'],
            ['132', '1529650800000', '1'],
            ['133', '1529305200000', '1'],
            ['134', '1528959600000', '1'],
            ['135', '1531810800000', '1'],
            ['136', '1531465200000', '1'],
            ['137', '1531897200000', '1'],
            ['138', '1530687600000', '1'],
            ['139', '1532674800000', '1'],
            ['140', '1534662000000', '1'],
            ['141', '1535439600000', '1'],
            ['142', '1534316400000', '1'],
            ['143', '1533711600000', '1'],
            ['144', '1534834800000', '1'],
            ['145', '1533711600000', '1'],
            ['146', '1534057200000', '1'],
            ['147', '1534834800000', '1'],
            ['148', '1533711600000', '1'],
            ['149', '1535094000000', '1'],
            ['150', '1538118000000', '1'],
            ['151', '1537772400000', '1'],
            ['152', '1536390000000', '1'],
            ['153', '1538982000000', '1'],
            ['154', '1539068400000', '1'],
            ['155', '1539932400000', '1'],
            ['156', '1540537200000', '1'],
            ['157', '1539154800000', '1'],
            ['158', '1539068400000', '1'],
            ['159', '1541404800000', '1'],
            ['160', '1542960000000', '1'],
            ['161', '1542787200000', '1'],
            ['162', '1542009600000', '1'],
            ['163', '1541228400000', '1'],
            ['164', '1542614400000', '1'],
            ['165', '1544342400000', '1'],
            ['166', '1545984000000', '1'],
            ['167', '1543651200000', '1'],
            ['168', '1543737600000', '1'],
            ['169', '1548403200000', '1'],
            ['170', '1548230400000', '1'],
            ['171', '1548057600000', '1'],
            ['172', '1550822400000', '1'],
            ['173', '1548835200000', '1'],
            ['174', '1548576000000', '1'],
            ['175', '1550563200000', '1'],
            ['176', '1548835200000', '1'],
            ['177', '1548835200000', '1'],
            ['178', '1550563200000', '1'],
            ['179', '1550563200000', '1'],
            ['180', '1548835200000', '1'],
            ['181', '1548921600000', '1'],
            ['182', '1552546800000', '1'],
            ['183', '1552460400000', '1'],
            ['184', '1552978800000', '1'],
            ['185', '1552374000000', '1'],
            ['186', '1552118400000', '1'],
            ['187', '1553238000000', '1'],
            ['188', '1553065200000', '1'],
            ['189', '1556175600000', '1'],
            ['190', '1556175600000', '1'],
            ['191', '1556175600000', '1'],
            ['192', '1555570800000', '1'],
            ['193', '1555570800000', '1'],
            ['194', '1555657200000', '1'],
            ['195', '1556175600000', '1'],
            ['196', '1555570800000', '1'],
            ['197', '1554966000000', '1'],
            ['198', '1555225200000', '1'],
            ['199', '1555570800000', '1'],
            ['200', '1556262000000', '1'],
            ['201', '1557212400000', '1'],
            ['202', '1557471600000', '1'],
            ['203', '1558681200000', '1'],
            ['204', '1556607600000', '1'],
            ['205', '1557817200000', '1'],
            ['206', '1556607600000', '1'],
            ['207', '1557817200000', '1'],
            ['208', '1556434800000', '1'],
            ['209', '1558594800000', '1'],
            ['210', '1560322800000', '1'],
            ['211', '1560322800000', '1'],
            ['212', '1561705200000', '1'],
            ['213', '1560236400000', '1'],
            ['214', '1565506800000', '0'],
            ['215', '1565518269687', '0'],
            ['216', '1565506800000', '1'],
            ['217', '1565506800000', '1'],
            ['218', '1565560189736', '0'],
            ['219', '1564124400000', '1'],
            ['220', '1565593200000', '0'],
            ['221', '1565593200000', '0'],
            ['222', '1564642800000', '0']
        ],
        attendance: [
            ['id', 'date', 'memberIds', 'quarterId'],
            ['0', '1530864000000', '0,2,7,9,10,15,19,21,27,29,43', '8074'],
            ['1', '1531555200000', '0,12,15,19,24,27,29,42', '8074'],
            ['2', '1532073600000', '9,10,12,13,14,15,19,24,27,29,42,43', '8074'],
            ['3', '1532678400000', '3,7,12,13,14,15,19,24,26,27,29,30,39', '8074'],
            ['4', '1533283200000', '12,15,19,27', '8074'],
            ['5', '1534579200000', '0,7,10,19,21,27,42', '8074'],
            ['6', '1535788800000', '7,12,19,21,24,27,42,43', '8074'],
            ['7', '1536307200000', '12,19,21,24,27,31,42', '8074'],
            ['8', '1538121600000', '0,3,12,13,14,15,19,21,23,24,26,27,31,32,34,36,38,39,42', '8075'],
            ['9', '1538726400000', '0,4,12,13,14,15,19,21,23,24,26,27,29,32,34,38,39,42', '8075'],
            ['10', '1538812800000', '3,5,8,12,15,18,19,20,21,22,23,24,25,26,27,28,29,33,35,38,39,40,44', '8075'],
            ['11', '1539331200000', '4,5,7,12,13,14,15,16,18,19,20,21,22,23,24,25,27,28,31,34,35,36,37,38,39,40,41,42,44', '8075'],
            ['12', '1539417600000', '0,2,4,5,8,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,31,33,36,37,38,39,40,44', '8075'],
            ['13', '1539504000000', '0,2,4,5,8,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,31,33,36,37,38,39,40,44', '8075'],
            ['14', '1539936000000', '4,5,6,8,11,12,13,14,15,16,18,19,20,21,22,23,24,25,27,28,29,32,33,35,36,37,38,39,40,41,42,44', '8075'],
            ['15', '1540022400000', '4,6,8,11,12,14,15,20,21,23,24,28,29,33,34,36,38,39,44', '8075'],
            ['16', '1540540800000', '4,5,8,11,12,13,14,15,16,18,20,21,22,23,24,28,29,32,33,36,37,38,39,40,41,42,44', '8075'],
            ['17', '1540627200000', '0,1,4,6,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,28,29,32,33,35,38,39,40', '8075'],
            ['18', '1541145600000', '3,4,5,8,12,13,15,16,18,19,20,21,22,23,24,29,31,32,33,36,37,38,39,40,42,44', '8075'],
            ['19', '1541232000000', '1,3,4,5,8,11,12,15,18,19,21,22,23,24,25,26,27,29,31,33,36,38,39,40,44', '8075'],
            ['20', '1542355200000', '0,4,8,9,11,12,13,14,15,16,19,20,22,23,24,25,27,34,36,37,39,40,41,44', '8075'],
            ['21', '1542441600000', '0,1,6,11,12,13,14,15,19,21,22,23,24,28,29,31,32,34,36,38,39,40,42', '8075'],
            ['22', '1542614400000', '0,1,6,11,12,13,14,15,19,21,22,23,24,29,31,32,34,36,38,39,40,42', '8075'],
            ['23', '1543564800000', '0,3,4,8,11,12,13,14,15,16,18,19,20,21,22,23,24,25,27,31,33,34,35,36,39,40,42,44', '8075'],
            ['24', '1544169600000', '3,4,8,11,12,15,17,20,21,27,31,33,37,38,39,40,41,44', '8075'],
            ['25', '1544256000000', '4,8,12,13,15,19,20,21,24,25,27,31,33,37,38,39,40', '8075'],
            ['26', '1547193600000', '0,3,4,5,11,12,16,19,20,21,24,25,27,31,33,36,37,38,39,40,41,42,44', '8076'],
            ['27', '1547280000000', '2,3,5,6,11,12,13,14,18,20,21,22,25,27,29,32,33,36,37,40,41,44', '8076'],
            ['28', '1547884800000', '4,5,8,11,12,15,16,19,20,21,22,23,27,29,31,32,33,34,36,38,40,42,44', '8076'],
            ['29', '1548403200000', '3,4,5,8,11,12,13,14,15,16,18,19,20,21,22,23,24,26,27,31,33,34,37,38,39,40,41,42,44', '8076'],
            ['30', '1548489600000', '4,5,6,8,11,12,13,15,16,20,21,22,23,24,26,27,29,31,32,33,37,38,39,40,41,42,44', '8076'],
            ['31', '1550217600000', '5,8,11,15,16,18,19,20,21,22,23,24,27,29,31,33,34,36,37,38,39,40,42,44', '8076'],
            ['32', '1550822400000', '3,4,5,8,12,13,14,15,18,20,21,23,24,25,27,32,37,38,39,40,44', '8076'],
            ['33', '1550908800000', '0,3,4,5,6,8,11,12,13,14,15,16,18,19,20,21,23,24,27,29,31,33,34,38,39,40,42,44', '8076'],
            ['34', '1551427200000', '0,3,4,5,8,11,12,13,14,15,16,18,20,21,23,24,25,27,29,31,32,33,34,38,39,40,42,44', '8076'],
            ['35', '1551513600000', '0,3,4,5,8,11,12,14,15,16,18,21,22,23,24,27,28,29,31,32,33,36,37,40,42,44', '8076'],
            ['36', '1552032000000', '0,3,4,5,8,11,12,13,14,15,16,17,20,21,23,24,25,27,29,31,33,34,37,38,39,40,42,44', '8076'],
            ['37', '1552118400000', '8,11,12,13,15,16,19,20,21,23,24,25,27,29,31,33,34,37,38,39,40', '8076'],
            ['38', '1552636800000', '4,5,8,11,12,13,16,18,20,21,23,24,25,31,32,38,40,44', '8076'],
            ['39', '1552723200000', '4,5,8,11,12,16,18,20,21,24,25,33,34,38,40,42,44', '8076'],
            ['40', '1554451200000', '0,3,4,5,8,11,12,13,14,15,16,18,19,20,21,23,24,25,27,31,33,34,36,38,39,40,41,42,44', '8077'],
            ['41', '1554537600000', '0,4,5,8,9,11,12,13,14,15,16,18,19,20,21,23,24,27,29,31,32,33,34,38,39,40,42,44', '8077'],
            ['42', '1555056000000', '0,4,5,8,11,12,13,14,15,16,18,19,20,21,23,24,25,27,31,32,33,36,37,38,39,40,42,44', '8077'],
            ['43', '1555142400000', '0,5,8,11,12,14,15,16,18,19,20,21,23,24,25,27,29,32,33,37,39,40,42,44', '8077'],
            ['44', '1556265600000', '0,4,5,8,11,12,13,14,15,16,18,19,20,21,23,24,25,27,31,32,33,34,37,38,39,40,42,44', '8077'],
            ['45', '1556870400000', '0,4,8,11,12,13,15,16,18,19,20,21,23,24,25,27,29,31,32,33,37,38,39,40,41,42,44', '8077'],
            ['46', '1557475200000', '0,3,4,5,8,11,12,13,15,16,18,19,20,21,23,24,25,27,31,33,34,36,37,38,40,42,44', '8077'],
            ['47', '1557561600000', '0,4,8,11,12,14,15,18,19,20,21,24,25,27,33,38,39,40,42,44', '8077'],
            ['48', '1558080000000', '4,8,11,12,15,16,18,19,20,21,23,24,27,29,33,37,38,39,40,42', '8077'],
            ['49', '1559376000000', '4,8,11,13,15,18,19,20,21,23,24,25,27,33,36,37,38,40,42', '8077']
        ],
        clubInfo: [
            ['memberFee', 'officerFee', 'daysUntilFeeRequired', 'currentQuarterId'],
            ['50000', '200', '4', '8077']
        ],
    };
    tableOps_1.setData(sheetApp.getSheetByName('Member'), tableState.member.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('Income'), tableState.income.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('Expense'), tableState.expense.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('Recipient'), tableState.recipient.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('PaymentType'), tableState.paymentType.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('Statement'), tableState.statement.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('Attendance'), tableState.attendance.slice(1));
    tableOps_1.setData(sheetApp.getSheetByName('ClubInfo'), tableState.clubInfo.slice(1));
    return tableState;
}
exports.fillWithData = fillWithData;
var UnitTest = (function () {
    function UnitTest(name, test) {
        this.name = name;
        this.test = test;
    }
    return UnitTest;
}());
exports.UnitTest = UnitTest;
var UnitTestSet = (function () {
    function UnitTestSet(name, tests) {
        this.name = name;
        this.tests = tests;
    }
    return UnitTestSet;
}());
exports.UnitTestSet = UnitTestSet;
var UnitTester = (function () {
    function UnitTester() {
    }
    UnitTester.initializeTables = function (id) {
        var sheetapp = SpreadsheetApp.openById(id);
        sheetapp
            .insertSheet('Member')
            .appendRow([
            'id',
            'name',
            'dateJoined',
            'amountOwed',
            'email',
            'performing',
            'active',
            'officer',
            'currentDuesPaid',
            'notifyPoll',
            'sendReceipt'
        ])
            .setFrozenRows(1);
        sheetapp
            .insertSheet('Income')
            .appendRow(['id', 'date', 'amount', 'description', 'paymentTypeId', 'statementId'])
            .setFrozenRows(1);
        sheetapp
            .insertSheet('Expense')
            .appendRow([
            'id',
            'date',
            'amount',
            'description',
            'paymentTypeId',
            'recipientId',
            'statementId'
        ])
            .setFrozenRows(1);
        sheetapp.insertSheet('Recipient').appendRow(['id', 'name']).setFrozenRows(1);
        sheetapp.insertSheet('PaymentType').appendRow(['id', 'name']).setFrozenRows(1);
        sheetapp
            .insertSheet('Statement')
            .appendRow(['id', 'date', 'confirmed'])
            .setFrozenRows(1);
        sheetapp
            .insertSheet('Attendance')
            .appendRow(['id', 'date', 'memberIds', 'quarterId'])
            .setFrozenRows(1);
        sheetapp
            .insertSheet('ClubInfo')
            .appendRow([
            'memberFee',
            'officerFee',
            'daysUntilFeeRequired',
            'currentQuarterId'
        ]);
        sheetapp.deleteSheet(sheetapp.getSheetByName('Sheet1'));
    };
    UnitTester.runTests = function (tests) {
        var id = SpreadsheetApp.create('Test Database').getId().toString();
        this.initializeTables(id);
        var log = [];
        var totalPassed = 0;
        var totalTests = 0;
        tests.forEach(function (testSet) {
            var e_1, _a;
            try {
                for (var _b = __values(testSet.tests), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var test = _c.value;
                    clearAllData(id);
                    ++totalTests;
                    try {
                        if (test.test(id)) {
                            ++totalPassed;
                        }
                        else {
                            log.push(testSet.name + ' - ' + test.name + ': ' + 'Failed');
                        }
                    }
                    catch (e) {
                        log.push(testSet.name + ' - ' + test.name + ': ' + e);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        console.log('Tests passed: ' + totalPassed + '/' + totalTests);
        if (log.length > 0) {
            console.log(log.join('\n'));
        }
        Drive.Files.trash(id);
    };
    return UnitTester;
}());
exports.UnitTester = UnitTester;


/***/ })
/******/ ]);