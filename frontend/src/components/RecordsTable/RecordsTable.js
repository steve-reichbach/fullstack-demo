import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { connect } from 'react-redux';

import {
    setForEdit,
    deleteRecord,
    setMode
} from '../../redux/actions';

import { apiRemoveRecord } from '../../api';
import { smartTextEllipsis } from '../../helpers/lib';
import { MODE_EDITING } from '../../helpers/constants';

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class RecordsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5
        };
        this.onSetForEditRecord = this.props.onSetForEditRecord.bind(this);
        this.onDeleteRecord = this.props.onDeleteRecord.bind(this);
    }
    deleteRecord(id) {
        apiRemoveRecord(id, this.props.collection).then(this.onDeleteRecord(id));
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: +event.target.value });
    };

    render() {
    const { classes, records } = this.props;
    const { page, rowsPerPage } = this.state;
    if (!records.length) { return null }
    const columns = records && records[0] ? Object.keys(records[0]) : [];

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, records.length - page * rowsPerPage);
        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                { columns.map(name => <TableCell key={name}>{name}</TableCell>) }
                                <TableCell>actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
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
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 48 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={3}
                                    count={records.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsWrapped}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
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
)(withStyles(styles)(RecordsTable))
