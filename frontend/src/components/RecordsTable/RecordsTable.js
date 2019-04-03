import React from 'react'

const RecordsTable = props => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.records.length > 0 ? (
            props.records.map(record => (
                <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>{record.username}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRecord(record)
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.deleteRecord(record.id)}
                            className="button muted-button"
                        >
                            Delete
                        </button>
                    </td>
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