function setVisibleNoteForm(visibleKey) {
    const formDiv = document.querySelector('.note-page__note-form');

    if (visibleKey) {
        formDiv.style.display = 'block';
    }

    if (!visibleKey) {
        formDiv.style.display = 'none';
    }

    return formDiv;
}

export default setVisibleNoteForm;
