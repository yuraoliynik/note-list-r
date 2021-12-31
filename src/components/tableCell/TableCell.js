import "./TableCell.css";

function TableCell({className = '', data, cellWidth}) {
    return (
        <div className={`${className} table-cell`} style={{width: `${cellWidth}%`}}>
            <p>{data}</p>
        </div>
    )
}

export default TableCell;
