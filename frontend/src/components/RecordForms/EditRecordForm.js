import React, { useState, Component } from 'react'
import { excludedForEditingFields, MODE_EDITING } from '../../constants'
import { connect } from "react-redux";
import { editRecord, setMode } from "../../redux/actions";

class EditRecordForm extends Component {
    constructor(props) {
        super(props);
        this.hideForm = this.hideForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    hideForm () {
        this.props.onHideForm();
    }
    updateRecord(id, resource) {
        this.props.onUpdateRecord(id, resource)
    }
    handleInputChange(e) {
        e.preventDefault();
        console.log('handleInputChange', e.target.value);
    }
    render() {
        return (
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    this.updateRecord(this.props.recordToEdit.id, this.props.recordToEdit);
                }}>
                {
                    Object.entries(this.props.records).map(value => {
                        if (excludedForEditingFields.includes(value[0])) { return null }
                        return (<div key={value[0]}>
                            <label>{value[0]}</label>
                            <input
                                name={value[0]}
                                value={value[1]}
                                onChange={this.handleInputChange}
                            />
                        </div>)
                    })
                }
                <button>Update record</button>
                <button type="submit" onClick={ e => {
                    e.preventDefault();
                    this.hideForm();
                }} className="">Cancel</button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    collection: state.collection,
    records: state.records.list,
    recordToEdit: state.records.current,
    mode: state.mode
});

const mapDispatchToProps = dispatch => ({
    onUpdateRecord: (id, record) => {
        console.log("HELLO, IT's MEEEE", id, record);
        dispatch(setMode(''));
        // dispatch(editRecord(id));
    },
    onHideForm: () => dispatch(setMode('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecordForm)