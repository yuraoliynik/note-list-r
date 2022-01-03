import {useDispatch, useSelector} from "react-redux";

import "./ArchiveListRow.css";
import TableCell from "../../components/tableCell/TableCell";
import {actionEditNote} from "../../redux/actions";

function ArchiveListRow({noteObject}) {
    const {
        id,
        name,
        created,
        content,
        dates
    } = noteObject;

    const {noteFormShow} = useSelector(({appReducer}) => appReducer);
    const visibleNoteForm = noteFormShow === 'block';

    const dispatch = useDispatch();

    const handleClickActive = () => {
        if (visibleNoteForm) {
            return;
        }

        const editNote = {
            id,
            archive: 0
        };

        dispatch(actionEditNote(editNote));
    };

    return (
        <div className={'archive-list__row table__row'}>
            <TableCell data={name} className={'archive-list__cell'}/>
            <TableCell data={created} className={'archive-list__cell'}/>
            <TableCell data={content} className={'archive-list__cell'}/>
            <TableCell data={dates} className={'archive-list__cell'}/>

            <div className={'archive-list__action cursor_pointer'} onClick={handleClickActive}>Active</div>
        </div>
    );
}

export default ArchiveListRow;
