import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import "./SummaryListRow.css";
import NoteTable from "../noteTable/NoteTable";
import TableCell from "../../components/tableCell/TableCell";
import {rowComponentNames, tableColumnNames} from "../../constants";
import {getArchiveNotes} from "../../hooks";

export default function SummaryListRow({summaryObject}) {
    const {
        categoryName,
        active,
        archive
    } = summaryObject;

    const {notes} = useSelector(({noteReducer}) => noteReducer);
    const archiveNotes = getArchiveNotes(notes);

    const [archiveNotesCategory, setArchiveNotesCategory] = useState([]);
    const [archiveDiv, setArchiveDiv] = useState({show: 'none'});

    useEffect(() => {
        setArchiveDiv({show: 'none'})
    }, [archiveNotes.length]);

    const handleClickRow = () => {
        if (archiveDiv.show === 'block') {
            return setArchiveDiv({show: 'none'});
        }

        const archiveNotesByCategory = archiveNotes
            .filter(note => note.category === categoryName);

        if (archiveNotesByCategory.length) {
            setArchiveNotesCategory(archiveNotesByCategory);

            setArchiveDiv({show: 'block'})
        }
    };

    return (
        <div>
            <div className={'summary-list__row table__row cursor_pointer'} onClick={handleClickRow}>
                <TableCell data={categoryName} className={'summary-list__cell'}/>
                <TableCell data={active} className={'summary-list__cell'}/>
                <TableCell data={archive} className={'summary-list__cell'}/>
            </div>

            <div className={`summary-list__archive`} style={{display: archiveDiv.show}}>
                <NoteTable
                    columnNamesArr={tableColumnNames.archiveList}
                    componentRowName={rowComponentNames.ARCHIVE_LIST_ROW}
                    data={archiveNotesCategory}
                />
            </div>
        </div>
    );
}
