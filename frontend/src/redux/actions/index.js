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
