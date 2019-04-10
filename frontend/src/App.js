import React from 'react';
import { connect } from 'react-redux';
import RecordsTable from './components/RecordsTable/RecordsTable';
import RecordForm from './components/RecordForms/RecordForm';
import AddRecordFormButton from './components/AddRecordFormButton/AddRecordFormButton';
import RecordsTabs from './components/RecordsTabs/RecordsTabs';

import {
    MODE_EDITING,
    MODE_CREATING
} from './helpers/constants';

class App extends React.Component {
    render() {
        const { mode, collection, currentRecord } = this.props;
        const isCreating = mode === MODE_CREATING;
        const isEditing = mode === MODE_EDITING;

        return <section>
            <div>
                { Object.keys(currentRecord).length > 0 && <AddRecordFormButton/> }
                { (isCreating || isEditing) && <RecordForm/> }
                <RecordsTabs/>
            </div>
            { collection &&
                <div>
                    <h2>List of «{collection}»:</h2>
                    <RecordsTable/>
                </div> }
        </section>
    };
}

const mapStateToProps = state => ({
    collection: state.collection,
    currentRecord: state.records.current,
    mode: state.mode
});

export default connect(mapStateToProps)(App)