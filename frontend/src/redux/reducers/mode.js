import {
    MODE_SET
} from '../actions/';

const mode = (state = {}, action) => {
    switch (action.type) {
        case MODE_SET:
            return action.payload.name;
        default:
            return state
    }
};

export default mode
