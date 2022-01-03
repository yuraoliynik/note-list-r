import {combineReducers} from "redux";

import appReducer from "./appReducer";
import noteReducer from "./noteReducer";

const reducer = combineReducers({appReducer, noteReducer});

export default reducer;
