import {  GO_TO, LOAD_ELEVES } from '../actions/types';
import _ from 'lodash';

const initialState = {
    eleves : [
        {nom: 'ANDERSON', prenom : 'Annetya',genre: true, moyenne: 15, comportement: 'calme', travail : 'serieux', participation: 'effort à faire'},
        {nom: 'BERTOLAMI', prenom : 'Nathan',genre: false, moyenne: 13, comportement: 'calme', travail : 'serieux', participation: 'pertinente'},
        {nom: 'BUQUET', prenom : 'Loukas',genre: false, moyenne: 15, comportement: 'bavardage', travail : 'serieux', participation: 'aucune'},
    ],
    menu : "DASHBOARD" 
};

export default function (state = initialState, action){
    switch( action.type ){

        case GO_TO:
            return {
                ...state,
                menu : action.payload
            }

        case LOAD_ELEVES:
            return {
                ...state,
                eleves : action.payload
            }

        default:
            return state;
    }
}