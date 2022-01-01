function getActiveNotes(notesArray = []) {
    if (notesArray.length) {
        return notesArray.filter(noteItem => noteItem.archive === 0);
    }

    return [];
}

export default getActiveNotes;
