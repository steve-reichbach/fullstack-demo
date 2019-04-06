import {
    RECORDS_GET_ALL,
    RECORDS_CREATE_ONE,
    RECORDS_UPDATE_ONE,
    RECORDS_DELETE_ONE
} from '../actions/';

const records = (state = {}, action) => {
    switch (action.type) {
        /*
        case RESOURCES_SELECT_ONE:
            let selectedResource = state.resources[action.payload.id - 1];
            selectedResource['actions'] = selectedResource['actionIds'].map(id => state.actions.find(r => r.id === id));
            result = {
                ...state,
                selectedResource: selectedResource
            };
            return result;
        case RESOURCES_LOAD:
            result = {
                ...state,
                resources: action.payload.resources,
                filteredResources: action.payload.resources,
            };
            return result;
        case RESOURCES_FILTER:
            console.log('RESOURCES_FILTER');
            let term = action.payload.term;
            if (!term) {
                return {
                    ...state,
                    filteredResources: state.resources
                }
            }
            result = {
                ...state,
                filteredResources: state.resources.filter((r) => r.description.toLowerCase().includes(term.toLowerCase()))
            };
            return result;
        case ACTIONS_LOAD:
            // TODO: likely has to be put into a separated actions reducer
            return {
                ...state,
                actions: action.payload.actions
            };
            */
        default:
            return state
    }
};

export default records
