import React, { useState } from 'react';
import RecordsTable from './components/RecordsTable/RecordsTable';
import EditRecordsForm from './components/RecordForms/EditRecordForm';
import AddRecordForm from './components/RecordForms/AddRecordForm';

import useFetch from "./actions/";

export default function App() {
    // const recordsData = await fetch('http://localhost:3001/api/vests').then(data => data.json());
    // debugger;
    // const initialFormState = { id: null, name: '', username: '' };
    // console.log("recordsData", recordsData);
    // Setting state
    const collection = 'Vasts';
    const recordsData = useFetch(`http://localhost:3001/api/${collection}`);
    const [records, setRecords] = useState(recordsData);
    // const [initialRecord, setInitialRecord] = useState(recordsData);
    const [currentRecord, setCurrentRecord] = useState(recordsData[0]);
    const [editingMode, setEditing] = useState(false);


    const addRecord = record => {
        setRecords([...records, record])
    };

    const deleteRecord = id => {
        setEditing(false);

        setRecords(records.filter(row => row.id !== id));
    };

    const updateRecord = (id, updatedRecord) => {
        setEditing(false);

        console.log("updateRecord", id, updatedRecord);

        setRecords(records.map(row => (row.id === id ? updatedRecord : row)))
    };

    const editRecord = row => {
        setEditing(true);
        console.log("editRecord", row);

        setCurrentRecord({...row})
    };

    const chooseTable = collection => {

    };

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <button onClick={chooseTable('vasts')}>Vasts</button>
                    <button onClick={chooseTable('keywords')}>Keywords list</button>
                    { editingMode ? (
                        <section>
                            <h2>Edit a record</h2>
                            <EditRecordsForm
                                setEditing={setEditing}
                                currentRecord={currentRecord}
                                updateRecord={updateRecord}
                            />
                        </section>
                    ) : (
                        <section>
                            <h2>Add a record</h2>
                            <AddRecordForm sampleRecord={currentRecord} addRecord={addRecord}/>
                        </section>
                    )}
                </div>
                <div className="flex-large">
                    <h2>Records list</h2>
                    <RecordsTable records={recordsData} editRecord={editRecord} deleteRecord={deleteRecord}/>
                </div>
            </div>
        </div>
    );
};
