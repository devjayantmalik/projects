import {languages} from '../data/languages.json';
import {projects} from '../data/projects.json';

import {
    FETCH_LANGUAGES,
    FETCH_PROJECT,
    FETCH_PROJECTS,
    FETCH_PROJECTS_BY_LANGUAGE
} from './types';


export const fetchLanguages = () => {
    return { type: FETCH_LANGUAGES, payload: languages };
}


export const fetchProjects = () => {
    return { type: FETCH_PROJECTS, payload: projects }
}

export const fetchProjectById = (project_id) => {
    const project = projects.find(project => project.id === parseInt(project_id));
    return { type: FETCH_PROJECT, payload: project };
}

export const fetchProjectsByLanguage = (language) => {
    const project = projects.filter(project => project.language === parseInt(language));
    return {type: FETCH_PROJECTS_BY_LANGUAGE, payload: project};
}
