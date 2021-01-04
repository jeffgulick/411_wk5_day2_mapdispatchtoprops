import { combineReducers } from 'redux';
import initState from './state';

const user = (state = null) => state

// add switch statements in here
const cars = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [...state, action.payload]
        case 'REMOVE_CAR':
            const newState = [...state]
            const removeItem = newState.splice(action.payload, 1)
            console.log(removeItem)
            return newState
        default:
            return state;
    }
}

export default combineReducers({ user, cars })