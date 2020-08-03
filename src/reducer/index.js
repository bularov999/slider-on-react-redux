import {combineReducers} from 'redux'
import {NEXT_SLIDE , PREV_SLIDE} from '../action-types/action-types.js'
const initialState = 0;

function slideReducer(state = initialState, action) {
    switch(action.type){
        case NEXT_SLIDE :
            if(state == 3) return state - 3
            return state + 1 
        case PREV_SLIDE:
            if(state == 0) return state + 3
            return state - 1
        default:
            return state
    }
}

export default combineReducers({
    slideReducer
})

