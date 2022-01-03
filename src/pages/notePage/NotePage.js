import {useSelector} from "react-redux";

import './NotePage.css';
import NoteTable from "../../layout/noteTable/NoteTable";
import NotePageCreateButton from "./NotePageCreateButton";
import NotePageNoteForm from "./NotePageNoteForm";
import {getActiveNotes, getSummaryNotes} from "../../hooks";
import {rowComponentNames, tableColumnNames} from "../../constants";

function NotePage() {
    const {notes} = useSelector(({noteReducer}) => noteReducer);

    const activeNotes = getActiveNotes(notes);
    const summaryNotes = getSummaryNotes(notes);

    return (
        <div className={'note-page'}>
            <div className={'note-page__list'}>
                <NoteTable
                    columnNamesArr={tableColumnNames.noteList}
                    componentRowName={rowComponentNames.NOTE_LIST_ROW}
                    data={activeNotes}
                />
            </div>

            <NotePageNoteForm/>

            <NotePageCreateButton/>

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
