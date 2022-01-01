import "./NoteTable.css";
import TableHeader from "../../components/tableHeader/TableHeader";
import NoteListRow from "../noteListRow/NoteListRow";
import SummaryListRow from "../summaryList/SummaryListRow";
import ArchiveListRow from "../archiveListRow/ArchiveListRow";

const row = {
    NoteListRow: function(item, index) {
        return (<NoteListRow noteObject={item} key={index}/>);
    },

    SummaryListRow: function(item, index) {
        return (<SummaryListRow summaryObject={item} key={index}/>);
    },

    ArchiveListRow: function(item, index) {
        return (<ArchiveListRow noteObject={item} key={index}/>);
    }
};

function NoteTable({columnNamesArr, componentRowName, data}) {
    return (
        <div className={'table'}>
            <TableHeader columnNamesArr={columnNamesArr}/>

            {
                data && data.map((item, index) => row[componentRowName](item, index))
            }
        </div>
    )
}

export default NoteTable;
