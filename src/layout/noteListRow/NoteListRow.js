import {useDispatch} from "react-redux";

import "./NoteListRow.css";
import TableCell from "../../components/tableCell/TableCell";
import {
    actionEditNote,
    actionDeleteNote,
    actionSetFormNote
} from "../../redux/actions";
import {getVisibleNoteForm, setVisibleCreateButton, setVisibleNoteForm} from "../../hooks";

function NoteListRow({noteObject}) {
    const {
        id,
        name,
        created,
        category,
        content,
        dates
    } = noteObject;

    const dispatch = useDispatch();

    const handleClickEdit = () => {
        setVisibleNoteForm(1);
        setVisibleCreateButton(0);

        dispatch(actionSetFormNote({
            id,
            name,
            created,
            category,
            content,
        }));
    };

    const handleClickArchive = () => {
        const visibleNoteForm = getVisibleNoteForm();

        if (visibleNoteForm) {
            return;
        }

        const editNote = {
            id,
            archive: 1
        };

        dispatch(actionEditNote(editNote));
    };

    const handleClickDelete = () => {
        const visibleNoteForm = getVisibleNoteForm();

        if (visibleNoteForm) {
            return;
        }

        const deleteNote = {id};

        dispatch(actionDeleteNote(deleteNote));
    };

    return (
        <div className={'note-list__row table__row'}>
            <TableCell data={name} className={'note-list__cell'}/>
            <TableCell data={created} className={'note-list__cell'}/>
            <TableCell data={category} className={'note-list__cell'}/>
            <TableCell data={content} className={'note-list__cell'}/>
            <TableCell data={dates} className={'note-list__cell'}/>

            <div className={'note-list__action-block'}>
                <div className={'cursor_pointer'} onClick={handleClickEdit}>Edit</div>
                <div className={'cursor_pointer'} onClick={handleClickArchive}>Archive</div>
                <div className={'cursor_pointer'} onClick={handleClickDelete}>Delete</div>
            </div>
        </div>
    );
}

export default NoteListRow;
