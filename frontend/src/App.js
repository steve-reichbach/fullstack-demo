import React, { useState, useEffect } from 'react';
import RecordsTable from './components/RecordsTable/RecordsTable';
import EditRecordsForm from './components/RecordForms/EditRecordForm';
import AddRecordForm from './components/RecordForms/AddRecordForm';
import AddRecordFormButton from './components/AddRecordFormButton/AddRecordFormButton';
import RecordsTabs from "./components/RecordsTabs/RecordsTabs";

export default function App() {
    const [records, setRecords] = useState([]);
    const [collection, setCollection] = useState('vasts');
    const [currentRecord, setCurrentRecord] = useState({});
    const [mode, setMode] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/api/${collection}`)
            .then(data => data.json())
            .then(json => {
                setRecords(json);
                setCurrentRecord(json[0])
            });
    }, [collection]);

    const deleteRecord = id => {
        setMode('');
        fetch(`http://localhost:3001/api/${collection}/delete/${id}`, { method: 'DELETE' })
            .then(res => {
                if (res.ok) {
                    setRecords(records.filter(row => row.id !== id))
                }
            })
        ;
    };

    const editRecord = id => {
        setMode('editing');
        console.log("editRecord", id, records.find(r => r.id === id));
        setCurrentRecord({ ...records.find(r => r.id === id) })
    };

    const updateRecord = (id, updatedRecord) => {
        setMode('');

        let query = { ...updatedRecord };
        delete query['date_created']; // TODO: nee a date_created format fix

        fetch(`http://localhost:3001/api/${collection}/update/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ data: { ...query } }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => {
                if (res.ok) {
                    setRecords(records.map(row => (row.id === id ? updatedRecord : row)))
                } else {
                    console.log(res);
                }
            });
    };

    const addRecord = record => {
        fetch(`http://localhost:3001/api/${collection}/`,
            {
                method: 'POST',
                body: JSON.stringify({ data: { ...record } }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(data => data.json())
            .then(res => {
                const itemToPaste = { ...record };
                itemToPaste['id'] = res[0];
                setRecords([...records, itemToPaste]);
            })
    };
    return (
        <section className="">
            <div className="">
                <AddRecordFormButton/>
                <br/>
                <RecordsTabs/>
                { mode === 'editing' && (
                    <section>
                        <h2>Edit a record</h2>
                        <EditRecordsForm
                            record={currentRecord}
                            onSetMode={setMode}
                            onUpdateRecord={updateRecord}/>
                    </section>
                ) }
                { mode === 'creating' && (
                    <section>
                        <h2>Add new record into «{collection}»</h2>
                        <AddRecordForm
                            model={currentRecord}
                            onSetMode={setMode}
                            onAddRecord={addRecord}
                        />
                    </section>
                )}
            </div>
            <div className="">
                <h2>«{collection}»:</h2>
                <RecordsTable records={records} onDeleteRecord={deleteRecord} onEditRecord={editRecord}/>
            </div>
        </section>
    );
};
