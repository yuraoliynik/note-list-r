import {useDispatch, useSelector} from "react-redux";

import './NotePage.css';
import Button from "../../components/button/Button";
import Note from "../../classes/Note";
import NoteTable from "../../layout/noteTable/NoteTable";
import NoteForm from "../../layout/noteForm/NoteForm";
import {
    actionEditNote,
    actionInsertNote,
    actionSetFormNote
} from "../../redux/actions";
import {
    getActiveNotes,
    getSummaryNotes,
    setVisibleCreateButton,
    setVisibleNoteForm
} from "../../hooks";
import {initialDataNote} from "../../data";
import {rowComponentNames, tableColumnNames} from "../../constants";
import tools from "../../tools";


function NotePage() {
    const {notes, formNote} = useSelector(state => state);

    const activeNotes = getActiveNotes(notes);
    const summaryNotes = getSummaryNotes(notes);

    const dispatch = useDispatch();

    const handleClickCreate = () => {
        setVisibleNoteForm(1);
        setVisibleCreateButton(0);

        dispatch(actionSetFormNote(initialDataNote));
    };

    const handleClickCancel = () => {
        setVisibleNoteForm(0);
        setVisibleCreateButton(1);
    };

    const handleClickSave = () => {
        setVisibleNoteForm(0);
        setVisibleCreateButton(1);

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
                    created: tools.formatDateToUS(created)
                }
            ));
        }

        const newNote = new Note(name, created, category, content);
        dispatch(actionInsertNote(newNote));
    };

    return (
        <div className={'note-page'}>
            <div className={'note-page__list'}>
                <NoteTable
                    columnNamesArr={tableColumnNames.noteList}
                    componentRowName={rowComponentNames.NOTE_LIST_ROW}
                    data={activeNotes}
                />
            </div>

            <div className={'note-page__note-form'}>
                <NoteForm handleClickCancel={handleClickCancel} handleClickSave={handleClickSave}/>
            </div>

            <div className={'note-page__create-button'}>
                <Button buttonName={'Create Note'} handleClick={handleClickCreate}/>
            </div>

            <div className={'note-page__summary'}>
                <NoteTable
                    columnNamesArr={tableColumnNames.summaryList}
                    componentRowName={rowComponentNames.SUMMARY_LIST_ROW}
                    data={summaryNotes}
                />
            </div>
        </div>
    );
}

export default NotePage;
