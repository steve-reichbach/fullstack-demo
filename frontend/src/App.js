import React from 'react';
import { connect } from 'react-redux';
import RecordsTable from './components/RecordsTable/RecordsTable';
import EditRecordsForm from './components/RecordForms/EditRecordForm';
import AddRecordForm from './components/RecordForms/AddRecordForm';
import AddRecordFormButton from './components/AddRecordFormButton/AddRecordFormButton';
import RecordsTabs from './components/RecordsTabs/RecordsTabs';

import {
    MODE_EDITING,
    MODE_CREATING
} from './helpers/constants';

class App extends React.Component {
    render() {
        const isCreating = this.props.mode === MODE_CREATING;
        const isEditing = this.props.mode === MODE_EDITING;
        const currentExists = Object.keys(this.props.currentRecord).length > 0;

        return <section className="">
            <div className="">
                { currentExists && <AddRecordFormButton/> }
                { isEditing && (
                    <section>
                        <h2>Edit a record</h2>
                        <EditRecordsForm
                            record={'currentRecord'}
                            onSetMode={'setMode'}
                            onUpdateRecord={'updateRecord'}/>
                    </section>
                ) }
                { isCreating && (
                    <section>
                        <h2>Add new record into «{ this.props.collection }»</h2>
                        <AddRecordForm model={this.props.currentRecord}/>
                    </section>
                )}
                <RecordsTabs/>
            </div>
            { this.props.collection &&  (
                <div className="">
                    <h2>List of «{this.props.collection}»:</h2>
                    <RecordsTable/>
                </div>)}
        </section>
    };
}

const mapStateToProps = state => ({
    collection: state.collection,
    currentRecord: state.records.current,
    mode: state.mode
});

export default connect(mapStateToProps)(App)