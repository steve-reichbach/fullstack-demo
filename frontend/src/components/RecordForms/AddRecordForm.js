import React, { useState } from 'react'

const AddRecordForm = props => {
    const initialFormState = { id: null, name: '', username: '' };
    const [ record, setRecord ] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setRecord({ ...record, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!record.name || !record.username) return

                props.addRecord(record);
                setRecord(initialFormState)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={record.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={record.username} onChange={handleInputChange} />
            <button>Add new record</button>
        </form>
    )
}

export default AddRecordForm