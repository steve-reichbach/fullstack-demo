import React, { useState, useEffect } from 'react'

const EditRecordForm = props => {
    const [record, setRecord] = useState(props.record);

    // useEffect(
    //     () => {
    //         setRecord(props.record)
    //     },
    // [ props ]);
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target;
        // console.log(name, value);
        setRecord({ ...record, [name]: value })
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();

                props.updateRecord(record.id, record);
            }}
        >
            {
                Object.entries(record).map(value => (
                    <div key={value[0]}>
                        <label>{value[0]}</label>
                        <input
                            name={value[0]}
                            value={value[1]}
                            onChange={handleInputChange}
                        />
                    </div>
                ))
            }
            <button>Update record</button>
            <button type="submit" onClick={() => props.onSetMode('')} className="">
                Cancel
            </button>
        </form>
    )
};

export default EditRecordForm