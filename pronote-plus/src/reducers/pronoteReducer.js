import {  GO_TO, LOAD_ELEVES, DELETE_ELEVE,ADD_ELEVE } from '../actions/types';
import _ from 'lodash';
import { v1 as uuidv1 } from 'uuid';

const initialState = {
    eleves : [
        {id : uuidv1(),nom: 'ANDERSON', prenom : 'Annetya',genre: true, moyenne: 15, comportement: 'calme', travail : 'serieux', participation: 'effort à faire'},
        {id : uuidv1(),nom: 'BERTOLAMI', prenom : 'Nathan',genre: false, moyenne: 13, comportement: 'calme', travail : 'serieux', participation: 'pertinente'},
        {id : uuidv1(),nom: 'BUQUET', prenom : 'Loukas',genre: false, moyenne: 15, comportement: 'bavardage', travail : 'serieux', participation: 'aucune'},
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

        case DELETE_ELEVE:
            var eleves = _.cloneDeep(state.eleves);
            eleves = eleves.filter(e => e.id != action.payload)
            return {
                ...state,
                eleves 
            }

        case ADD_ELEVE:
            var eleves = _.cloneDeep(state.eleves);
            eleves.push(action.payload);
            return {
                ...state,
                eleves 
            }

        default:
            return state;
    }
}