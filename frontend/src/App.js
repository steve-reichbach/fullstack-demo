import React, { useState } from 'react';
import RecordsTable from './components/RecordsTable/RecordsTable';
import EditRecordsForm from './components/RecordForms/EditRecordForm';
import AddRecordForm from './components/RecordForms/AddRecordForm';

/*
import {
    addRecord,
    deleteRecord,
    updateRecord,
    editRecord
} from 'actions';
*/

const App = () => {
    // Data
    const recordsData = [
        {id: 1, name: 'Tania', username: 'floppydiskette'},
        {id: 2, name: 'Craig', username: 'siliconeidolon'},
        {id: 3, name: 'Ben', username: 'benisphere'},
    ];
    // const defaultCollection = 'Vasts';
    // const recordsData = await fetch('http://localhost:3001/api/vests').then(data => data.json());
    // debugger;
    const initialFormState = { id: null, name: '', username: '' };

    // Setting state
    const [records, setRecords] = useState(recordsData);
    const [currentRecord, setCurrentRecord] = useState(initialFormState);
    const [editing, setEditing] = useState(false);

    const addRecord = record => {
        record.id = records.length + 1;
        setRecords([...records, record])
    };

    const deleteRecord = id => {
        setEditing(false);

        setRecords(records.filter(row => row.id !== id));
    };

    const updateRecord = (id, updatedRecord) => {
        setEditing(false);

        setRecords(records.map(row => (row.id === id ? updatedRecord : row)))
    };

    const editRecord = row => {
        setEditing(true);

        setCurrentRecord({ id: row.id, name: row.name, username: row.username })
    };
    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <section>
                            <h2>Edit a record</h2>
                            <EditRecordsForm
                                editing={editing}
                                setEditing={setEditing}
                                currentRecord={currentRecord}
                                updateRecord={updateRecord}
                            />
                        </section>
                    ) : (
                        <section>
                            <h2>Add a record</h2>
                            <AddRecordForm addRecord={addRecord}/>
                        </section>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Records list</h2>
                    <RecordsTable records={records} editRecord={editRecord} deleteRecord={deleteRecord}/>
                </div>
            </div>
        </div>
    );
};

export default App;
