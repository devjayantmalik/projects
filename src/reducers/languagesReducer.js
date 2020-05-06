import {FETCH_LANGUAGES} from '../actions/types';

export default (state = [], action) => {
    // state: list of languages
    switch(action.type){
        case FETCH_LANGUAGES:
            return [...state, ...action.payload];
        default:
            return state;
    }
}