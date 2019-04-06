import React, { useState } from 'react'
import { excludedForEditingFields } from '../../api'

const EditRecordForm = props => {
    const [record, setRecord] = useState(props.record);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value })
    };

    return (
        <form
            onSubmit={e => { e.preventDefault(); props.onUpdateRecord(record.id, record);}}>
            {
                Object.entries(record).map(value => {
                    if (excludedForEditingFields.includes(value[0])) { return null }
                    return (<div key={value[0]}>
                            <label>{value[0]}</label>
                            <input
                                name={value[0]}
                                value={value[1]}
                                onChange={handleInputChange}
                            />
                        </div>)
                    })
            }
            <button>Update record</button>
            <button type="submit" onClick={() => props.onSetMode('')} className="">Cancel</button>
        </form>
    )
};

export default EditRecordForm