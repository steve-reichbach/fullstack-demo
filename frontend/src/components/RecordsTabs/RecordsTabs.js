import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from 'react-redux';

import {
    setCollection,
    setRecords
} from '../../redux/actions';

import {
    apiGetCollectionData
} from '../../api';

import { collectionsList } from '../../helpers/constants';

class RecordsTabs extends Component {
    constructor(props) {
        super(props);
        this.value = 0;
        this.setCollection = this.setCollection.bind(this);
    }
    setCollection = (event, index) => {
        this.props.onSelectCollection(collectionsList[index]);

        apiGetCollectionData(collectionsList[index])
            .then(this.props.onGetCollectionData);
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
    onGetCollectionData: records => dispatch(setRecords(records))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecordsTabs)
