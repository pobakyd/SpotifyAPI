import * as types from '../constants/ActionTypes'
import * as keys from '../constants/KeySpecs'

const defaultState = localStorage.getItem(keys.BREADCRUMB_KEY) ? JSON.parse(localStorage.getItem(keys.BREADCRUMB_KEY)) : [{to: '/', name: 'Home'}]

const breadcrumb = (state = defaultState, action) => {
    switch (action.type) {
        case types.GO_HOME:
            localStorage.setItem(keys.BREADCRUMB_KEY, JSON.stringify([{to: '/', name: 'Home'}]))
            return [{to: '/', name: 'Home'}]

        case types.GO_ARTIST:
            while (state.length > 1) {
                state.pop()
            }
            state.push({to: action.to, name: action.name})
            localStorage.setItem(keys.BREADCRUMB_KEY, JSON.stringify(state))
            return [...state]
        
        case types.GO_ALBUM:
            while (state.length > 2) {
                state.pop()
            }
            state.push({to: action.to, name: action.name})
            localStorage.setItem(keys.BREADCRUMB_KEY, JSON.stringify(state))
            return [...state]

        default:
            return state 
    }
}

export default breadcrumb