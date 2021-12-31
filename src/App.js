import './App.css';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {useSelector} from "react-redux";
import NoteListRow from "./components/noteListRow/NoteListRow";
import Table from "./components/table/Table";
import getSummary from "./hooks/getSummary";

function App() {
    const notes = useSelector(({notes}) => notes);
    const summary = getSummary(notes);

    const noteListColumnNames = [
        'Name',
        'Created',
        'Category',
        'Content',
        'Dates',
        'Actions'
    ];

    const summaryListColumnNames = [
        'Category',
        'Active',
        'Archive'
    ];

    const archiveListColumnNames = [
        'Name',
        'Created',
        'Content',
        'Dates',
        'Action'
    ];

    return (
        <Router className="App">
                <Table
                    columnNamesArr={noteListColumnNames}
                    componentRowName={'NoteListRow'}
                    data={notes}
                />

                <Table
                    columnNamesArr={summaryListColumnNames}
                    componentRowName={'SummaryListRow'}
                    data={summary}
                />

                <Table
                    columnNamesArr={archiveListColumnNames}
                    componentRowName={'ArchiveListRow'}
                    data={notes}
                />
        </Router>
    );
}

export default App;
