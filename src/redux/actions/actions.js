import {
    INSERT_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    SET_FORM_NOTE
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

export {
    actionInsertNote,
    actionEditNote,
    actionDeleteNote,
    actionSetFormNote
};
