const API_PATH = 'http://localhost:3001/api';

export const apiGetCollectionData = collection => {
    return fetch(`${API_PATH}/${collection}`)
        .then(errorHandler)
        .then(data => data.json())
};

export const apiCreateRecord = (record, collection) => {
    return fetch(`${API_PATH}/${collection}/`,
        {
                method: 'POST',
                body: JSON.stringify({ data: { ...record } }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(errorHandler)
            .then(data => data.json());
};

export const apiRemoveRecord = (id, collection) => {
    return fetch(`${API_PATH}/${collection}/delete/${id}`,
        { method: 'DELETE' })
            .then(errorHandler);
};

export const apiUpdateRecord = (id, updatedRecord, collection) => {
    return fetch(`${API_PATH}/${collection}/update/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({ data: { ...updatedRecord } }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(errorHandler)
        .then(res => res.json());
};

const errorHandler = (res) => {
    if (!res.ok) {
        throw Error('Error');
    } else return res;
};