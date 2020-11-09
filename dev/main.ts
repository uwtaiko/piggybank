import { addExpense, addIncome, addMemberIOU, collectDues, confirmTransfer, nextQuarter, resolveMemberIOU, takeAttendance, transferFunds, updateContactSettings, updateMemberStatus } from './forms/actions';
import { disableForm } from './forms/disable';
import { ID as AE_ID } from './ids/ae';
import { ID as AI_ID } from './ids/ai';
import { ID as AMI_ID } from './ids/ami';
import { ID as CD_ID } from './ids/cd';
import { ID as CT_ID } from './ids/ct';
import { ID as NQ_ID } from './ids/nq';
import { ID as RMI_ID } from './ids/rmi';
import { ID as TA_ID } from './ids/ta';
import { ID as TABLES_ID } from './ids/tablesId';
import { ID as TF_ID } from './ids/tf';
import { ID as UCS_ID } from './ids/ucs';
import { ID as UMS_ID } from './ids/ums';
import { ID as VIEWS_ID } from './ids/viewsId';
import { MEMBER_DUES, NUM_ATTNS, OFFICER_DUES, START_QUARTER, START_YEAR } from './projectInfo';
import { orderBy } from './tableOps';
import { createBackup } from './tables/backup';
import { fillWithData } from './test/unitTester';
import { DataTable, EditEvent, ErrorType, GeneratedForm, IntData, Quarter, QuarterData, RefreshLogger } from './types';
import { menuAddAttendance, menuAddExpense, menuAddIncome, menuAddMember, menuAddPayType, menuAddRecipient, menuAddStatement, menuDeleteMember, mergeMember, mergePaymentType, mergeRecipient, notifyMembers, pollNotification, renameMember, renamePaymentType, renameRecipient } from './views/handlers';
import { addAttendanceHTML, addExpenseHTML, addIncomeHTML, addMemberHTML, addPayTypeHTML, addRecipientHTML, addStatementHTML, attendanceRecordsHTML, attendanceSummaryHTML, deleteMemberHTML, fullFinanceHistoryHTML, memberDetailsHTML, mergeMemberHTML, mergePaymentTypeHTML, mergeRecipientHTML, notifyMembersHTML, pollNotificationHTML, renameMemberHTML, renamePaymentTypeHTML, renameRecipientHTML } from './views/html';

export function initializeAll() {
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }
    initializeTables();
    initializeViews();

    setupTriggers();

    refreshAll();
}
export function resetAll() {
    resetTables();
    resetViews();
}

export function refreshAll() {
    RefreshLogger.refreshAll();
    //refreshAllViews();
    //refreshAllForms();
}

export function backupTables() {
    createBackup();
}

export function setupTriggers() {
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }
    // Run everyDay everyday at 1AM
    ScriptApp.newTrigger('everyDay')
        .timeBased()
        .everyDays(1)
        .atHour(1)
        .create();
    // Run everyWeek every week's Sunday at 1AM
    ScriptApp.newTrigger('everyWeek')
        .timeBased()
        .onWeekDay(ScriptApp.WeekDay.SUNDAY)
        .atHour(1)
        .create();
    // Run everyMonth on the first of the month at 1AM
    ScriptApp.newTrigger('everyMonth')
        .timeBased()
        .onMonthDay(1)
        .atHour(1)
        .create()

    ScriptApp.newTrigger('tablesOnOpen')
        .forSpreadsheet(TABLES_ID)
        .onOpen()
        .create();
    ScriptApp.newTrigger('tablesOnEdit')
        .forSpreadsheet(TABLES_ID)
        .onEdit()
        .create();

    ScriptApp.newTrigger('viewsOnOpen')
        .forSpreadsheet(VIEWS_ID)
        .onOpen()
        .create();
    ScriptApp.newTrigger('viewsOnEdit')
        .forSpreadsheet(VIEWS_ID)
        .onEdit()
        .create();

    ScriptApp.newTrigger('addExpenseOnFormSubmit')
        .forForm(AE_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('addIncomeOnFormSubmit')
        .forForm(AI_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('addMemberIouOnFormSubmit')
        .forForm(AMI_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('collectDuesOnFormSubmit')
        .forForm(CD_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('confirmTransferOnFormSubmit')
        .forForm(CT_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('nextQuarterOnFormSubmit')
        .forForm(NQ_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('resolveMemberIouOnFormSubmit')
        .forForm(RMI_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('takeAttendanceOnFormSubmit')
        .forForm(TA_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('transferFundsOnFormSubmit')
        .forForm(TF_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('updateContactSettingsOnFormSubmit')
        .forForm(UCS_ID)
        .onFormSubmit()
        .create();
    ScriptApp.newTrigger('updateMemberStatusOnFormSubmit')
        .forForm(UMS_ID)
        .onFormSubmit()
        .create();
}

export function everyDay() {
    refreshAll();
}
export function everyWeek() {
    createBackup();

    //const today = new Date();
    // Every other week
    //if (today.getDate() % 14 >= 7) {
    //    createBackup();
    //}
}
export function everyMonth() { }

export function tablesOnOpen() { }
export function tablesOnEdit(e: EditEvent) {
    // REFRESH DISABLED
    const sheet = e.range.getSheet();

    if (sheet.getName() !== 'ClubInfo') {
        orderBy(sheet, ['id']);
    }

    switch (sheet.getName()) {
        case 'Member':
            RefreshLogger.markAsUpdated(DataTable.MEMBER);
            break;
        case 'Income':
            RefreshLogger.markAsUpdated(DataTable.INCOME);
            break;
        case 'Expense':
            RefreshLogger.markAsUpdated(DataTable.EXPENSE);
            break;
        case 'Recipient':
            RefreshLogger.markAsUpdated(DataTable.RECIPIENT);
            break;
        case 'PaymentType':
            RefreshLogger.markAsUpdated(DataTable.PAYMENT_TYPE);
            break;
        case 'Statement':
            RefreshLogger.markAsUpdated(DataTable.STATEMENT);
            break;
        case 'Attendance':
            RefreshLogger.markAsUpdated(DataTable.ATTENDANCE);
            break;
        case 'ClubInfo':
            RefreshLogger.markAsUpdated(DataTable.CLUB_INFO);
            break;
    }

    //RefreshLogger.refresh();
}

export function viewsOnOpen() {
    createViewsMenu();
}
export function viewsOnEdit(e: EditEvent) {
    e.source.getActiveRangeList()
        .setFontColor('#ff0000')
        .setFontWeight('bold');
}

function getMostRecentResponse(form: GoogleAppsScript.Forms.Form) {
    const resList = form.getResponses();
    const shortItemList = resList[resList.length - 1].getItemResponses();
    const fullItemList: (string | undefined)[] = Array(form.getItems().length).fill('');
    for (let i = 0; i < shortItemList.length; ++i) {
        const item = shortItemList[i].getItem()
        const newIndex = item.getIndex();
        switch (item.getType()) {
            case FormApp.ItemType.CHECKBOX:
            case FormApp.ItemType.GRID:
                fullItemList[newIndex] = (shortItemList[i].getResponse() as string[]).join('\n');
                break;
            case FormApp.ItemType.CHECKBOX_GRID:
                fullItemList[newIndex] = (shortItemList[i].getResponse() as string[][]).map(item => item.join('\n')).join('\n\n');
                break;
            default:
                fullItemList[newIndex] = shortItemList[i].getResponse() as string;
                break;
        }
    }
    return fullItemList;
}
export function addExpenseOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(AE_ID));

    // Short text
    const amountRes = resItems[0];
    // Long text
    const desc = resItems[1];
    // Short text
    const recipient = resItems[2];
    // Multi-choice
    const paymentType = resItems[3];

    if (
        amountRes === undefined ||
        desc === undefined ||
        recipient === undefined ||
        paymentType === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    disableForm(GeneratedForm.ADD_EXPENSE);
    RefreshLogger.markAsPriority(GeneratedForm.ADD_EXPENSE);
    addExpense(amountRes, desc, recipient, paymentType);
    RefreshLogger.refresh();
}
export function addIncomeOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(AI_ID));

    // Short text
    const amountRes = resItems[0];
    // Long text
    const desc = resItems[1];
    // Multi-choice
    const paymentType = resItems[2];

    if (
        amountRes === undefined ||
        desc === undefined ||
        paymentType === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    disableForm(GeneratedForm.ADD_INCOME);
    RefreshLogger.markAsPriority(GeneratedForm.ADD_INCOME);
    addIncome(amountRes, desc, paymentType);
    RefreshLogger.refresh();
}
export function addMemberIouOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(AMI_ID));

    // Checkbox
    const membersRes = resItems[0];
    // Short text
    const amount = resItems[1];
    // Long text
    const description = resItems[2];

    if (
        membersRes === undefined ||
        amount === undefined ||
        description === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    let members: string[];
    if (membersRes.length === 0) {
        members = [];
    } else {
        members = membersRes.split('\n');
    }

    disableForm(GeneratedForm.ADD_MEMBER_IOU);
    RefreshLogger.markAsPriority(GeneratedForm.ADD_MEMBER_IOU);
    addMemberIOU(members, amount, description);
    RefreshLogger.refresh();
}
export function collectDuesOnFormSubmit() {
    // REFRESH DISABLED
    const resItems = getMostRecentResponse(FormApp.openById(CD_ID));

    // Checkbox
    const memListRes = resItems[0];
    // Multi-choice
    const paymentTypeRes = resItems[1];

    if (
        memListRes === undefined ||
        paymentTypeRes === undefined
    ) {
        throw ErrorType.AssertionError;
    }
    
    let memList: string[];
    if (memListRes.length === 0) {
        memList = [];
    } else {
        memList = memListRes.split('\n');
    }

    //disableForm(GeneratedForm.COLLECT_DUES);
    RefreshLogger.markAsPriority(GeneratedForm.COLLECT_DUES);
    collectDues(memList, paymentTypeRes);
    //RefreshLogger.refresh();
}
export function confirmTransferOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(CT_ID));

    // Checkbox
    const statementListRes = resItems[0];

    if (
        statementListRes === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    let statementList: string[];
    if (statementListRes.length === 0) {
        statementList = [];
    } else {
        statementList = statementListRes.split('\n');
    }

    disableForm(GeneratedForm.CONFIRM_TRANSFER);
    RefreshLogger.markAsPriority(GeneratedForm.CONFIRM_TRANSFER);
    confirmTransfer(statementList);
    RefreshLogger.refresh();
}
export function nextQuarterOnFormSubmit() {
    disableForm(GeneratedForm.NEXT_QUARTER);
    RefreshLogger.markAsPriority(GeneratedForm.NEXT_QUARTER);
    nextQuarter();
    RefreshLogger.refresh();
}
export function resolveMemberIouOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(RMI_ID));

    // Checkbox
    const membersRes = resItems[0];
    // Short text
    const amount = resItems[1];
    // Long text
    const description = resItems[2];
    // Multi-choice
    const paymentType = resItems[3];

    if (
        membersRes === undefined ||
        amount === undefined ||
        description === undefined ||
        paymentType === undefined
    ) {
        throw ErrorType.AssertionError;
    }
    
    let members: string[];
    if (membersRes.length === 0) {
        members = [];
    } else {
        members = membersRes.split('\n');
    }

    disableForm(GeneratedForm.RESOLVE_MEMBER_IOU);
    RefreshLogger.markAsPriority(GeneratedForm.RESOLVE_MEMBER_IOU);
    resolveMemberIOU(members, amount, description, paymentType);
    RefreshLogger.refresh();
}
export function takeAttendanceOnFormSubmit() {
    // REFRESH DISABLED
    const resItems = getMostRecentResponse(FormApp.openById(TA_ID));

    // Checkbox
    const memListRes = resItems[0];
    // Short text
    const newMemberRes = resItems[1];

    if (
        memListRes === undefined ||
        newMemberRes === undefined
    ) {
        throw ErrorType.AssertionError;
    }
    
    let memList: string[];
    if (memListRes.length === 0) {
        memList = [];
    } else {
        memList = memListRes.split('\n');
    }

    //disableForm(GeneratedForm.TAKE_ATTENDANCE);
    RefreshLogger.markAsPriority(GeneratedForm.TAKE_ATTENDANCE);
    takeAttendance(memList, newMemberRes);
    //RefreshLogger.refresh();
}
export function transferFundsOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(TF_ID));

    // Checkbox
    const incomesRes = resItems[0];
    // Checkbox
    const expensesRes = resItems[1];

    if (
        incomesRes === undefined ||
        expensesRes === undefined
    ) {
        throw ErrorType.AssertionError;
    }
    
    let incomes: string[];
    if (incomesRes.length === 0) {
        incomes = [];
    } else {
        incomes = incomesRes.split('\n');
    }
    let expenses: string[];
    if (expensesRes.length === 0) {
        expenses = [];
    } else {
        expenses = expensesRes.split('\n');
    }

    disableForm(GeneratedForm.TRANSFER_FUNDS);
    RefreshLogger.markAsPriority(GeneratedForm.TRANSFER_FUNDS);
    transferFunds(incomes, expenses);
    RefreshLogger.refresh();
}
export function updateContactSettingsOnFormSubmit() {
    // REFRESH DISABLED
    const resItems = getMostRecentResponse(FormApp.openById(UCS_ID));

    // Multi-choice
    const name = resItems[0];
    // Short text
    const email = resItems[1];
    // Short text
    const phone = resItems[2];
    // Multi-choice
    const carrier = resItems[3];
    // Multi-choice
    const notifyPoll = resItems[4];
    // Multi-choice
    const sendReceipt = resItems[5];

    if (
        name === undefined ||
        email === undefined ||
        phone === undefined ||
        carrier === undefined ||
        notifyPoll === undefined ||
        sendReceipt === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    //disableForm(GeneratedForm.UPDATE_CONTACT_SETTINGS);
    RefreshLogger.markAsPriority(GeneratedForm.UPDATE_CONTACT_SETTINGS);
    updateContactSettings(name, email, phone, carrier, notifyPoll, sendReceipt);
    //RefreshLogger.refresh();
}
export function updateMemberStatusOnFormSubmit() {
    const resItems = getMostRecentResponse(FormApp.openById(UMS_ID));

    // Checkbox
    const membersRes = resItems[0];
    // Multi-choice
    let performingRes = resItems[1];
    // Multi-choice
    let activeRes = resItems[2];
    // Multi-choice
    let officerRes = resItems[3];

    if (
        membersRes === undefined ||
        performingRes === undefined ||
        activeRes === undefined ||
        officerRes === undefined
    ) {
        throw ErrorType.AssertionError;
    }

    let members: string[];
    if (membersRes.length === 0) {
        members = [];
    } else {
        members = membersRes.split('\n');
    }

    disableForm(GeneratedForm.UPDATE_MEMBER_STATUS);
    RefreshLogger.markAsPriority(GeneratedForm.UPDATE_MEMBER_STATUS);
    updateMemberStatus(members, performingRes, activeRes, officerRes);
    RefreshLogger.refresh();
}

function initializeViews() {
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }
    const sheetapp = SpreadsheetApp.openById(VIEWS_ID);

    sheetapp.insertSheet('Account Info')
        .appendRow([
            'Current Quarter',
            'Total',
            'Bank',
            'Venmo',
            'On-hand'
        ])
        .setFrozenRows(1);
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
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }
    const sheetapp = SpreadsheetApp.openById(TABLES_ID);

    const quarterNum = parseInt(START_QUARTER, 10);
    const yearNum = parseInt(START_YEAR, 10);
    let curQuarter: QuarterData;
    if (isNaN(yearNum)) {
        curQuarter = new QuarterData(Quarter.WINTER, new IntData(0));
    } else {
        switch (quarterNum) {
            case 0:
                curQuarter = new QuarterData(Quarter.WINTER, new IntData(yearNum));
                break;
            case 1:
                curQuarter = new QuarterData(Quarter.SPRING, new IntData(yearNum));
                break;
            case 2:
                curQuarter = new QuarterData(Quarter.SUMMER, new IntData(yearNum));
                break;
            case 3:
                curQuarter = new QuarterData(Quarter.FALL, new IntData(yearNum));
                break;
            default:
                if (isNaN(quarterNum)) {
                    curQuarter = new QuarterData(Quarter.WINTER, new IntData(yearNum));
                } else {
                    throw ErrorType.AssertionError;
                }
        }
    }

    let memDuesNum = parseFloat(MEMBER_DUES);
    if (isNaN(memDuesNum)) memDuesNum = 0;

    let officerDuesNum = parseFloat(OFFICER_DUES);
    if (isNaN(officerDuesNum)) officerDuesNum = 0;

    let numAttnsNum = parseInt(NUM_ATTNS, 10);
    if (isNaN(numAttnsNum)) numAttnsNum = 0;

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
            new IntData(Math.round(memDuesNum * 100)).toString(),
            new IntData(Math.round(officerDuesNum * 100)).toString(),
            new IntData(numAttnsNum).toString(),
            curQuarter.toString()
        ]);

    sheetapp.deleteSheet(sheetapp.getSheetByName('Sheet1'));
}
function resetViews() {
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }

    const sheetapp = SpreadsheetApp.openById(VIEWS_ID);

    sheetapp.insertSheet('Sheet1');
    for (const sheet of sheetapp.getSheets()) {
        if (sheet.getName() === "Sheet1") {
            continue;
        }
        sheetapp.deleteSheet(sheet);
    }

    initializeViews();
}
function resetTables() {
    if (
        Session.getActiveUser().getEmail() === "uwtaiko@gmail.com" ||
        Session.getActiveUser().getEmail() === "uwtaiko.prod@gmail.com"
    ) {
        throw "BLOCKED: WRONG EMAIL ACCOUNT";
    }

    const sheetapp = SpreadsheetApp.openById(TABLES_ID);

    sheetapp.insertSheet('Sheet1');
    for (const sheet of sheetapp.getSheets()) {
        if (sheet.getName() === "Sheet1") {
            continue;
        }
        sheetapp.deleteSheet(sheet);
    }

    initializeTables();
    fillWithData(TABLES_ID);
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
        .addItem('Delete Member', 'deleteMemberDialog')
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
function createDialog(title: string, html: string, height: number, width: number) {
    SpreadsheetApp.getUi().showModalDialog(
        HtmlService.createHtmlOutput(html).setHeight(height).setWidth(width),
        title
    );
}
export function memberDetailsDialog() {
    //  provide attendance, debt, and booleans breakdown
    createDialog('Member Details', memberDetailsHTML(), 260, 300);
}
export function attendanceRecordsDialog() {
    // allow selecting a date and viewing who was there that day 
    createDialog('Attendance Records', attendanceRecordsHTML(), 450, 450);
}
export function attendanceSummaryDialog() {
    // show percent of practices each member attended between 2 dates
    createDialog('Attendance Summary', attendanceSummaryHTML(), 450, 450);
}
export function fullFinanceHistoryDialog() {
    // generate waterfall graph of account's contents
    createDialog('Full Finance History', fullFinanceHistoryHTML(), 450, 850);
}

export function addMemberDialog() {
    createDialog('Add Member', addMemberHTML(), 130, 300);
}
export function addAttendanceDialog() {
    createDialog('Add Attendance', addAttendanceHTML(), 300, 300);
}
export function addIncomeDialog() {
    createDialog('Add Income', addIncomeHTML(), 200, 300);
}
export function addExpenseDialog() {
    createDialog('Add Expense', addExpenseHTML(), 240, 300);
}
export function addStatementDialog() {
    createDialog('Add Statement', addStatementHTML(), 360, 500);
}
export function addPaymentTypeDialog() {
    createDialog('Add Payment Type', addPayTypeHTML(), 130, 300);
}
export function addRecipientDialog() {
    createDialog('Add Recipient', addRecipientHTML(), 130, 300);
}
export function renameMemberDialog() {
    createDialog('Rename Member', renameMemberHTML(), 130, 300);
}
export function renamePaymentTypeDialog() {
    createDialog('Rename Payment Type', renamePaymentTypeHTML(), 130, 300);
}
export function renameRecipientDialog() {
    createDialog('Rename Recipient', renameRecipientHTML(), 130, 300);
}
export function mergeMemberDialog() {
    createDialog('Merge Member', mergeMemberHTML(), 230, 300);
}
export function mergePaymentTypeDialog() {
    createDialog('Merge Payment Type', mergePaymentTypeHTML(), 230, 300);
}
export function mergeRecipientDialog() {
    createDialog('Merge Recipient', mergeRecipientHTML(), 230, 300);
}
export function deleteMemberDialog() {
    createDialog('Delete Member', deleteMemberHTML(), 130, 300);
}
export function pollNotificationDialog() {
    // send performers a (performance) notification
    createDialog('Poll Notification', pollNotificationHTML(), 180, 300);
}
export function notifyMembersDialog() {
    // send performers a custom notification
    createDialog('Notify Performers', notifyMembersHTML(), 330, 300);
}

export function handleAddMember(name: string, dateJoined: string) {
    menuAddMember(name, dateJoined);
}
export function handleAddAttendance(date: string, members: string, quarter: string, year: string) {
    menuAddAttendance(date, members, quarter, year);
}
export function handleAddIncome(date: string, amount: string, description: string, payType: string) {
    menuAddIncome(date, amount, description, payType);
}
export function handleAddExpense(date: string, amount: string, description: string, recipient: string, payType: string) {
    menuAddExpense(date, amount, description, recipient, payType);
}
export function handleAddStatement(date: string, incomes: string, expenses: string) {
    menuAddStatement(date, incomes, expenses);
}
export function handleAddRecipient(name: string) {
    menuAddRecipient(name);
}
export function handleAddPayType(name: string) {
    menuAddPayType(name);
}
export function handleRenameMember(oldName: string, newName: string) {
    renameMember(oldName, newName);
}
export function handleRenamePaymentType(oldName: string, newName: string) {
    renamePaymentType(oldName, newName);
}
export function handleRenameRecipient(oldName: string, newName: string) {
    renameRecipient(oldName, newName);
}
export function handleMergeMember(aliases: string, name: string) {
    mergeMember(aliases, name);
}
export function handleMergePaymentType(aliases: string, name: string) {
    mergePaymentType(aliases, name);
}
export function handleMergeRecipient(aliases: string, name: string) {
    mergeRecipient(aliases, name);
}
export function handleDeleteMember(name: string) {
    menuDeleteMember(name);
}
export function handlePollNotification(title: string, deadline: string, link: string) {
    pollNotification(title, deadline, link);
}
export function handleNotifyMembers(memberNames: string, subject: string, body: string) {
    notifyMembers(memberNames, subject, body);
}
