import {noteCategoryNames} from "../constants";

function getSummary(notesArray) {
    const summaryNotes = [];

    const noteCategoryNamesArr = Object.values(noteCategoryNames);

    noteCategoryNamesArr.forEach(categoryName => {
        let active = notesArray
            .filter(noteItem => {
                return noteItem.category === categoryName
                    && noteItem.archive === 0;
            })
            .length;

        let archive = notesArray
            .filter(noteItem => {
                return noteItem.category === categoryName
                    && noteItem.archive === 1;
            })
            .length;

        const summaryObject = {
            categoryName,
            active,
            archive
        }

        summaryNotes.push(summaryObject);
    });

    return summaryNotes;
}

export default getSummary;
