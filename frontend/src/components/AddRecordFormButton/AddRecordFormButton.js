import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMode } from '../../redux/actions';

import Button from '@material-ui/core/Button';
import { MODE_CREATING } from '../../helpers/constants';

class AddRecordFormButton extends Component {
    constructor(props) {
        super(props);
        this.setMode = this.setMode.bind(this);
    }

    setMode() {
        const { onSetMode, mode } = this.props;
        onSetMode(mode === MODE_CREATING ? '' : MODE_CREATING);
    };

    render() {
        if (!this.props.collection) { return null }
        return ( <Button
            variant="outlined"
            color="secondary"
            onClick={this.setMode}
        > { this.props.mode === MODE_CREATING ? '-' : '+' } </Button>)
    }
}

const mapStateToProps = state => ({
    mode: state.mode,
    collection: state.collection
});

const mapDispatchToProps = dispatch => ({
    onSetMode: name => dispatch(setMode(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRecordFormButton)