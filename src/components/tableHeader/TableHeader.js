import "./TableHeader.css";
import TableCell from "../tableCell/TableCell";

function TableHeader({columnNamesArr}) {
    const countHeaderCell = columnNamesArr.length;
    const cellWidth = 100 / countHeaderCell;

    return (
        <div className={'table__header'}>
            {
                columnNamesArr.map((item, index) => <TableCell data={item} cellWidth={cellWidth} key={index}/>)
            }
        </div>
    );
}

export default TableHeader;
