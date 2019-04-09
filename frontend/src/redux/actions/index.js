export const COLLECTION_SET = 'COLLECTION:SET';

export const MODE_SET = 'MODE:SET';

export const RECORDS_GET_ALL = 'RECORDS:GET_ALL';
export const RECORDS_CREATE_ONE = 'RECORDS:CREATE:ONE';
export const RECORDS_UPDATE_ONE = 'RECORDS:UPDATE:ONE';
export const RECORDS_DELETE_ONE = 'RECORDS:REMOVE:ONE';

export const setCollection = name => ({
    type: COLLECTION_SET,
    payload: { name }
});

export const setMode = name => ({
    type: MODE_SET,
    payload: { name }
});

export const setRecords = records => ({
    type: RECORDS_GET_ALL,
    payload: { records }
});

export const editRecord = id => ({
    type: RECORDS_UPDATE_ONE,
    payload: { id }
});

export const addRecord = (record, collection)=> ({
    type: RECORDS_CREATE_ONE,
    payload: { record, collection }
});

export const deleteRecord = id => ({
    type: RECORDS_DELETE_ONE,
    payload: { id }
});
