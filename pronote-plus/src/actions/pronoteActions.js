import {  GO_TO, LOAD_ELEVES, DELETE_ELEVE, ADD_ELEVE } from './types';

export const goTo = (newDestination) => dispatch => {
    dispatch({
        type: GO_TO,
        payload: newDestination
    });
}


export const loadEleves = (eleves) => dispatch => {
    dispatch({
        type: LOAD_ELEVES,
        payload: eleves
    });
}

export const deleteEleve = (id) => dispatch => {
    dispatch({
        type: DELETE_ELEVE,
        payload: id
    });
}

export const addEleve = (eleve) => dispatch => {
    dispatch({
        type: ADD_ELEVE,
        payload: eleve
    });
}