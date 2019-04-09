import { combineReducers } from 'redux'
import records from './records'
import mode from './mode'
import collection from './collection'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    records,
    mode,
    collection,
    form: formReducer
})
