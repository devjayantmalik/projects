import {combineReducers} from 'redux';

import languagesReducer from './languagesReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
    languages: languagesReducer,
    projects: projectsReducer
})