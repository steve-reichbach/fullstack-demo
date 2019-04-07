/* eslint-disable no-console */
import React  from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { connect } from 'react-redux';

import {
    editRecord,
    deleteRecord,
    setMode
} from '../../redux/actions';

import { removeRecord } from '../../api';
import { MODE_EDITING } from '../../constants';

class RecordsTable extends React.Component {
    constructor(props) {
        super(props);
        this.onEditRecord = this.props.onEditRecord.bind(this);
        this.onDeleteRecord = this.props.onDeleteRecord.bind(this);
    }
    removeRecord(id) {
        removeRecord(id, this.props.collection).then(data => {
            // console.log(data);
            // debugger;
            this.onDeleteRecord(id);
        })
    }
    render() {
        const columns = this.props.records && this.props.records[0] ? Object.keys(this.props.records[0]) : [];
        const records = this.props.records;
        return (
            <Paper className='root'>
                <Table className='table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>actions</TableCell>
                            { columns.map(name => <TableCell key={name}>{name}</TableCell>) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { records.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Button color="primary" onClick={() => { this.onEditRecord(row.id) } }>
                                        Edit
                                    </Button>
                                    <Button color="secondary" onClick={() => { this.removeRecord(row.id) } }>
                                        Delete
                                    </Button>
                                </TableCell>
                                { columns.map(field => <TableCell key={`${row.id }-${field}`}>{row[field]}</TableCell>) }
                            </TableRow>
                            )) }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    collection: state.collection,
    records: state.records.list,
    current: state.records.current
});

const mapDispatchToProps = dispatch => ({
    onEditRecord: id => {
        dispatch(setMode(MODE_EDITING));
        dispatch(editRecord(id));
    },
    onDeleteRecord: id => {
        dispatch(setMode(''));
        dispatch(deleteRecord(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordsTable)
