import { attendanceRecordsHTML, fullFinanceHistoryHTML, memberDetailsHTML, notifyMembersHTML, pollNotificationHTML, renameMemberHTML } from './html';

export function createMenu() {
    SpreadsheetApp.getUi()
        .createMenu('Actions')
        .addItem('Rename Member', 'renameMemberDialog')
        .addItem('Poll Notification', 'pollNotificationDialog')
        .addItem('Notify Members', 'notifyMembersDialog')
        .addToUi();
    SpreadsheetApp.getUi().createMenu('Reports')
        .addItem('Member Details', 'memberDetailsDialog')
        .addItem('Full Finance History', 'fullFinanceHistoryDialog')
        .addItem('Attendance Records', 'attendanceRecordsDialog')
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
    createDialog('Member Details', memberDetailsHTML(), 300, 300);
}
export function fullFinanceHistoryDialog() {
    // generate waterfall graph of account's contents
    createDialog('Full Finance History', fullFinanceHistoryHTML(), 850, 450);
}
export function attendanceRecordsDialog() {
    // allow selecting a date and viewing who was there that day 
    createDialog('Attendance Records', attendanceRecordsHTML(), 300, 300);
}
export function renameMemberDialog() {
    createDialog('Rename Member', renameMemberHTML(), 300, 300);
}
export function pollNotificationDialog() {
    // send performers a (performance) notification
    createDialog('Poll Notification', pollNotificationHTML(), 300, 300);
}
export function notifyMembersDialog() {
    // send performers a custom notification
    createDialog('Notify Performers', notifyMembersHTML(), 300, 300);
}
