import {  GO_TO, LOAD_ELEVES } from './types';

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