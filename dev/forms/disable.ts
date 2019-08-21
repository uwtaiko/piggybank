import { ID as AE_ID } from '../ids/ae';
import { ID as AI_ID } from '../ids/ai';
import { ID as AMI_ID } from '../ids/ami';
import { ID as CD_ID } from '../ids/cd';
import { ID as CT_ID } from '../ids/ct';
import { ID as NQ_ID } from '../ids/nq';
import { ID as RMI_ID } from '../ids/rmi';
import { ID as TA_ID } from '../ids/ta';
import { ID as TF_ID } from '../ids/tf';
import { ID as UCS_ID } from '../ids/ucs';
import { ID as UMS_ID } from '../ids/ums';
import { ErrorType, GeneratedForm } from '../types';

const DISABLED_ITEM_TITLE = 'Loading values, please refresh your browser';
function getIdFromName(formName: string) {
    switch (formName) {
        case 'Add Expense':
            return AE_ID;
        case 'Add Income':
            return AI_ID;
        case 'Add Member IOU':
            return AMI_ID;
        case 'Collect Dues':
            return CD_ID;
        case 'Confirm Transfer':
            return CT_ID;
        case 'Next Quarter':
            return NQ_ID;
        case 'Resolve Member IOU':
            return RMI_ID;
        case 'Take Attendance':
            return TA_ID;
        case 'Transfer Funds':
            return TF_ID;
        case 'Update Contact Settings':
            return UCS_ID;
        case 'Update Member Status':
            return UMS_ID;
        default:
            throw ErrorType.AssertionError;
    }
}

export function disableForm(form: GeneratedForm) {
    const formApp = FormApp.openById(getIdFromName(form.getName()));

    if (formApp.getItems().length === 0 || formApp.getItems()[0].getTitle() !== DISABLED_ITEM_TITLE) {
        formApp.addCheckboxItem()
            .setTitle(DISABLED_ITEM_TITLE)
            .setValidation(FormApp.createCheckboxValidation()
                .requireSelectAtMost(0)
                // @ts-ignore 'build' is not listed as a property
                .build())
            .setRequired(true);
        while (formApp.getItems().length > 1) {
            formApp.deleteItem(0);
        }
    } else {
        while (formApp.getItems().length > 1) {
            formApp.deleteItem(1);
        }
    }
}
export function enableForm(form: GeneratedForm) {
    const formApp = FormApp.openById(getIdFromName(form.getName()));

    if (formApp.getItems().length > 0 && formApp.getItems()[0].getTitle() === DISABLED_ITEM_TITLE) {
        formApp.deleteItem(0);
    }
}
