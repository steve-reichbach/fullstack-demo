import React, { Component } from 'react';
import RecordsTable from './components/RecordsTable/RecordsTable';
import RecordForm from './components/RecordForms/RecordForm';
import AddRecordFormButton from './components/AddRecordFormButton/AddRecordFormButton';
import RecordsTabs from './components/RecordsTabs/RecordsTabs';

class App extends Component {
    render() {
        return (<section>
            <div>
                <AddRecordFormButton/>
                <RecordForm/>
                <RecordsTabs/>
            </div>
            <RecordsTable/>
        </section>)
    }
}

export default App;