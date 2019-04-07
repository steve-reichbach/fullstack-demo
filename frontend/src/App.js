import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import RecordsTable from './components/RecordsTable/RecordsTable';
import EditRecordsForm from './components/RecordForms/EditRecordForm';
import AddRecordForm from './components/RecordForms/AddRecordForm';
import AddRecordFormButton from './components/AddRecordFormButton/AddRecordFormButton';
import RecordsTabs from "./components/RecordsTabs/RecordsTabs";

import {
    MODE_EDITING,
    MODE_CREATING
} from './constants';

class App extends React.Component {
    // const editRecord = id => {
    //     setMode('editing');
    //     console.log("editRecord", id, records.find(r => r.id === id));
    //     setCurrentRecord({ ...records.find(r => r.id === id) })
    // };

    render() {
        return <section className="">
            <div className="">
                <AddRecordFormButton/>
                <RecordsTabs/>
                { this.props.mode === MODE_EDITING && (
                <section>
                    <h2>Edit a record</h2>
                    <EditRecordsForm
                        record={'currentRecord'}
                        onSetMode={'setMode'}
                        onUpdateRecord={'updateRecord'}/>
                </section>
                ) }
                { this.props.mode === MODE_CREATING && (
                    <section>
                        <h2>Add new record into «{ this.props.collection }»</h2>
                        <AddRecordForm
                            model={this.props.currentRecord}
                            onSetMode={'setMode'}
                            onAddRecord={'addRecord'}
                        />
                    </section>
                )}
            </div>
            { this.props.collection &&  (
                <div className="">
                    <h2>«{this.props.collection}»:</h2>
                    <RecordsTable/>
                </div>)}
        </section>
    };
}

const mapStateToProps = state => ({
    collection: state.collection,
    currentRecord: state.records.current, // Move it to add form
    mode: state.mode
});

export default connect(mapStateToProps)(App)