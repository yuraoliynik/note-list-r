import {
    INSERT_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    SET_FORM_NOTE,
    SET_APP_SETTING
} from "./actionTypes";

const actionInsertNote = (payload) => {
    return {type: INSERT_NOTE, payload};
};

const actionEditNote = (payload) => {
    return {type: EDIT_NOTE, payload};
};

const actionDeleteNote = (payload) => {
    return {type: DELETE_NOTE, payload};
};

const actionSetFormNote = (payload) => {
    return {type: SET_FORM_NOTE, payload};
};

const actionSetAppSetting = (payload) => {
    return {type: SET_APP_SETTING, payload};
};

export {
    actionInsertNote,
    actionEditNote,
    actionDeleteNote,
    actionSetFormNote,
    actionSetAppSetting
};
