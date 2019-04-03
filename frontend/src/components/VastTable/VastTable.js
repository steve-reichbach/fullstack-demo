import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VastTabs from '../VastTabs/VastTabs';
import Grid from '@material-ui/core/Grid';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function VastTable(props) {
    const { classes } = props;

    return (
        <Grid
            container
            direction="row"
            justify="center"
        >
            <Grid item xs={12} sm={10} md={8} xl={6}>
                <Paper className={classes.root}>
                    <VastTabs/>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>ID</CustomTableCell>
                                <CustomTableCell align="right">name</CustomTableCell>
                                <CustomTableCell align="right">other</CustomTableCell>
                                <CustomTableCell align="right">actions</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow className={classes.row} key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.id}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">{row.calories}</CustomTableCell>
                                    <CustomTableCell align="right">{row.fat}</CustomTableCell>
                                    <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
}

VastTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VastTable);