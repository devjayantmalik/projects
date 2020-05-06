import {languages} from '../data/languages.json';

import {
    FETCH_LANGUAGES,
    FETCH_PROJECTS
} from './types';


export const fetchLanguages = () => {
    return {
        type: FETCH_LANGUAGES,
        payload: languages
    }
}


export const fetchProjects = (language_id) => {
    return {
        type: FETCH_PROJECTS,
        payload: []
    }
}
