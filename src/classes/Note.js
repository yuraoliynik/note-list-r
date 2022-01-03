import utils from '../utils';

class Note {
    static #noteId = 0;

    static #getId() {
        return this.#noteId++;
    }

    constructor(name, created = '', category, content, archive = 0) {
        this.id = Note.#getId();
        this.name = name;
        this.created = utils.formatDateToUS(created);
        this.category = category;
        this.content = content;

        Object.defineProperty(
            this,
            'dates',
            {
                enumerable: true,
                configurable: true,
                get() {
                    if (this.content) {
                        return utils.findDates(this.content);
                    }

                    return '';
                }
            }
        );

        this.archive = archive;

        Object.defineProperty(
            this,
            'archive',
            {enumerable: false}
        );
    }
}

export default Note;
