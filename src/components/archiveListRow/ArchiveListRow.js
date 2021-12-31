import "./ArchiveListRow.css";
import TableCell from "../tableCell/TableCell";

function ArchiveListRow({noteObject}) {
    const {
        id,
        name,
        created,
        content,
        dates
    } = noteObject;

    return (
        <div className={'archive-list__row table__row'} id={id}>
            <TableCell data={name} className={'archive-list__cell'}/>
            <TableCell data={created} className={'archive-list__cell'}/>
            <TableCell data={content} className={'archive-list__cell'}/>
            <TableCell data={dates} className={'archive-list__cell'}/>

            <div className={'archive-list__action'} data-action={'active'}>Active</div>
        </div>
    );
}

export default ArchiveListRow;
