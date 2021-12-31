import {
    INSERT_NOTE,
    EDIT_NOTE,
    DELETE_NOTE
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

export {
    actionInsertNote,
    actionEditNote,
    actionDeleteNote
};
