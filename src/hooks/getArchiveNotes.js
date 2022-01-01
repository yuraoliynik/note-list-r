function getArchiveNotes(notesArray = []) {
    if (notesArray.length) {
        return notesArray.filter(noteItem => noteItem.archive === 1);
    }

    return [];
}

export default getArchiveNotes;
