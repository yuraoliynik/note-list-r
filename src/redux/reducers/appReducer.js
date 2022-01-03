import {SET_APP_SETTING} from "../actions";

const initState = {
    noteFormShow: 'none',
    createButtonShow: 'flex'
};

const appReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_APP_SETTING:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
};

export default appReducer;
