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

    const notes = useSelector(({notes}) => notes);
    const archiveNotes = getArchiveNotes(notes);

    const [archiveNotesCategory, setArchiveNotesCategory] = useState([]);

    useEffect(() => {
        const archiveDiv = document.getElementById(`${categoryName}`);
        archiveDiv.style.display = 'none';
    }, [archiveNotes.length]);

    const handleClickRow = () => {
        const archiveDiv = document.getElementById(`${categoryName}`);

        if (archiveDiv.style.display === 'block') {
            return archiveDiv.style.display = 'none';
        }

        const archiveNotesByCategory = archiveNotes
            .filter(note => note.category === categoryName);

        if (archiveNotesByCategory.length) {
            setArchiveNotesCategory(archiveNotesByCategory);

            archiveDiv.style.display = 'block';
        }
    };

    return (
        <div>
            <div className={'summary-list__row table__row cursor_pointer'} onClick={handleClickRow}>
                <TableCell data={categoryName} className={'summary-list__cell'}/>
                <TableCell data={active} className={'summary-list__cell'}/>
                <TableCell data={archive} className={'summary-list__cell'}/>
            </div>

            <div className={`summary-list__archive`} id={`${categoryName}`}>
                <NoteTable
                    columnNamesArr={tableColumnNames.archiveList}
                    componentRowName={rowComponentNames.ARCHIVE_LIST_ROW}
                    data={archiveNotesCategory}
                />
            </div>
        </div>
    );
}
