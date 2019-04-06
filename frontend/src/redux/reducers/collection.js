import {
    COLLECTION_SET
} from '../actions/';

const collection = (state = {}, action) => {
    switch (action.type) {
        case COLLECTION_SET:
            return action.payload.name;
        default:
            return state
    }
};

export default collection
