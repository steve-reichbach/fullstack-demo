/* eslint-disable no-console */
import React, { Component }  from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { connect } from 'react-redux';

import {
    setForEdit,
    deleteRecord,
    setMode
} from '../../redux/actions';

import { apiRemoveRecord } from '../../api';
import { smartTextEllipsis } from '../../helpers/lib';
import { MODE_EDITING } from '../../helpers/constants';

class RecordsTable extends Component {
    constructor(props) {
        super(props);
        this.onSetForEditRecord = this.props.onSetForEditRecord.bind(this);
        this.onDeleteRecord = this.props.onDeleteRecord.bind(this);
    }
    deleteRecord(id) {
        apiRemoveRecord(id, this.props.collection).then(this.onDeleteRecord(id));
    }
    render() {
        const { records, collection } = this.props;
        if (!records.length) { return null }
        const columns = records && records[0] ? Object.keys(records[0]) : [];
        return (
            <div>
                <h2>List of «{collection}»:</h2>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                { columns.map(name => <TableCell key={name}>{name}</TableCell>) }
                                <TableCell>actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { records.map(row => (
                                <TableRow key={row.id}>
                                    {
                                        columns.map((field, i) => {

                                            return <TableCell title={row[field]} key={`${field}-${i}`}>{
                                                smartTextEllipsis(row[field], 30)
                                            }</TableCell>
                                        })
                                    }
                                    <TableCell>
                                        <Button color="primary" onClick={() => { this.onSetForEditRecord(row.id) } }>
                                            Edit
                                        </Button>
                                        <Button color="secondary" onClick={() => { this.deleteRecord(row.id) } }>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    collection: state.collection,
    records: state.records.list,
    current: state.records.current
});

const mapDispatchToProps = dispatch => ({
    onSetForEditRecord: id => {
        dispatch(setMode(MODE_EDITING));
        dispatch(setForEdit(id));
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
