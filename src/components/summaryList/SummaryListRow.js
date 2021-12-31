import "./SummaryListRow.css";
import {Route, Link,BrowserRouter as Router,} from "react-router-dom";
import TableCell from "../tableCell/TableCell";
import {useSelector} from "react-redux";

export default function SummaryListRow({summaryObject}) {
    const {
        categoryName,
        active,
        archive
    } = summaryObject;

    const notes = useSelector(({notes}) => notes);
    const archiveListColumnNames = [
        'Name',
        'Created',
        'Content',
        'Dates',
        'Action'
    ];

    return (
        <div className={'summary-list__row table__row'}>
            <TableCell data={categoryName} className={'summary-list__cell'}/>
            <TableCell data={active} className={'summary-list__cell'}/>
            <Link to={`/${categoryName}`}> <TableCell data={archive} className={'summary-list__cell'}/></Link>

            <div>

            </div>
        </div>
    );
}
