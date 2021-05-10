import * as types from '../constants/ActionTypes'
import * as keys from '../constants/KeySpecs'

const defaultState = localStorage.getItem(keys.QUERY_KEY) ? JSON.parse(localStorage.getItem(keys.QUERY_KEY)) : ''

const query = (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_SEARCH:
            localStorage.setItem(keys.QUERY_KEY, JSON.stringify(action.keyword))
            return action.keyword
        default:
            return state 
    }
}

export default query