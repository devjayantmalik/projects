import {FETCH_PROJECTS, FETCH_PROJECT, FETCH_PROJECTS_BY_LANGUAGE} from '../actions/types';

export default (state = [], action) => {
    // state: list of projects
    switch(action.type){
        case FETCH_PROJECTS:
            return action.payload;
        case FETCH_PROJECT:
            return [...state, action.payload];
        case FETCH_PROJECTS_BY_LANGUAGE:
            return [...state, ...action.payload];
        default:
            return state;
    }
}