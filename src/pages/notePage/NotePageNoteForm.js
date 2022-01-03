import {useDispatch, useSelector} from "react-redux";

import Note from "../../classes/Note";
import NoteForm from "../../layout/noteForm/noteForm";
import {
    actionEditNote,
    actionInsertNote,
    actionSetAppSetting
} from "../../redux/actions";
import utils from "../../utils";

function NotePageNoteForm() {
    const {formNote} = useSelector(({noteReducer}) => noteReducer);
    const {noteFormShow} = useSelector(({appReducer}) => appReducer);

    const dispatch = useDispatch();

    const handleClickCancel = () => {
        dispatch(actionSetAppSetting({
            noteFormShow: 'none',
            createButtonShow: 'flex'
        }));
    };

    const handleClickSave = () => {
        dispatch(actionSetAppSetting({
            noteFormShow: 'none',
            createButtonShow: 'flex'
        }));

        const {
            id,
            name,
            created,
            category,
            content
        } = formNote;

        if (id !== undefined) {
            return dispatch(actionEditNote(
                {
                    ...formNote,
                    created: utils.formatDateToUS(created)
                }
            ));
        }

        const newNote = new Note(name, created, category, content);
        dispatch(actionInsertNote(newNote));
    };

    return (
        <div className={'note-page__form'} style={{display: noteFormShow}}>
            <NoteForm handleClickCancel={handleClickCancel} handleClickSave={handleClickSave}/>
        </div>
    );
}

export default NotePageNoteForm;
