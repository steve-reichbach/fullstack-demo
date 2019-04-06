import React from 'react';
import { connect } from 'react-redux';
import { setMode } from '../../redux/actions';

import Button from '@material-ui/core/Button';

class AddRecordFormButton extends React.Component {
    constructor(props) {
        super(props);
        this.mode = props.mode;
        this.setMode = this.setMode.bind(this);
    }

    setMode() {
        this.mode = this.mode === 'creating' ? 'editing' : 'creating';
        this.props.onSetMode(this.mode);
    };

    render() {
        return ( <Button
            variant="outlined"
            color="secondary"
            onClick={this.setMode}
        > { this.props.mode === 'creating' ? '-' : '+' } </Button>)
    }
}

const mapStateToProps = state => ({
    mode: state.mode
});

const mapDispatchToProps = dispatch => ({
    onSetMode: name => dispatch(setMode(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRecordFormButton)