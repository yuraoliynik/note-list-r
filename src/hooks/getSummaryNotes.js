import {noteCategoryNames} from "../constants";

function getSummaryNotes(notesArray) {
    const summaryNotes = [];

    const noteCategoryNamesArr = Object.values(noteCategoryNames);

    noteCategoryNamesArr.forEach(categoryName => {
        let active = 0;
        let archive = 0;

        notesArray.forEach(noteItem => {
            const categoryKey = noteItem.category === categoryName;
            const archiveKey = noteItem.archive === 0;

            if (categoryKey && archiveKey) {
                active++;
            }

            if (categoryKey && !archiveKey) {
                archive++;
            }
        });

        const summaryObject = {
            categoryName,
            active,
            archive
        }

        summaryNotes.push(summaryObject);
    });

    return summaryNotes;
}

export default getSummaryNotes;
