import React from 'react'

const RecordsTable = props => (
    <table>
        <thead>
        { props.records.length > 0 && props.records[0] ? (
            <tr>
                <th/>
                { Object.entries(props.records[0]).map(value => (<th key={value[0]}> { value[0] } </th>)) }
            </tr>
        ) : (<tr><td>No records</td></tr>)}
        </thead>
        <tbody>
        { props.records.length > 0 ? (
            props.records.map(record => (
                <tr key={record.id}>
                    <td>
                        <button
                            onClick={() => props.onEditRecord(record.id)}
                            className="">
                            Edit
                        </button>
                        <button
                            onClick={() => props.onDeleteRecord(record.id)}
                            className="">
                            Delete
                        </button>
                    </td>
                    { Object.values(record).map((value, i) => (
                            <td key={i}> { value } </td>
                    ))}
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No records</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default RecordsTable