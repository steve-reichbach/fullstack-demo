import {
    RECORDS_GET_ALL,
    RECORDS_CREATE_ONE,
    RECORDS_UPDATE_ONE,
    RECORDS_DELETE_ONE,
    RECORDS_SET_FOR_UPDATE_ONE
} from '../actions/';

const records = (state = {}, action) => {
    switch (action.type) {
        case RECORDS_GET_ALL:
            return {
                ...state,
                list: action.payload.records,
                current: action.payload.records[0]
            };
        case RECORDS_DELETE_ONE:
            return {
                ...state,
                list: state.list.filter(r => r.id !== action.payload.id)
            };
        case RECORDS_CREATE_ONE:
            return {
                ...state,
                mode: '',
                list: [...state.list, { ...action.payload.record }]
            };
        case RECORDS_SET_FOR_UPDATE_ONE:
            console.log("RECORDS_SET_FOR_UPDATE_ONE", action.payload);
            return {
                list: [...state.list],
                current: state.list.find(r => r.id === action.payload.id)
            };
        case RECORDS_UPDATE_ONE:
            console.warn("RECORDS_UPDATE_ONE OLOLO", state, action.payload);
            return {
                ...state,
                mode: '',
                list: state.list.map(r => {
                    if (r.id === action.payload.id) {
                        return action.payload.record
                    } else return r;
                })
            };
        default:
            return state
    }
};

export default records
