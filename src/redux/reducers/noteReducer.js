import {
    INSERT_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    SET_FORM_NOTE
} from "../actions";

import {initialDataNote, startDataNote} from "../../data";

const initState = {
    notes: startDataNote,
    formNote: initialDataNote
};

const noteReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case INSERT_NOTE:
            return {
                ...state,
                notes: [...state.notes, payload]
            };

        case EDIT_NOTE:
            state.notes.forEach((note, index) => {
                if (note.id === payload.id) {
                    Object.assign(state.notes[index], payload);
                }
            });

            return {
                ...state,
                notes: [...state.notes]
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== payload.id)
            };

        case SET_FORM_NOTE:
            return {
                ...state,
                formNote: {...payload}
            };

        default:
            return state;
    }
};

export default noteReducer;
