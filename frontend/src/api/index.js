export const getCollectionData = collection => {
    return fetch(`http://localhost:3001/api/${collection}`)
        .then(errorHandler)
        .then(data => data.json())
};

export const addRecord = (record, collection) => {
    return fetch(`http://localhost:3001/api/${collection}/`,
        {
                method: 'POST',
                body: JSON.stringify({ data: { ...record } }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(errorHandler)
            .then(data => data.json());
            // .then(res => {
                // const itemToPaste = { ...record };
                // itemToPaste['id'] = res[0];
                // setRecords([...records, itemToPaste]);
            // })
};

export const removeRecord = (id, collection) => {
    return fetch(`http://localhost:3001/api/${collection}/delete/${id}`,
        { method: 'DELETE' })
            .then(errorHandler);
};

export const updateRecord = (id, updatedRecord, collection) => {
    let query = { ...updatedRecord };
    delete query['date_created']; // TODO: nee a date_created format fix

    return fetch(`http://localhost:3001/api/${collection}/update/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({ data: { ...query } }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(errorHandler)
        .then(res => {
                //setRecords(records.map(row => (row.id === id ? updatedRecord : row)))
            return res.json();
        });
};

const errorHandler = (res) => {
    if (!res.ok) {
        throw Error('Error');
    } else return res;
};