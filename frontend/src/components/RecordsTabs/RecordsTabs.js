import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';
import { setCollection } from '../../redux/actions';
import { collectionsList } from '../../api';

class RecordsTabs extends React.Component {
    constructor(props) {
        super(props);
        this.value = 0;
        this.setCollection = this.setCollection.bind(this);
    }
    setCollection = (event, index) => {
        this.props.onSelectCollection(collectionsList[index]);
        this.value = index;
    };

    render() {
        return (
            <Paper>
                <Tabs
                    value={this.value}
                    onChange={this.setCollection}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Vasts" />
                    <Tab label="Keywords list" />
                </Tabs>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    collection: state.collection
});

const mapDispatchToProps = dispatch => ({
    onSelectCollection: name => dispatch(setCollection(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordsTabs)
