import { combineReducers } from 'redux'
import records from './records'
import mode from './mode'
import collection from './collection'

export default combineReducers({
    records,
    mode,
    collection
})
