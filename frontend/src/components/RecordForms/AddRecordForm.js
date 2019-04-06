import React  from 'react'
import { excludedForEditingFields } from '../../api'

const AddRecordForm = props => {
    const initialFormState = {...props.model};
    const recordToSave = {};
    const handleInputChange = event => {
        const { name, value } = event.target;

        recordToSave[name] = value;
    };

    return (
        <form
            onSubmit={ (event) => {
                event.preventDefault();
                if (!Object.keys(recordToSave).length) { return }

                props.onAddRecord(recordToSave);
            } }>
            {
                Object.entries(initialFormState).map(value => {
                    if (excludedForEditingFields.includes(value[0])) { return null }
                    return (
                        <div key={ value[0] }>
                            <label>{ value[0] }</label>
                            <input
                                name={ value[0] }
                                placeholder={ value[1] }
                                onChange={ handleInputChange }
                            />
                        </div>
                    );
                })
            }
            <button>Add new record</button>
        </form>
    );
};

export default AddRecordForm