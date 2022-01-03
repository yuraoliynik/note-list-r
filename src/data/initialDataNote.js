import {noteCategoryNames} from "../constants";
import utils from "../utils";

const noteCategoryNamesArr = Object.values(noteCategoryNames);

const formNoteInit = {
    id: undefined,
    name: '',
    created: utils.formatInputDate(new Date()),
    category: noteCategoryNamesArr[0],
    content: ''
};

export default formNoteInit;
