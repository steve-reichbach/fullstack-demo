import React, { useState, useEffect } from 'react'

const EditRecordForm = props => {
    const [ record, setRecord ] = useState(props.currentRecord)

    useEffect(
        () => {
            setRecord(props.currentRecord)
        },
        [ props ]
    );
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target;

        setRecord({ ...record, [name]: value })
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateRecord(record.id, record)
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={record.name} onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={record.username} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditRecordForm