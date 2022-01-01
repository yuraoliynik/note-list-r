import {noteCategoryNames} from "../constants";
import tools from "../tools";

const noteCategoryNamesArr = Object.values(noteCategoryNames);

const formNoteInit = {
    id: undefined,
    name: '',
    created: tools.formatInputDate(new Date()),
    category: noteCategoryNamesArr[0],
    content: ''
};

export default formNoteInit;
