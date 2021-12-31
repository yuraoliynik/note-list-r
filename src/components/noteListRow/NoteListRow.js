import "./NoteListRow.css";
import TableCell from "../tableCell/TableCell";

function NoteListRow({noteObject}) {
    const {
        id,
        name,
        created,
        category,
        content,
        dates
    } = noteObject;

    return (
        <div className={'note-list__row table__row'} id={id}>
            <TableCell data={name} className={'note-list__cell'}/>
            <TableCell data={created} className={'note-list__cell'}/>
            <TableCell data={category} className={'note-list__cell'}/>
            <TableCell data={content} className={'note-list__cell'}/>
            <TableCell data={dates} className={'note-list__cell'}/>

            <div className={'note-list__action-block'}>
                <div data-action={'edit'}>Edit</div>
                <div data-action={'archive'}>Archive</div>
                <div data-action={'delete'}>Delete</div>
            </div>
        </div>
    );
}

export default NoteListRow;
