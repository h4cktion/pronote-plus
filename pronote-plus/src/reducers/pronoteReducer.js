import {  GO_TO } from '../actions/types';
import _ from 'lodash';

const initialState = {
    menu : "DASHBOARD" 
};

export default function (state = initialState, action){
    switch( action.type ){

        case GO_TO:
            return {
                ...state,
                menu : action.payload
            }

        default:
            return state;
    }
}