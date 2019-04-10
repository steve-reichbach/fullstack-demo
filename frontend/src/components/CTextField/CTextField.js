/*
* Custom Text Field. A wrapper for a Material UI component being used with Formik
* Kindly borrowed from here https://github.com/gerhat/material-ui-formik-components
* */
import TextField from '@material-ui/core/TextField';
import React, { Component } from "react";

class CTextField extends Component {
    render () {
        const { label, field, form: { dirty, touched, errors }, ...other } = this.props;
        const errorText = errors[field.name];
        const hasError = dirty && touched[field.name] && errorText !== undefined;
        return (
            <TextField
                label={label}
                error={hasError}
                helperText={hasError ? errorText : ''}
                {...field}
                {...other}
            />
        )
    }
}
export default CTextField
