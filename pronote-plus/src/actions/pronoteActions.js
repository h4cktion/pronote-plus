import {  GO_TO } from './types';

export const goTo = (newDestination) => dispatch => {
    dispatch({
        type: GO_TO,
        payload: newDestination
    });
}