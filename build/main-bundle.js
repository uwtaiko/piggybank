var Bundle_main =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
var refresh_1 = __webpack_require__(21);
var refresh_2 = __webpack_require__(22);
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
    var members = get_1.getMembers();
    var emails = [];
    var startIndex = 0;
    try {
        for (var memberNames_2 = __values(memberNames), memberNames_2_1 = memberNames_2.next(); !memberNames_2_1.done; memberNames_2_1 = memberNames_2.next()) {
            var name = memberNames_2_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curEmail = members[i].email;
                if (!curName || !curEmail) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.toString() === name.toString()) {
                    if (curEmail.getValue().length !== 0) {
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
            if (memberNames_2_1 && !memberNames_2_1.done && (_a = memberNames_2["return"])) _a.call(memberNames_2);
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
            if (member.active.getValue() && member.notifyPoll.getValue()) {
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
    var members = get_1.getMembers(sheetId);
    var emails = [];
    var startIndex = 0;
    try {
        for (var memberList_1 = __values(memberList), memberList_1_1 = memberList_1.next(); !memberList_1_1.done; memberList_1_1 = memberList_1.next()) {
            var name = memberList_1_1.value;
            var i = startIndex;
            do {
                var curName = members[i].name;
                var curEmail = members[i].email;
                if (!curName || !curEmail) {
                    throw types_1.ErrorType.AssertionError;
                }
                else if (curName.getValue() === name.getValue()) {
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
            if (memberList_1_1 && !memberList_1_1.done && (_a = memberList_1["return"])) _a.call(memberList_1);
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
    var memberNames = get_1.getMembers().map(function (entry) {
        if (!entry.name || !entry.amountOwed)
            throw types_1.ErrorType.AssertionError;
        var amount = types_1.centsToString(entry.amountOwed);
        return types_1.capitalizeString(entry.name.getValue()) + ': ' + amount;
    }).sort();
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
    var memberNames = get_1.getMembers().map(function (entry) {
        if (!entry.name || !entry.amountOwed)
            throw types_1.ErrorType.AssertionError;
        var amount = types_1.centsToString(entry.amountOwed);
        return types_1.capitalizeString(entry.name.getValue()) + ': ' + amount;
    }).sort();
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
    var memberNames = get_1.getMembers().filter(function (entry) {
        if (!entry.active)
            throw types_1.ErrorType.AssertionError;
        return entry.active.getValue();
    }).sort(function (a, b) {
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
    }).map(function (entry) {
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
    var memberNames = get_1.getMembers().map(function (entry) {
        if (!entry.name)
            throw types_1.ErrorType.AssertionError;
        return types_1.capitalizeString(entry.name.getValue());
    }).sort();
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
/* 22 */
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
    var abcMembers = get_1.getMembers().sort(function (a, b) {
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var email_1 = __webpack_require__(19);
var viewsId_1 = __webpack_require__(16);
var append_1 = __webpack_require__(17);
var get_1 = __webpack_require__(2);
var remove_1 = __webpack_require__(23);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var actions_1 = __webpack_require__(24);
var disable_1 = __webpack_require__(4);
var refresh_1 = __webpack_require__(21);
var ae_1 = __webpack_require__(5);
var ai_1 = __webpack_require__(6);
var ami_1 = __webpack_require__(7);
var cd_1 = __webpack_require__(8);
var ct_1 = __webpack_require__(9);
var nq_1 = __webpack_require__(10);
var rmi_1 = __webpack_require__(11);
var ta_1 = __webpack_require__(12);
var tablesId_1 = __webpack_require__(3);
var tf_1 = __webpack_require__(13);
var ucs_1 = __webpack_require__(14);
var ums_1 = __webpack_require__(15);
var viewsId_1 = __webpack_require__(16);
var projectInfo_1 = __webpack_require__(20);
var tableOps_1 = __webpack_require__(1);
var backup_1 = __webpack_require__(27);
var types_1 = __webpack_require__(0);
var handlers_1 = __webpack_require__(25);
var html_1 = __webpack_require__(29);
var refresh_2 = __webpack_require__(22);
function initializeAll() {
    initializeTables();
    initializeViews();
    setupTriggers();
    refreshAll();
}
exports.initializeAll = initializeAll;
function refreshAll() {
    refresh_2.refreshAllViews();
    refresh_1.refreshAllForms();
}
exports.refreshAll = refreshAll;
function backupTables() {
    backup_1.createBackup();
}
exports.backupTables = backupTables;
function setupTriggers() {
    ScriptApp.newTrigger('everyDay')
        .timeBased()
        .everyDays(1)
        .atHour(1)
        .create();
    ScriptApp.newTrigger('everyWeek')
        .timeBased()
        .onWeekDay(ScriptApp.WeekDay.SUNDAY)
        .atHour(1)
        .create();
    ScriptApp.newTrigger('everyMonth')
        .timeBased()
        .onMonthDay(1)
        .atHour(1)
        .create();
    ScriptApp.newTrigger('tablesOnOpen')
        .forSpreadsheet(tablesId_1.ID)
        .onOpen()
        .create();
    ScriptApp.newTrigger('tablesOnEdit')
        .forSpreadsheet(tablesId_1.ID)
        .onEdit()
        .create();
    ScriptApp.newTrigger('viewsOnOpen')
        .forSpreadsheet(viewsId_1.ID)
        .onOpen()
        .create();
    ScriptApp.newTrigger('viewsOnEdit')
        .forSpreadsheet(viewsId_1.ID)
        .onEdit()
        .create();
    ScriptApp.newTrigger('addExpenseOnFormSubmit')
        .forForm(ae_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('addIncomeOnFormSubmit')
        .forForm(ai_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('addMemberIouOnFormSubmit')
        .forForm(ami_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('collectDuesOnFormSubmit')
        .forForm(cd_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('confirmTransferOnFormSubmit')
        .forForm(ct_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('nextQuarterOnFormSubmit')
        .forForm(nq_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('resolveMemberIouOnFormSubmit')
        .forForm(rmi_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('takeAttendanceOnFormSubmit')
        .forForm(ta_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('transferFundsOnFormSubmit')
        .forForm(tf_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('updateContactSettingsOnFormSubmit')
        .forForm(ucs_1.ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('updateMemberStatusOnFormSubmit')
        .forForm(ums_1.ID)
        .onFormSubmit()
        .create();
}
exports.setupTriggers = setupTriggers;
function everyDay() { }
exports.everyDay = everyDay;
function everyWeek() {
    var today = new Date();
    if (today.getDate() % 14 >= 7) {
        backup_1.createBackup();
    }
}
exports.everyWeek = everyWeek;
function everyMonth() { }
exports.everyMonth = everyMonth;
function tablesOnOpen() { }
exports.tablesOnOpen = tablesOnOpen;
function tablesOnEdit(e) {
    var sheet = e.range.getSheet();
    if (sheet.getName() !== 'ClubInfo') {
        tableOps_1.orderBy(sheet, ['id']);
    }
    switch (sheet.getName()) {
        case 'Member':
            sheet;
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.MEMBER);
            break;
        case 'Income':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.INCOME);
            break;
        case 'Expense':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.EXPENSE);
            break;
        case 'Recipient':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.RECIPIENT);
            break;
        case 'PaymentType':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.PAYMENT_TYPE);
            break;
        case 'Statement':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.STATEMENT);
            break;
        case 'Attendance':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.ATTENDANCE);
            break;
        case 'ClubInfo':
            types_1.RefreshLogger.markAsUpdated(types_1.DataTable.CLUB_INFO);
            break;
    }
    types_1.RefreshLogger.refresh();
}
exports.tablesOnEdit = tablesOnEdit;
function viewsOnOpen() {
    createViewsMenu();
}
exports.viewsOnOpen = viewsOnOpen;
function viewsOnEdit(e) {
    e.source.getActiveRangeList()
        .setFontColor('#ff0000')
        .setFontWeight('bold');
}
exports.viewsOnEdit = viewsOnEdit;
function getMostRecentResponse(form) {
    var resList = form.getResponses();
    return resList[resList.length - 1].getItemResponses();
}
function addExpenseOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ae_1.ID));
    var amountRes = resItems[0].getResponse();
    var desc = resItems[1].getResponse();
    var recipient = resItems[2].getResponse();
    var paymentType = resItems[3].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.ADD_EXPENSE);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.ADD_EXPENSE);
    actions_1.addExpense(amountRes, desc, recipient, paymentType);
    types_1.RefreshLogger.refresh();
}
exports.addExpenseOnFormSubmit = addExpenseOnFormSubmit;
function addIncomeOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ai_1.ID));
    var amountRes = resItems[0].getResponse();
    var desc = resItems[1].getResponse();
    var paymentType = resItems[2].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.ADD_INCOME);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.ADD_INCOME);
    actions_1.addIncome(amountRes, desc, paymentType);
    types_1.RefreshLogger.refresh();
}
exports.addIncomeOnFormSubmit = addIncomeOnFormSubmit;
function addMemberIouOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ami_1.ID));
    var membersRes = resItems[0].getResponse();
    var amount = resItems[1].getResponse();
    var description = resItems[2].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.ADD_MEMBER_IOU);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.ADD_MEMBER_IOU);
    actions_1.addMemberIOU(membersRes, amount, description);
    types_1.RefreshLogger.refresh();
}
exports.addMemberIouOnFormSubmit = addMemberIouOnFormSubmit;
function collectDuesOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(cd_1.ID));
    var memListRes = resItems[0].getResponse();
    var paymentTypeRes = resItems[1].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.COLLECT_DUES);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.COLLECT_DUES);
    actions_1.collectDues(memListRes, paymentTypeRes);
    types_1.RefreshLogger.refresh();
}
exports.collectDuesOnFormSubmit = collectDuesOnFormSubmit;
function confirmTransferOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ct_1.ID));
    var statementList = resItems[0].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.CONFIRM_TRANSFER);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.CONFIRM_TRANSFER);
    actions_1.confirmTransfer(statementList);
    types_1.RefreshLogger.refresh();
}
exports.confirmTransferOnFormSubmit = confirmTransferOnFormSubmit;
function nextQuarterOnFormSubmit() {
    disable_1.disableForm(types_1.GeneratedForm.NEXT_QUARTER);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.NEXT_QUARTER);
    actions_1.nextQuarter();
    types_1.RefreshLogger.refresh();
}
exports.nextQuarterOnFormSubmit = nextQuarterOnFormSubmit;
function resolveMemberIouOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(rmi_1.ID));
    var membersRes = resItems[0].getResponse();
    var amount = resItems[1].getResponse();
    var description = resItems[2].getResponse();
    var paymentType = resItems[3].getResponse();
    disable_1.disableForm(types_1.GeneratedForm.RESOLVE_MEMBER_IOU);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.RESOLVE_MEMBER_IOU);
    actions_1.resolveMemberIOU(membersRes, amount, description, paymentType);
    types_1.RefreshLogger.refresh();
}
exports.resolveMemberIouOnFormSubmit = resolveMemberIouOnFormSubmit;
function takeAttendanceOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ta_1.ID));
    var memListRes;
    var newMemberRes;
    if (resItems[0]) {
        if (resItems[0].getItem().getIndex() === 0) {
            memListRes = resItems[0].getResponse();
            if (resItems[1]) {
                newMemberRes = resItems[1].getResponse();
            }
        }
        else {
            newMemberRes = resItems[1].getResponse();
        }
    }
    disable_1.disableForm(types_1.GeneratedForm.TAKE_ATTENDANCE);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.TAKE_ATTENDANCE);
    actions_1.takeAttendance(memListRes, newMemberRes);
    types_1.RefreshLogger.refresh();
}
exports.takeAttendanceOnFormSubmit = takeAttendanceOnFormSubmit;
function transferFundsOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(tf_1.ID));
    var incomes;
    var expenses;
    if (resItems.length > 0) {
        if (resItems.length > 1) {
            incomes = resItems[0].getResponse();
            expenses = resItems[1].getResponse();
        }
        else {
            if (resItems[0].getItem().getIndex() === 0) {
                incomes = resItems[0].getResponse();
            }
            else {
                expenses = resItems[0].getResponse();
            }
        }
    }
    disable_1.disableForm(types_1.GeneratedForm.TRANSFER_FUNDS);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.TRANSFER_FUNDS);
    actions_1.transferFunds(incomes, expenses);
    types_1.RefreshLogger.refresh();
}
exports.transferFundsOnFormSubmit = transferFundsOnFormSubmit;
function updateContactSettingsOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ucs_1.ID));
    var name = resItems[0].getResponse();
    var email;
    var phone;
    var carrier;
    var notifyPoll;
    var sendReceipt;
    if (resItems[1]) {
        switch (resItems[1].getItem().getIndex()) {
            case 1:
                email = resItems[1].getResponse();
                break;
            case 2:
                phone = resItems[1].getResponse();
                break;
            case 3:
                carrier = resItems[1].getResponse();
                break;
            case 4:
                notifyPoll = resItems[1].getResponse();
                break;
            case 5:
                sendReceipt = resItems[1].getResponse();
                break;
            default:
                throw Error;
        }
        if (resItems[2]) {
            switch (resItems[2].getItem().getIndex()) {
                case 2:
                    phone = resItems[2].getResponse();
                    break;
                case 3:
                    carrier = resItems[2].getResponse();
                    break;
                case 4:
                    notifyPoll = resItems[2].getResponse();
                    break;
                case 5:
                    sendReceipt = resItems[2].getResponse();
                    break;
                default:
                    throw Error;
            }
            if (resItems[3]) {
                switch (resItems[3].getItem().getIndex()) {
                    case 3:
                        carrier = resItems[3].getResponse();
                        break;
                    case 4:
                        notifyPoll = resItems[3].getResponse();
                        break;
                    case 5:
                        sendReceipt = resItems[3].getResponse();
                        break;
                    default:
                        throw Error;
                }
                if (resItems[4]) {
                    switch (resItems[4].getItem().getIndex()) {
                        case 4:
                            notifyPoll = resItems[4].getResponse();
                            break;
                        case 5:
                            sendReceipt = resItems[4].getResponse();
                            break;
                        default:
                            throw Error;
                    }
                    if (resItems[5]) {
                        sendReceipt = resItems[5].getResponse();
                    }
                }
            }
        }
    }
    disable_1.disableForm(types_1.GeneratedForm.UPDATE_CONTACT_SETTINGS);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.UPDATE_CONTACT_SETTINGS);
    actions_1.updateContactSettings(name, email, phone, carrier, notifyPoll, sendReceipt);
    types_1.RefreshLogger.refresh();
}
exports.updateContactSettingsOnFormSubmit = updateContactSettingsOnFormSubmit;
function updateMemberStatusOnFormSubmit() {
    var resItems = getMostRecentResponse(FormApp.openById(ums_1.ID));
    var memberName = resItems[0].getResponse();
    var performingRes;
    var activeRes;
    var officerRes;
    if (resItems[1]) {
        switch (resItems[1].getItem().getIndex()) {
            case 1:
                performingRes = resItems[1].getResponse();
                break;
            case 2:
                activeRes = resItems[1].getResponse();
                break;
            case 3:
                officerRes = resItems[1].getResponse();
                break;
            default:
                throw Error;
        }
        if (resItems[2]) {
            switch (resItems[2].getItem().getIndex()) {
                case 2:
                    activeRes = resItems[2].getResponse();
                    break;
                case 3:
                    officerRes = resItems[2].getResponse();
                    break;
                default:
                    throw Error;
            }
            if (resItems[3]) {
                officerRes = resItems[3].getResponse();
            }
        }
    }
    disable_1.disableForm(types_1.GeneratedForm.UPDATE_MEMBER_STATUS);
    types_1.RefreshLogger.markAsPriority(types_1.GeneratedForm.UPDATE_MEMBER_STATUS);
    actions_1.updateMemberStatus(memberName, performingRes, activeRes, officerRes);
    types_1.RefreshLogger.refresh();
}
exports.updateMemberStatusOnFormSubmit = updateMemberStatusOnFormSubmit;
function initializeViews() {
    var sheetapp = SpreadsheetApp.openById(viewsId_1.ID);
    sheetapp.insertSheet('Account Info')
        .appendRow([
        'Current Quarter',
        'Total',
        'Bank',
        'Venmo',
        'On-hand'
    ]);
    sheetapp.insertSheet('Members')
        .appendRow([
        'Name',
        'Date Joined',
        'Amount Owed',
        'Current Dues Paid?',
        '# Attendances This Quarter'
    ])
        .setFrozenRows(1);
    sheetapp.insertSheet('Incomes')
        .appendRow([
        'Date',
        'Amount',
        'Description',
        'Payment Type',
        'In Account?'
    ])
        .setFrozenRows(1);
    sheetapp.insertSheet('Expenses')
        .appendRow([
        'Date',
        'Amount',
        'Description',
        'Recipient',
        'Payment Type',
        'In Account?'
    ])
        .setFrozenRows(1);
    sheetapp.insertSheet('All Transactions')
        .appendRow([
        'Date',
        'Amount',
        'Description',
        'Recipient',
        'Payment Type',
        'In Account?'
    ])
        .setFrozenRows(1);
    sheetapp.insertSheet('Statements')
        .appendRow([
        'Date',
        'Amount',
        'Payment Type',
        'Confirmed?'
    ])
        .setFrozenRows(1);
    sheetapp.deleteSheet(sheetapp.getSheetByName('Sheet1'));
}
function initializeTables() {
    var sheetapp = SpreadsheetApp.openById(tablesId_1.ID);
    var quarterNum = parseInt(projectInfo_1.START_QUARTER, 10);
    var yearNum = parseInt(projectInfo_1.START_YEAR, 10);
    var curQuarter;
    if (isNaN(yearNum)) {
        curQuarter = new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(0));
    }
    else {
        switch (quarterNum) {
            case 0:
                curQuarter = new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(yearNum));
                break;
            case 1:
                curQuarter = new types_1.QuarterData(types_1.Quarter.SPRING, new types_1.IntData(yearNum));
                break;
            case 2:
                curQuarter = new types_1.QuarterData(types_1.Quarter.SUMMER, new types_1.IntData(yearNum));
                break;
            case 3:
                curQuarter = new types_1.QuarterData(types_1.Quarter.FALL, new types_1.IntData(yearNum));
                break;
            default:
                if (isNaN(quarterNum)) {
                    curQuarter = new types_1.QuarterData(types_1.Quarter.WINTER, new types_1.IntData(yearNum));
                }
                else {
                    throw types_1.ErrorType.AssertionError;
                }
        }
    }
    var memDuesNum = parseFloat(projectInfo_1.MEMBER_DUES);
    if (isNaN(memDuesNum))
        memDuesNum = 0;
    var officerDuesNum = parseFloat(projectInfo_1.OFFICER_DUES);
    if (isNaN(officerDuesNum))
        officerDuesNum = 0;
    var numAttnsNum = parseInt(projectInfo_1.NUM_ATTNS, 10);
    if (isNaN(numAttnsNum))
        numAttnsNum = 0;
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
    ]).appendRow([
        new types_1.IntData(Math.round(memDuesNum * 100)).toString(),
        new types_1.IntData(Math.round(officerDuesNum * 100)).toString(),
        new types_1.IntData(numAttnsNum).toString(),
        curQuarter.toString()
    ]);
    sheetapp.deleteSheet(sheetapp.getSheetByName('Sheet1'));
}
function createViewsMenu() {
    SpreadsheetApp.getUi()
        .createMenu('Actions')
        .addSubMenu(SpreadsheetApp.getUi()
        .createMenu('Add')
        .addItem('Add Member', 'addMemberDialog')
        .addItem('Add Attendance', 'addAttendanceDialog')
        .addItem('Add Income', 'addIncomeDialog')
        .addItem('Add Expense', 'addExpenseDialog')
        .addItem('Add Statement', 'addStatementDialog')
        .addItem('Add Payment Method', 'addPaymentTypeDialog')
        .addItem('Add Recipient', 'addRecipientDialog'))
        .addSubMenu(SpreadsheetApp.getUi()
        .createMenu('Rename')
        .addItem('Rename Member', 'renameMemberDialog')
        .addItem('Rename Payment Method', 'renamePaymentTypeDialog')
        .addItem('Rename Recipient', 'renameRecipientDialog'))
        .addSubMenu(SpreadsheetApp.getUi()
        .createMenu('Merge')
        .addItem('Merge Members', 'mergeMemberDialog')
        .addItem('Merge Payment Methods', 'mergePaymentTypeDialog')
        .addItem('Merge Recipients', 'mergeRecipientDialog'))
        .addSeparator()
        .addSubMenu(SpreadsheetApp.getUi()
        .createMenu('Email')
        .addItem('Poll Notification', 'pollNotificationDialog')
        .addItem('Notify Members', 'notifyMembersDialog'))
        .addItem('Create Backup', 'backupTables')
        .addItem('Refresh', 'refreshAll')
        .addToUi();
    SpreadsheetApp.getUi().createMenu('Reports')
        .addItem('Member Details', 'memberDetailsDialog')
        .addItem('Attendance Records', 'attendanceRecordsDialog')
        .addItem('Attendance Summary', 'attendanceSummaryDialog')
        .addItem('Full Finance History', 'fullFinanceHistoryDialog')
        .addToUi();
}
function createDialog(title, html, height, width) {
    SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput(html).setHeight(height).setWidth(width), title);
}
function memberDetailsDialog() {
    createDialog('Member Details', html_1.memberDetailsHTML(), 260, 300);
}
exports.memberDetailsDialog = memberDetailsDialog;
function attendanceRecordsDialog() {
    createDialog('Attendance Records', html_1.attendanceRecordsHTML(), 450, 450);
}
exports.attendanceRecordsDialog = attendanceRecordsDialog;
function attendanceSummaryDialog() {
    createDialog('Attendance Summary', html_1.attendanceSummaryHTML(), 450, 450);
}
exports.attendanceSummaryDialog = attendanceSummaryDialog;
function fullFinanceHistoryDialog() {
    createDialog('Full Finance History', html_1.fullFinanceHistoryHTML(), 450, 850);
}
exports.fullFinanceHistoryDialog = fullFinanceHistoryDialog;
function addMemberDialog() {
    createDialog('Add Member', html_1.addMemberHTML(), 130, 300);
}
exports.addMemberDialog = addMemberDialog;
function addAttendanceDialog() {
    createDialog('Add Attendance', html_1.addAttendanceHTML(), 300, 300);
}
exports.addAttendanceDialog = addAttendanceDialog;
function addIncomeDialog() {
    createDialog('Add Income', html_1.addIncomeHTML(), 200, 300);
}
exports.addIncomeDialog = addIncomeDialog;
function addExpenseDialog() {
    createDialog('Add Expense', html_1.addExpenseHTML(), 240, 300);
}
exports.addExpenseDialog = addExpenseDialog;
function addStatementDialog() {
    createDialog('Add Statement', html_1.addStatementHTML(), 360, 500);
}
exports.addStatementDialog = addStatementDialog;
function addPaymentTypeDialog() {
    createDialog('Add Payment Type', html_1.addPayTypeHTML(), 130, 300);
}
exports.addPaymentTypeDialog = addPaymentTypeDialog;
function addRecipientDialog() {
    createDialog('Add Recipient', html_1.addRecipientHTML(), 130, 300);
}
exports.addRecipientDialog = addRecipientDialog;
function renameMemberDialog() {
    createDialog('Rename Member', html_1.renameMemberHTML(), 130, 300);
}
exports.renameMemberDialog = renameMemberDialog;
function renamePaymentTypeDialog() {
    createDialog('Rename Payment Type', html_1.renamePaymentTypeHTML(), 130, 300);
}
exports.renamePaymentTypeDialog = renamePaymentTypeDialog;
function renameRecipientDialog() {
    createDialog('Rename Recipient', html_1.renameRecipientHTML(), 130, 300);
}
exports.renameRecipientDialog = renameRecipientDialog;
function mergeMemberDialog() {
    createDialog('Merge Member', html_1.mergeMemberHTML(), 230, 300);
}
exports.mergeMemberDialog = mergeMemberDialog;
function mergePaymentTypeDialog() {
    createDialog('Merge Payment Type', html_1.mergePaymentTypeHTML(), 230, 300);
}
exports.mergePaymentTypeDialog = mergePaymentTypeDialog;
function mergeRecipientDialog() {
    createDialog('Merge Recipient', html_1.mergeRecipientHTML(), 230, 300);
}
exports.mergeRecipientDialog = mergeRecipientDialog;
function pollNotificationDialog() {
    createDialog('Poll Notification', html_1.pollNotificationHTML(), 180, 300);
}
exports.pollNotificationDialog = pollNotificationDialog;
function notifyMembersDialog() {
    createDialog('Notify Performers', html_1.notifyMembersHTML(), 330, 300);
}
exports.notifyMembersDialog = notifyMembersDialog;
function handleAddMember(name, dateJoined) {
    handlers_1.menuAddMember(name, dateJoined);
}
exports.handleAddMember = handleAddMember;
function handleAddAttendance(date, members, quarter, year) {
    handlers_1.menuAddAttendance(date, members, quarter, year);
}
exports.handleAddAttendance = handleAddAttendance;
function handleAddIncome(date, amount, description, payType) {
    handlers_1.menuAddIncome(date, amount, description, payType);
}
exports.handleAddIncome = handleAddIncome;
function handleAddExpense(date, amount, description, recipient, payType) {
    handlers_1.menuAddExpense(date, amount, description, recipient, payType);
}
exports.handleAddExpense = handleAddExpense;
function handleAddStatement(date, incomes, expenses) {
    handlers_1.menuAddStatement(date, incomes, expenses);
}
exports.handleAddStatement = handleAddStatement;
function handleAddRecipient(name) {
    handlers_1.menuAddRecipient(name);
}
exports.handleAddRecipient = handleAddRecipient;
function handleAddPayType(name) {
    handlers_1.menuAddPayType(name);
}
exports.handleAddPayType = handleAddPayType;
function handleRenameMember(oldName, newName) {
    handlers_1.renameMember(oldName, newName);
}
exports.handleRenameMember = handleRenameMember;
function handleRenamePaymentType(oldName, newName) {
    handlers_1.renamePaymentType(oldName, newName);
}
exports.handleRenamePaymentType = handleRenamePaymentType;
function handleRenameRecipient(oldName, newName) {
    handlers_1.renameRecipient(oldName, newName);
}
exports.handleRenameRecipient = handleRenameRecipient;
function handleMergeMember(aliases, name) {
    handlers_1.mergeMember(aliases, name);
}
exports.handleMergeMember = handleMergeMember;
function handleMergePaymentType(aliases, name) {
    handlers_1.mergePaymentType(aliases, name);
}
exports.handleMergePaymentType = handleMergePaymentType;
function handleMergeRecipient(aliases, name) {
    handlers_1.mergeRecipient(aliases, name);
}
exports.handleMergeRecipient = handleMergeRecipient;
function handlePollNotification(title, deadline, link) {
    handlers_1.pollNotification(title, deadline, link);
}
exports.handlePollNotification = handlePollNotification;
function handleNotifyMembers(memberNames, subject, body) {
    handlers_1.notifyMembers(memberNames, subject, body);
}
exports.handleNotifyMembers = handleNotifyMembers;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var backupFolderId_1 = __webpack_require__(28);
var tablesId_1 = __webpack_require__(3);
var tableOps_1 = __webpack_require__(1);
function createBackup() {
    var datestring = new Date().toJSON().replace('T', ', ');
    var backupSS = SpreadsheetApp.create(datestring);
    var backupFile = DriveApp.getFileById(backupSS.getId());
    backupFile.getParents().next().removeFile(backupFile);
    DriveApp.getFolderById(backupFolderId_1.ID).addFile(backupFile);
    var curSS = SpreadsheetApp.openById(tablesId_1.ID);
    curSS.getSheets().forEach(function (sheet) {
        var backupSheet = backupSS.insertSheet(sheet.getName());
        var vals = sheet.getDataRange().getValues();
        if (vals.length > 0 && vals[0].length > 0) {
            backupSheet.getRange(tableOps_1.GAS_OFFSET, tableOps_1.GAS_OFFSET, vals.length, vals[0].length).setValues(vals);
        }
    });
    backupSS.deleteSheet(backupSS.getSheetByName('Sheet1'));
}
exports.createBackup = createBackup;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ID = '1CpTZbSY6LdeVQPzfUuPONtdwOYNUnwGG';


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var get_1 = __webpack_require__(2);
var types_1 = __webpack_require__(0);
function memberDetailsHTML() {
    var clubInfo = get_1.getClubInfo();
    var memAttendance = {};
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
    var memberNames = [];
    var memberData = [];
    get_1.getMembers()
        .sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    })
        .forEach(function (member) {
        if (!member.id ||
            !member.active ||
            !member.amountOwed ||
            !member.currentDuesPaid ||
            !member.dateJoined ||
            !member.email ||
            !member.name ||
            !member.notifyPoll ||
            !member.officer ||
            !member.performing ||
            !member.sendReceipt)
            throw types_1.ErrorType.AssertionError;
        var name = types_1.capitalizeString(member.name.getValue());
        var status = '';
        if (!member.active.getValue()) {
            status += 'Inactive';
        }
        else {
            if (member.performing.getValue()) {
                status += 'Performing';
            }
            else {
                status += 'Non-Performing';
            }
        }
        if (member.officer.getValue()) {
            status += ' Officer';
        }
        var attendanceSet = memAttendance[member.id.getValue()];
        var attendances = attendanceSet ? attendanceSet.size() : 0;
        memberNames.push("<option>" + name + "</option>");
        memberData.push("\n    \"" + name + "\": {\n      dateJoined: \"" + member.dateJoined.toDateString() + "\",\n      amountOwed: \"" + types_1.centsToString(member.amountOwed) + "\",\n      email: \"" + member.email.getValue() + "\",\n      status: \"" + status + "\",\n      paidDues: \"" + (member.currentDuesPaid.getValue() ? 'Yes' : 'No') + "\",\n      notifyPoll: \"" + (member.notifyPoll.getValue() ? 'Yes' : 'No') + "\",\n      sendReceipt: \"" + (member.sendReceipt.getValue() ? 'Yes' : 'No') + "\",\n      attendances: \"" + attendances + "\"\n    }\n    ");
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    p {\n      display: inline;\n    }\n    </style>\n\n    <body>\n    <select id=\"member\">\n      " + memberNames.join('\n') + "\n    </select>\n    </br>\n    <div id=\"display\">\n      <p><b>Name: </b></p><p id=\"name\"></p></br>\n      <p><b>Status: </b></p><p id=\"status\"></p></br>\n      <p><b>Date joined: </b></p><p id=\"dateJoined\"></p></br>\n      </br>\n      <p><b>Attendances: </b></p><p id=\"attendances\"></p></br>\n      <p><b>Paid current dues?: </b></p><p id=\"paidDues\"></p></br>\n      <p><b>Amount owed: </b></p><p id=\"amountOwed\"></p></br>\n      </br>\n      <p><b>Email: </b></p><p id=\"email\"></p></br>\n      <p><b>Notify of polls?: </b></p><p id=\"notifyPoll\"></p></br>\n      <p><b>Send receipts?: </b></p><p id=\"sendReceipt\"></p></br>\n    </div>\n    </body>\n\n    <script>\n    const memData = {\n      " + memberData.join(',\n') + "\n    }\n    const member = document.getElementById(\"member\");\n    const display = {\n      name: document.getElementById(\"name\"),\n      dateJoined: document.getElementById(\"dateJoined\"),\n      amountOwed: document.getElementById(\"amountOwed\"),\n      attendances: document.getElementById(\"attendances\"),\n      email: document.getElementById(\"email\"),\n      status: document.getElementById(\"status\"),\n      paidDues: document.getElementById(\"paidDues\"),\n      notifyPoll: document.getElementById(\"notifyPoll\"),\n      sendReceipt: document.getElementById(\"sendReceipt\")\n    };\n\n    function setMemberData() {\n      const curMember = memData[member.value];\n\n      display.name.innerHTML = member.value;\n      display.dateJoined.innerHTML = curMember.dateJoined;\n      display.attendances.innerHTML = curMember.attendances;\n      display.amountOwed.innerHTML = curMember.amountOwed;\n      display.email.innerHTML = curMember.email;\n      display.status.innerHTML = curMember.status;\n      display.paidDues.innerHTML = curMember.paidDues;\n      display.notifyPoll.innerHTML = curMember.notifyPoll;\n      display.sendReceipt.innerHTML = curMember.sendReceipt;\n    }\n\n    setMemberData();\n    member.addEventListener(\"change\", setMemberData);\n    </script>\n    ";
}
exports.memberDetailsHTML = memberDetailsHTML;
function attendanceRecordsHTML() {
    var idToMember = {};
    get_1.getMembers().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToMember[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var dailyAttendance = {};
    get_1.getAttendances().forEach(function (entry) {
        if (!entry.date || !entry.member_ids)
            throw types_1.ErrorType.AssertionError;
        var curDate = entry.date.getValue();
        var dateNum = curDate.getFullYear() * 1000 +
            curDate.getMonth() * 50 +
            curDate.getDate();
        var curSet = dailyAttendance[dateNum];
        if (!curSet) {
            dailyAttendance[dateNum] = new types_1.UniqueList(entry.member_ids.getValue().map(function (x) { return x.getValue(); }));
        }
        else {
            entry.member_ids.getValue().forEach(function (memberId) {
                if (!curSet)
                    throw types_1.ErrorType.AssertionError;
                curSet.add(memberId.getValue());
            });
        }
    });
    var attendances = [];
    Object.keys(dailyAttendance).forEach(function (date) {
        var dateNum = parseInt(date, 10);
        if (isNaN(dateNum))
            throw types_1.ErrorType.AssertionError;
        var memberIds = dailyAttendance[dateNum];
        if (!memberIds)
            throw types_1.ErrorType.AssertionError;
        var memberNames = memberIds.asArray().map(function (id) {
            var name = idToMember[id];
            if (name === undefined)
                throw types_1.ErrorType.AssertionError;
            return name;
        });
        attendances.push(dateNum + ": [\"" + memberNames.join('", "') + "\"]");
    });
    return "\n    <!DOCTYPE html>\n    <head>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js\"></script>\n      <script src=\"https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js\"></script>\n      <link href=\"https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css\" rel=\"stylesheet\">\n    </head>\n\n    <style>\n      .ui-widget-content,\n      .ui-widget-content,\n      .ui-datepicker .ui-datepicker-header,\n      .ui-datepicker .ui-datepicker-title,\n      .ui-datepicker .ui-datepicker-title,\n      .ui-datepicker .ui-datepicker-prev,\n      .ui-datepicker .ui-datepicker-next,\n      .ui-datepicker table,\n      .ui-state-default,\n      .ui-widget-content .ui-state-default,\n      .ui-widget-header .ui-state-default,\n      .ui-state-default {\n        background: #ffffff;\n      }\n\n      .ui-datepicker-inline {\n        padding: 0;\n        margin: 0 auto;\n      }\n\n      .ui-widget-header {\n        border: 0px;\n      }\n\n      .ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next {\n        top: 5px;\n      }\n\n      a.ui-state-default,\n      .ui-datepicker th {\n        text-align: center !important;\n      }\n\n      .ui-datepicker {\n        width: 18em;\n        font-size: 15px;\n        font-family: \"Noto Sans\", san-serif !important;\n        text-transform: uppercase;\n      }\n\n      .ui-datepicker td {\n        padding: 0px;\n        border: 1px solid transparent;\n      }\n\n      .selected a{\n        background-color: #6666aa !important;\n        color: #b0fffa !important;\n      }\n      .available a{\n        background-color: #66aa66 !important;\n        color: #afffaf !important;\n      }\n      .unavailable a{\n        background-color: #333333 !important;\n        color: #b3b3b3 !important;\n      }\n\n      #parent {\n        display: flex;\n        flex-direction: column;\n        height: 430px;\n      }\n      #textBox {\n        height: 50%;\n        display: flex;\n        flex-direction: column;\n        padding-left: 4px;\n      }\n      #memberList {\n        overflow-y: auto;\n        padding-left: 8px;\n      }\n      \n      p {\n        margin: 0px;\n        padding-top: 4px;\n        padding-bottom: 0px;\n      }\n    </style>\n\n    <body style=\"margin:0px; height: 100%;\">\n      <div id=\"parent\">\n        <div id=\"calendar\" class=\"datepicker\"></div>\n        \n        <div id=\"textBox\">\n          <p><b>Members present:</b></p>\n          <p id=\"memberList\"></p>\n        </div>\n      </div>\n    </body>\n\n    <script>\n    const attendances = {" + attendances.join(',\n') + "};\n\n    var selectedDate;\n\n    function dateToNum(d) {\n      const dateObj = new Date(d);\n      return dateObj.getDate() + dateObj.getMonth() * 50 + dateObj.getFullYear() * 1000;\n    }\n\n    $(function() {\n      $( \".datepicker\" ).datepicker({\n\n        beforeShowDay: function(d){\n          // Change format of date\n          const dateNum = dateToNum(d);\n\n          if (dateNum === selectedDate) {\n            return [true, \"selected\" ];\n          } else if (Object.keys(attendances).indexOf(dateNum.toString()) !== -1) {\n            return [true, \"available\" ];\n          } else {\n            return [true, \"unavailable\"];\n          }\n        },\n        \n        onSelect: (d, x) => {\n          const dateVals = d.split('/');\n          const date = new Date(parseInt(dateVals[2], 10), parseInt(dateVals[0], 10) - 1, parseInt(dateVals[1], 10));\n          const dateNum = dateToNum(date);\n          const keys = Object.keys(attendances);\n          const i = keys.indexOf(dateNum.toString());\n          if (i !== -1) {\n            selectedDate = dateNum;\n            $(\"#memberList\")[0].innerHTML = attendances[keys[i]].join('</br>');\n          }\n        }\n      });\n    });\n    </script>\n    ";
}
exports.attendanceRecordsHTML = attendanceRecordsHTML;
function attendanceSummaryHTML() {
    var idToName = get_1.getMembers().map(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        return entry.id.getValue() + ": \"" + types_1.capitalizeString(entry.name.getValue()) + "\"";
    });
    var days = [];
    var dailyAttendance = {};
    get_1.getAttendances().forEach(function (entry) {
        if (!entry.date || !entry.member_ids)
            throw types_1.ErrorType.AssertionError;
        var curDate = entry.date.getValue();
        var dateNum = curDate.getFullYear() * 1000 +
            curDate.getMonth() * 50 +
            curDate.getDate();
        var curSet = dailyAttendance[dateNum];
        if (!curSet) {
            days.push(dateNum);
            dailyAttendance[dateNum] = new types_1.UniqueList(entry.member_ids.getValue().map(function (x) { return x.getValue(); }));
        }
        else {
            entry.member_ids.getValue().forEach(function (memberId) {
                if (!curSet)
                    throw types_1.ErrorType.AssertionError;
                curSet.add(memberId.getValue());
            });
        }
    });
    days.sort();
    var curMems = [];
    var curMemTotals = [];
    var totalMemberAttendance = [];
    days.forEach(function (day) {
        var curAttendances = dailyAttendance[day];
        if (!curAttendances)
            throw types_1.ErrorType.AssertionError;
        curAttendances.asArray().forEach(function (memId) {
            var curTotal = curMemTotals[memId];
            if (curTotal === undefined) {
                curMems.push(memId);
                curMemTotals[memId] = 1;
            }
            else {
                curMemTotals[memId] = curTotal + 1;
            }
        });
        var dayTotals = [];
        curMems.forEach(function (memId) {
            var memTotal = curMemTotals[memId];
            if (memTotal === undefined)
                throw types_1.ErrorType.AssertionError;
            dayTotals.push(memId + ": " + memTotal);
        });
        totalMemberAttendance.push(day + ": {" + dayTotals.join(',\n') + "}");
    });
    return "\n    <!DOCTYPE html>\n    <style>\n      #textBox {\n        display: flex;\n        flex-flow: column;\n        padding-left: 4px;\n        height: 80%;\n      }\n      #memberList {\n        overflow-y: auto;\n        padding-left: 8px;\n      }\n\n      p {\n        margin-top: 2px;\n        margin-bottom: 0px;\n      }\n    </style>\n\n    <body style=\"height: 430px\">\n    <div style=\"height:100%\">\n      <div style=\"display: flex; align-items: center; justify-content: center;\">\n        <div>\n          <p>Start</p>\n          <input type=\"date\" id=\"startDate\" style=\"margin-right: 2px\"/>\n        </div>\n        <div>\n          <p>End</p>\n          <input type=\"date\" id=\"endDate\" style=\"margin-left: 2px\"/>\n        </div>\n      </div>\n      \n      </br>\n      <div id=\"textBox\">\n        <p id=\"numDays\"></p>\n        <p id=\"memberList\"></p>\n      </div>\n    </div>\n    </body>\n\n    <script>\n    const idToName = {\n      " + idToName.join(',\n') + "\n    };\n    const days = [" + days.join(',') + "];\n    const attendanceTotals = {\n      " + totalMemberAttendance.join(',\n') + "\n    };\n\n    const startDate = document.getElementById(\"startDate\");\n    const endDate = document.getElementById(\"endDate\");\n\n    const numDaysElt = document.getElementById(\"numDays\");\n\n    const memberList = document.getElementById(\"memberList\");\n\n    const today = new Date();\n    let todayMonth = today.getMonth() + 1;\n    let todayDay = today.getDate();\n    \n    let monthStr;\n    if (todayMonth < 10)\n      monthStr = '0' + todayMonth.toString();\n    else\n      monthStr = todayMonth.toString();\n\n    let dayStr;\n    if (todayDay < 10)\n      dayStr = '0' + todayDay.toString();\n    else\n      dayStr = todayDay.toString();\n    \n    endDate.value = today.getFullYear() + '-' + monthStr + '-' + dayStr;\n\n    function dateStrToNum(d) {\n      const dateObj = new Date(d);\n      return dateObj.getUTCDate() + dateObj.getUTCMonth() * 50 + dateObj.getUTCFullYear() * 1000;\n    }\n\n    function getDateBefore(d) {\n      let front = 0;\n      let back = days.length;\n      while (front < back) {\n        const cur = front + Math.floor((back - front) / 2);\n        if (d === days[cur]) {\n          return days[cur];\n        } else if (d < days[cur]) {\n          back = cur;\n        } else {\n          front = cur + 1;\n        }\n      }\n      if (front === 0) {\n        return null;\n      } else {\n        return days[front - 1]\n      }\n    }\n\n    function refreshStats() {\n      if (startDate.value.length === 0) {\n        numDaysElt.hidden = true;\n        numDaysElt.innerHTML = \"\";\n        memberList.innerHTML = \"\";\n        return;\n      }\n      \n      const startDateNum = dateStrToNum(startDate.value);\n      const endDateNum = dateStrToNum(endDate.value);\n      \n      const start = getDateBefore(startDateNum - 1);\n      const end = getDateBefore(endDateNum);\n\n      let totalDays;\n      if (end === null) {\n        totalDays = 0;\n      } else if (start === null) {\n        totalDays = days.indexOf(end) + 1;\n      } else {\n        totalDays = days.indexOf(end) - days.indexOf(start);\n      }\n\n      if (startDateNum > endDateNum) {\n        numDaysElt.hidden = false;\n        numDaysElt.innerHTML = \"Total Days: \" + totalDays;\n        memberList.innerHTML = \"\";\n        return;\n      }\n\n      let startSummary;\n      if (start === null) {\n        startSummary = {};\n      } else {\n        startSummary = attendanceTotals[start];\n      }\n\n      let endSummary;\n      if (end === null) {\n        endSummary = {};\n      } else {\n        endSummary = attendanceTotals[end];\n      }\n\n      const fillData = [];\n      Object.keys(endSummary).forEach(memId => {\n        let percentage;\n        if (totalDays !== 0) {\n          let startVal = startSummary[memId];\n          if (startVal === undefined) startVal = 0;\n\n          let endVal = endSummary[memId];\n          if (endVal === undefined) endVal = 0;\n\n          percentage = 100 * ((endVal - startVal) / totalDays);\n          \n          if (percentage !== 0) {\n            fillData.push({\n              html: '<b>' + idToName[memId] + '</b>: ' + percentage.toFixed(1) + '%',\n              amount: endVal - startVal\n            });\n          }\n        }\n      });\n      fillData.sort(function(a, b) {\n        if (a.amount === b.amount) {\n          return a.html.localeCompare(b.html);\n        } else {\n          return b.amount - a.amount;\n        }\n      });\n\n      numDaysElt.hidden = false;\n      numDaysElt.innerHTML = \"Total Days: \" + totalDays;\n      memberList.innerHTML = fillData.map(function(d) {return d.html}).join(\"<br/>\");\n    }\n    \n    startDate.addEventListener(\"change\", refreshStats);\n    endDate.addEventListener(\"change\", refreshStats);\n    </script>\n    ";
}
exports.attendanceSummaryHTML = attendanceSummaryHTML;
function fullFinanceHistoryHTML() {
    var moneyData = {};
    var minDateId = Number.POSITIVE_INFINITY;
    var maxDateId = Number.NEGATIVE_INFINITY;
    get_1.getIncomes().forEach(function (entry) {
        if (!entry.date || !entry.amount)
            throw types_1.ErrorType.AssertionError;
        var dateId = entry.date.getValue().getFullYear() * 12 + entry.date.getValue().getMonth();
        if (dateId < minDateId)
            minDateId = dateId;
        if (dateId > maxDateId)
            maxDateId = dateId;
        var curDetails = moneyData[dateId];
        if (!curDetails) {
            curDetails = { income: 0, expense: 0 };
            moneyData[dateId] = curDetails;
        }
        curDetails.income += entry.amount.getValue();
    });
    get_1.getExpenses().forEach(function (entry) {
        if (!entry.date || !entry.amount)
            throw types_1.ErrorType.AssertionError;
        var dateId = entry.date.getValue().getFullYear() * 12 + entry.date.getValue().getMonth();
        if (dateId < minDateId)
            minDateId = dateId;
        if (dateId > maxDateId)
            maxDateId = dateId;
        var curDetails = moneyData[dateId];
        if (!curDetails) {
            curDetails = { income: 0, expense: 0 };
            moneyData[dateId] = curDetails;
        }
        curDetails.expense += entry.amount.getValue();
    });
    var chartData = [];
    var prevTotal = 0;
    for (var dateId = minDateId; dateId <= maxDateId; ++dateId) {
        var month = void 0;
        switch (dateId % 12) {
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
                throw types_1.ErrorType.AssertionError;
        }
        var year = Math.floor(dateId / 12);
        var startAsNum = prevTotal;
        var start = types_1.centsToString(new types_1.IntData(startAsNum));
        var details = moneyData[dateId];
        if (!details) {
            chartData.push("\n        {\n          \"date\": \"" + month + "<br>" + year + "\",\n          \"startAsNum\": " + startAsNum + ",\n          \"endAsNum\": " + startAsNum + ",\n          \"start\": \"" + start + "\",\n          \"end\": \"" + start + "\",\n          \"income\": \"$0.00\",\n          \"expense\": \"$0.00\"\n        }\n      ");
        }
        else {
            var income = types_1.centsToString(new types_1.IntData(details.income));
            var expense = types_1.centsToString(new types_1.IntData(details.expense));
            var endAsNum = prevTotal + details.income - details.expense;
            var end = types_1.centsToString(new types_1.IntData(endAsNum));
            chartData.push("\n        {\n          \"date\": \"" + month + "<br>" + year + "\",\n          \"startAsNum\": " + startAsNum + ",\n          \"endAsNum\": " + endAsNum + ",\n          \"start\": \"" + start + "\",\n          \"end\": \"" + end + "\",\n          \"income\": \"" + income + "\",\n          \"expense\": \"" + expense + "\"\n        }\n      ");
            prevTotal = endAsNum;
        }
    }
    return "\n    <!-- Styles -->\n    <style>\n    #chartdiv {\n      width: 100%;\n      height: 430px;\n    }\n    </style>\n    \n    <!-- Resources -->\n    \n    <script src=\"https://www.amcharts.com/lib/3/amcharts.js\"></script>\n    <script src=\"https://www.amcharts.com/lib/3/serial.js\"></script>\n    <script src=\"https://www.amcharts.com/lib/3/plugins/export/export.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://www.amcharts.com/lib/3/plugins/export/export.css\" type=\"text/css\" media=\"all\" />\n    <script src=\"https://www.amcharts.com/lib/3/themes/light.js\"></script>\n    \n    <!-- Chart code -->\n    <script>\n    \n    var chart = AmCharts.makeChart( \"chartdiv\", {\n      \"type\": \"serial\",\n      \"theme\": \"light\",\n      \"dataProvider\": [ " + chartData.join(',') + " ],\n      \"valueAxes\": [ {\n        \"axisAlpha\": 0,\n        \"gridAlpha\": 0.1,\n        \"position\": \"left\"\n      } ],\n      \"startDuration\": 0,\n      \"graphs\": [ {\n        \"id\": \"g1\",\n        \"balloonText\": \"Start: <b>[[start]]</b><br>End: <b>[[end]]</b><br>Income: <b>[[income]]</b><br>Expense: <b>[[expense]]</b>\",\n        \"fillAlphas\": 0.9,\n          \"fillColors\": \"#9aee91\",\n        \"lineColor\": \"#55c54a\",\n        \"lineAlpha\": 1,\n        \"negativeFillColors\": \"#fa8072\",\n        \"negativeLineColor\": \"#db4c3c\",\n        \"openField\": \"startAsNum\",\n        \"type\": \"column\",\n        \"valueField\": \"endAsNum\"\n      } ],\n      \"columnWidth\": 0.85,\n      \"categoryField\": \"date\",\n      \"categoryAxis\": {\n        \"gridPosition\": \"start\",\n        \"axisAlpha\": 0,\n        \"gridAlpha\": 0.1\n      },\n      \"chartScrollbar\": {\n        \"graph\": \"g1\",\n        \"graphType\": \"line\",\n        \"hideResizeGrips\": true,\n        \"scrollbarHeight\": 40\n      },\n      \"chartCursor\": {\n        \"valueLineBalloonEnabled\": true\n      },\n      \"export\": {\n        \"enabled\": true,\n        \"position\": \"bottom-right\"\n      }\n    } );\n    \n    chart.addListener( \"rendered\", zoomChart );\n    zoomChart();\n    \n    function zoomChart() {\n      chart.zoomToIndexes( chart.dataProvider.length - 9, chart.dataProvider.length - 1 );\n    }\n    </script>\n    \n    <!-- HTML -->\n    <div id=\"chartdiv\"></div>\n    ";
}
exports.fullFinanceHistoryHTML = fullFinanceHistoryHTML;
function addMemberHTML() {
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Name:\n      <input type=\"text\" id=\"name\">\n    </p>\n    <p>\n      Date Joined:\n      <input type=\"date\" id=\"dateJoined\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      const today = new Date();\n      let month;\n      if (today.getMonth() + 1 < 10) {\n        month = '0' + (today.getMonth() + 1);\n      } else {\n        month = (today.getMonth() + 1).toString();\n      }\n      let date;\n      if (today.getDate() < 10) {\n        date = '0' + today.getDate();\n      } else {\n        date = today.getDate().toString();\n      }\n      document.getElementById('dateJoined').value = today.getFullYear() + '-' + month + '-' + date;\n\n      function datestrToDate(date) {\n          const vals = date.split('-');\n          const year = parseInt(vals[0], 10);\n          const month = parseInt(vals[1], 10);\n          const day = parseInt(vals[2], 10);\n          return new Date(year, month - 1, day);\n      }\n\n      function go() {\n        const name = document.getElementById('name').value;\n        const dateJoined = datestrToDate(document.getElementById('dateJoined').value).valueOf();\n        google.script.run.handleAddMember(name, dateJoined);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addMemberHTML = addMemberHTML;
function addAttendanceHTML() {
    var nameCheckbox = [];
    get_1.getMembers().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).forEach(function (member) {
        if (!member.id || !member.name)
            throw types_1.ErrorType.AssertionError;
        nameCheckbox.push("<input type=\"checkbox\" class=\"name\" value=\"" + member.id.toString() + "\"/> " + types_1.capitalizeString(member.name.toString()) + "\n");
    });
    var clubInfo = get_1.getClubInfo();
    var selected = {
        winter: false,
        spring: false,
        summer: false,
        fall: false,
    };
    switch (clubInfo.currentQuarterId.getQuarter()) {
        case types_1.Quarter.WINTER:
            selected.winter = true;
            break;
        case types_1.Quarter.SPRING:
            selected.spring = true;
            break;
        case types_1.Quarter.SUMMER:
            selected.summer = true;
            break;
        case types_1.Quarter.FALL:
            selected.fall = true;
            break;
    }
    var year = clubInfo.currentQuarterId.getYear();
    return "\n    <!DOCTYPE html>\n    <style>\n    #wrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      width: 250px;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n    \n    <body>\n    <p>\n      Date:\n      <input type=\"date\" id=\"date\">\n    </p>\n    <p>\n      Members Present: \n      <div id=\"wrapper\">\n        " + nameCheckbox.join('</br>') + "\n      </div>\n    </p>\n    <p>\n      Quarter:\n      <select id=\"quarter\">\n        <option selected=" + selected.winter + ">Winter</option>\n        <option selected=" + selected.spring + ">Spring</option>\n        <option selected=" + selected.summer + ">Summer</option>\n        <option selected=" + selected.fall + ">Fall</option>\n      </select>\n    </p>\n    <p>\n      Year:\n      <input type=\"text\" id=\"year\" value=\"" + year + "\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      const today = new Date();\n      let month;\n      if (today.getMonth() + 1 < 10) {\n        month = '0' + (today.getMonth() + 1);\n      } else {\n        month = (today.getMonth() + 1).toString();\n      }\n      let date;\n      if (today.getDate() < 10) {\n        date = '0' + today.getDate();\n      } else {\n        date = today.getDate().toString();\n      }\n      document.getElementById('date').value = today.getFullYear() + '-' + month + '-' + date;\n\n      function datestrToDate(date) {\n          const vals = date.split('-');\n          const year = parseInt(vals[0], 10);\n          const month = parseInt(vals[1], 10);\n          const day = parseInt(vals[2], 10);\n          return new Date(year, month - 1, day);\n      }\n\n      function go() {\n        const date = datestrToDate(document.getElementById('date').value).valueOf();\n        const nameList = [];\n        for (const box of document.getElementsByClassName('name')) {\n          if (box.checked) {\n            nameList.push(box.value);\n          }\n        }\n        const members = nameList.join(',');\n        const quarter = document.getElementById('quarter').value;\n        const year = document.getElementById('year').value;\n\n        google.script.run.handleAddAttendance(date, members, quarter, year);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addAttendanceHTML = addAttendanceHTML;
function addIncomeHTML() {
    var payTypes = get_1.getPaymentTypes().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).map(function (payType) {
        if (!payType.name)
            throw types_1.ErrorType.AssertionError;
        return "<option>" + types_1.capitalizeString(payType.name.getValue()) + "</option>";
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Date: \n      <input type=\"date\" id=\"date\">\n    </p>\n    <p>\n      Amount:\n      <input type=\"text\" id=\"amount\" value=\"0.00\">\n    </p>\n    <p>\n      Description:\n      <input type=\"text\" id=\"description\">\n    </p>\n    <p>\n      Payment Type: \n      <select id=\"payType\">\n " + payTypes + "</select>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      const today = new Date();\n      let month;\n      if (today.getMonth() + 1 < 10) {\n        month = '0' + (today.getMonth() + 1);\n      } else {\n        month = (today.getMonth() + 1).toString();\n      }\n      let date;\n      if (today.getDate() < 10) {\n        date = '0' + today.getDate();\n      } else {\n        date = today.getDate().toString();\n      }\n      document.getElementById('date').value = today.getFullYear() + '-' + month + '-' + date;\n\n      function datestrToDate(date) {\n          const vals = date.split('-');\n          const year = parseInt(vals[0], 10);\n          const month = parseInt(vals[1], 10);\n          const day = parseInt(vals[2], 10);\n          return new Date(year, month - 1, day);\n      }\n\n      function go() {\n        const date = datestrToDate(document.getElementById('date').value).valueOf();\n        const amount = document.getElementById('amount').value;\n        const description = document.getElementById('description').value;\n        const payType = document.getElementById('payType').value;\n\n        google.script.run.handleAddIncome(date, amount, description, payType);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addIncomeHTML = addIncomeHTML;
function addExpenseHTML() {
    var payTypes = get_1.getPaymentTypes().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).map(function (payType) {
        if (!payType.name)
            throw types_1.ErrorType.AssertionError;
        return "<option>" + types_1.capitalizeString(payType.name.getValue()) + "</option>";
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Date: \n      <input type=\"date\" id=\"date\">\n    </p>\n    <p>\n      Amount:\n      <input type=\"text\" id=\"amount\" value=\"0.00\">\n    </p>\n    <p>\n      Description:\n      <input type=\"text\" id=\"description\">\n    </p>\n    <p>\n      Recipient:\n      <input type=\"text\" id=\"recipient\">\n    </p>\n    <p>\n      Payment Type: \n      <select id=\"payType\">\n " + payTypes + "</select>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      const today = new Date();\n      let month;\n      if (today.getMonth() + 1 < 10) {\n        month = '0' + (today.getMonth() + 1);\n      } else {\n        month = (today.getMonth() + 1).toString();\n      }\n      let date;\n      if (today.getDate() < 10) {\n        date = '0' + today.getDate();\n      } else {\n        date = today.getDate().toString();\n      }\n      document.getElementById('date').value = today.getFullYear() + '-' + month + '-' + date;\n\n      function datestrToDate(date) {\n          const vals = date.split('-');\n          const year = parseInt(vals[0], 10);\n          const month = parseInt(vals[1], 10);\n          const day = parseInt(vals[2], 10);\n          return new Date(year, month - 1, day);\n      }\n\n      function go() {\n        const date = datestrToDate(document.getElementById('date').value).valueOf();\n        const amount = document.getElementById('amount').value;\n        const description = document.getElementById('description').value;\n        const recipient = document.getElementById('recipient').value;\n        const payType = document.getElementById('payType').value;\n\n        google.script.run.handleAddExpense(date, amount, description, recipient, payType);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addExpenseHTML = addExpenseHTML;
function addStatementHTML() {
    var idToPayType = {};
    get_1.getPaymentTypes().forEach(function (entry) {
        if (!entry.id || !entry.name)
            throw types_1.ErrorType.AssertionError;
        idToPayType[entry.id.getValue()] = types_1.capitalizeString(entry.name.getValue());
    });
    var incomes = [];
    get_1.getIncomes().sort(types_1.compareByDateDesc).forEach(function (entry) {
        if (!entry.id || !entry.date || !entry.amount || !entry.description || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        if (entry.statementId.getValue() === -1) {
            incomes.push("<input type=\"checkbox\" class=\"income\" value=\"" + entry.id.toString() + "\"/>" + entry.date.toDateString() + ", " + types_1.centsToString(entry.amount) + " (" + idToPayType[entry.paymentTypeId.getValue()] + ") - " + entry.description.toString() + "\n");
        }
    });
    var expenses = [];
    get_1.getExpenses().sort(types_1.compareByDateDesc).forEach(function (entry) {
        if (!entry.id || !entry.date || !entry.amount || !entry.description || !entry.paymentTypeId || !entry.statementId)
            throw types_1.ErrorType.AssertionError;
        if (entry.statementId.getValue() === -1) {
            expenses.push("<input type=\"checkbox\" class=\"expense\" value=\"" + entry.id.toString() + "\"/>" + entry.date.toDateString() + ", -" + types_1.centsToString(entry.amount) + " (" + idToPayType[entry.paymentTypeId.getValue()] + ") - " + entry.description.toString() + "\n");
        }
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    .wrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n    \n    <body>\n    <p>\n      Date:\n      <input type=\"date\" id=\"date\">\n    </p>\n\n    <p>\n      Incomes:\n      <div class=\"wrapper\">\n        " + incomes.join('</br>') + "\n      </div>\n    </p>\n    <p>\n      Expenses:\n      <div class=\"wrapper\">\n        " + expenses.join('</br>') + "\n      </div>\n    </p>\n\n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      const today = new Date();\n      let month;\n      if (today.getMonth() + 1 < 10) {\n        month = '0' + (today.getMonth() + 1);\n      } else {\n        month = (today.getMonth() + 1).toString();\n      }\n      let date;\n      if (today.getDate() < 10) {\n        date = '0' + today.getDate();\n      } else {\n        date = today.getDate().toString();\n      }\n      document.getElementById('date').value = today.getFullYear() + '-' + month + '-' + date;\n\n      function datestrToDate(date) {\n          const vals = date.split('-');\n          const year = parseInt(vals[0], 10);\n          const month = parseInt(vals[1], 10);\n          const day = parseInt(vals[2], 10);\n          return new Date(year, month - 1, day);\n      }\n\n      function go() {\n        const date = datestrToDate(document.getElementById('date').value).valueOf();\n        \n        const incomeList = [];\n        for (const box of document.getElementsByClassName('income')) {\n          if (box.checked) {\n            incomeList.push(box.value);\n          }\n        }\n        const incomes = incomeList.join('\\n');\n\n        const expenseList = [];\n        for (const box of document.getElementsByClassName('expense')) {\n          if (box.checked) {\n            expenseList.push(box.value);\n          }\n        }\n        const expenses = expenseList.join('\\n');\n\n        google.script.run.handleAddStatement(date, incomes, expenses);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addStatementHTML = addStatementHTML;
function addRecipientHTML() {
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Name:\n      <input type=\"text\" id=\"name\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const name = document.getElementById('name').value;\n        google.script.run.handleAddRecipient(name);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addRecipientHTML = addRecipientHTML;
function addPayTypeHTML() {
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Name:\n      <input type=\"text\" id=\"name\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const name = document.getElementById('name').value;\n        google.script.run.handleAddPayType(name);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.addPayTypeHTML = addPayTypeHTML;
function renameMemberHTML() {
    var memberNames = get_1.getMembers().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).map(function (member) {
        if (!member.name)
            throw types_1.ErrorType.AssertionError;
        return "<option>" + types_1.capitalizeString(member.name.getValue()) + "</option>";
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Old Name: \n      <select id=\"oldName\">\n " + memberNames + "</select>\n    </p>\n\n    <p>\n      New Name:\n      <input type=\"text\" id=\"newName\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const oldName = document.getElementById('oldName').value;\n        const newName = document.getElementById('newName').value;\n        google.script.run.handleRenameMember(oldName, newName);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.renameMemberHTML = renameMemberHTML;
function renamePaymentTypeHTML() {
    var payTypes = get_1.getPaymentTypes().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).map(function (member) {
        if (!member.name)
            throw types_1.ErrorType.AssertionError;
        return "<option>" + types_1.capitalizeString(member.name.getValue()) + "</option>";
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Old Name: \n      <select id=\"oldName\">\n " + payTypes + "</select>\n    </p>\n\n    <p>\n      New Name:\n      <input type=\"text\" id=\"newName\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const oldName = document.getElementById('oldName').value;\n        const newName = document.getElementById('newName').value;\n        google.script.run.handleRenamePaymentType(oldName, newName);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.renamePaymentTypeHTML = renamePaymentTypeHTML;
function renameRecipientHTML() {
    var recipients = get_1.getRecipients().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).map(function (member) {
        if (!member.name)
            throw types_1.ErrorType.AssertionError;
        return "<option>" + types_1.capitalizeString(member.name.getValue()) + "</option>";
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Old Name: \n      <select id=\"oldName\">\n " + recipients + "</select>\n    </p>\n\n    <p>\n      New Name:\n      <input type=\"text\" id=\"newName\">\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const oldName = document.getElementById('oldName').value;\n        const newName = document.getElementById('newName').value;\n        google.script.run.handleRenameRecipient(oldName, newName);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.renameRecipientHTML = renameRecipientHTML;
function mergeMemberHTML() {
    var nameSelect = [];
    var nameCheckbox = [];
    get_1.getMembers().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).forEach(function (member) {
        if (!member.name)
            throw types_1.ErrorType.AssertionError;
        nameSelect.push("<option>" + types_1.capitalizeString(member.name.getValue()) + "</option>");
        nameCheckbox.push("<input type=\"checkbox\" class=\"name\" value=\"" + types_1.capitalizeString(member.name.toString()) + "\"/> " + types_1.capitalizeString(member.name.toString()) + "\n");
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    #wrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      width: 250px;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n    \n    <body>\n    <p>\n      Aliases:\n      <div id=\"wrapper\">\n        " + nameCheckbox.join('</br>') + "\n      </div>\n    </p>\n\n    <p>\n      Merge into:\n      <select id=\"name\">\n " + nameSelect + "</select>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const nameList = [];\n        const nameBoxes = document.getElementsByClassName('name');\n        for (const box of nameBoxes) {\n          if (box.checked) {\n            nameList.push(box.value);\n          }\n        }\n        const aliases = nameList.join('\\n');\n        const name = document.getElementById('name').value;\n        google.script.run.handleMergeMember(aliases, name);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.mergeMemberHTML = mergeMemberHTML;
function mergePaymentTypeHTML() {
    var nameSelect = [];
    var nameCheckbox = [];
    get_1.getPaymentTypes().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).forEach(function (payType) {
        if (!payType.name)
            throw types_1.ErrorType.AssertionError;
        nameSelect.push("<option>" + types_1.capitalizeString(payType.name.getValue()) + "</option>");
        nameCheckbox.push("<input type=\"checkbox\" class=\"name\" value=\"" + types_1.capitalizeString(payType.name.toString()) + "\"/> " + types_1.capitalizeString(payType.name.toString()) + "\n");
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    #wrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      width: 250px;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n    \n    <body>\n    <p>\n      Aliases:\n      <div id=\"wrapper\">\n        " + nameCheckbox.join('</br>') + "\n      </div>\n    </p>\n\n    <p>\n      Merge into:\n      <select id=\"name\">\n " + nameSelect + "</select>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const nameList = [];\n        const nameBoxes = document.getElementsByClassName('name');\n        for (const box of nameBoxes) {\n          if (box.checked) {\n            nameList.push(box.value);\n          }\n        }\n        const aliases = nameList.join('\\n');\n        const name = document.getElementById('name').value;\n        google.script.run.handleMergePaymentType(aliases, name);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.mergePaymentTypeHTML = mergePaymentTypeHTML;
function mergeRecipientHTML() {
    var nameSelect = [];
    var nameCheckbox = [];
    get_1.getRecipients().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).forEach(function (recipient) {
        if (!recipient.name)
            throw types_1.ErrorType.AssertionError;
        nameSelect.push("<option>" + types_1.capitalizeString(recipient.name.getValue()) + "</option>");
        nameCheckbox.push("<input type=\"checkbox\" class=\"name\" value=\"" + types_1.capitalizeString(recipient.name.toString()) + "\"/> " + types_1.capitalizeString(recipient.name.toString()) + "\n");
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    #wrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      width: 250px;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n    \n    <body>\n    <p>\n      Aliases:\n      <div id=\"wrapper\">\n        " + nameCheckbox.join('</br>') + "\n      </div>\n    </p>\n\n    <p>\n      Merge into:\n      <select id=\"name\">\n " + nameSelect + "</select>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const nameList = [];\n        const nameBoxes = document.getElementsByClassName('name');\n        for (const box of nameBoxes) {\n          if (box.checked) {\n            nameList.push(box.value);\n          }\n        }\n        const aliases = nameList.join('\\n');\n        const name = document.getElementById('name').value;\n        google.script.run.handleMergeRecipient(aliases, name);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.mergeRecipientHTML = mergeRecipientHTML;
function pollNotificationHTML() {
    return "\n    <!DOCTYPE html>\n    <style>\n    </style>\n    \n    <body>\n    <p>\n      Title:\n      <input type=\"text\" id=\"title\"/>\n    </p>\n\n    <p>\n      Deadline:\n      <input type=\"datetime-local\" id=\"deadline\"/>\n    </p>\n\n    <p>\n      Link:\n      <input type=\"text\" id=\"link\"/>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      document.getElementById('deadline').value = new Date().toISOString().substring(0, 11) + '23:59';\n\n      function go() {\n        const title = document.getElementById('title').value;\n        const deadline = document.getElementById('deadline').value;\n        const link = document.getElementById('link').value;\n        \n        google.script.run.handlePollNotification(title, deadline, link);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.pollNotificationHTML = pollNotificationHTML;
function notifyMembersHTML() {
    var members = [];
    get_1.getMembers().sort(function (a, b) {
        if (!a.name || !b.name)
            throw types_1.ErrorType.AssertionError;
        return a.name.getValue().localeCompare(b.name.getValue());
    }).forEach(function (member) {
        if (!member.name || !member.email)
            throw types_1.ErrorType.AssertionError;
        if (member.email.getValue()) {
            members.push("<input type=\"checkbox\" class=\"memberName\" value=\"" + types_1.capitalizeString(member.name.toString()) + "\"/> " + types_1.capitalizeString(member.name.toString()) + "\n");
        }
    });
    return "\n    <!DOCTYPE html>\n    <style>\n    #memberWrapper {\n      border-style: solid;\n      border-color: #FFFFFF;\n      width: 250px;\n      height: 80px;\n      overflow-y: scroll;\n    }\n    </style>\n\n    <body>\n    <p>\n      Members:\n      <div id=\"memberWrapper\">\n        " + members.join('</br>') + "\n      </div>\n    </p>\n\n    <p>\n      Subject:\n      <input type=\"text\" id=\"subject\"/>\n    </p>\n\n    <p>\n      Body:\n      <textarea rows=\"4\" cols=\"30\" id=\"body\"></textarea>\n    </p>\n    \n    <button onclick=\"go()\">\n      Go!\n    </button>\n    </body>\n\n    <script>\n      function go() {\n        const memberList = [];\n        const memberBoxes = document.getElementsByClassName('memberName');\n        for (const box of memberBoxes) {\n          if (box.checked) {\n            memberList.push(box.value);\n          }\n        }\n        const members = memberList.join('\\n');\n        const subject = document.getElementById('subject').value;\n        const body = document.getElementById('body').value;\n        \n        google.script.run.handleNotifyMembers(members, subject, body);\n        google.script.host.close();\n      }\n    </script>\n    ";
}
exports.notifyMembersHTML = notifyMembersHTML;


/***/ })
/******/ ]);