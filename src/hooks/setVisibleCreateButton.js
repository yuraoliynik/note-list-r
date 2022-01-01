function setVisibleCreateButton(visibleKey) {
    const createButtonDiv = document.querySelector('.note-page__create-button');

    if (visibleKey) {
        createButtonDiv.style.display = 'flex';
    }

    if (!visibleKey) {
        createButtonDiv.style.display = 'none';
    }

    return createButtonDiv;
}

export default setVisibleCreateButton;
