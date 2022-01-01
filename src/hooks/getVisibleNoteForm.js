function getVisibleNoteForm() {
    const formDiv = document.querySelector('.note-page__note-form');
    const formDivVisible = formDiv.style.display;

    return formDivVisible === 'block';
}

export default getVisibleNoteForm;
