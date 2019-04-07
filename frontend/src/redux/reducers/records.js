import {
    RECORDS_GET_ALL,
    RECORDS_CREATE_ONE,
    RECORDS_UPDATE_ONE,
    RECORDS_DELETE_ONE,
} from '../actions/';

const records = (state = {}, action) => {
    switch (action.type) {
        case RECORDS_GET_ALL:
            return {
                ...state,
                list: action.payload.records
            };
        case RECORDS_DELETE_ONE:
            return {
                ...state,
                list: state.list.filter(r => r.id !== action.payload.id)
            };
        /*
        case RESOURCES_LOAD:
            result = {
                ...state,
                resources: action.payload.resources,
                filteredResources: action.payload.resources,
            };
            return result;
            */
        default:
            return state
    }
};

export default records
