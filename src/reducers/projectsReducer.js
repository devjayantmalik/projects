import {FETCH_PROJECTS, FETCH_PROJECT} from '../actions/types';

export default (state = [], action) => {
    // state: list of projects
    switch(action.type){
        case FETCH_PROJECTS:
            return action.payload
        case FETCH_PROJECT:
                return [...state, action.payload];
        default:
            return state;
    }
}