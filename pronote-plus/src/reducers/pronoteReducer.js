import {  GO_TO, LOAD_ELEVES, DELETE_ELEVE,ADD_ELEVE, UPDATE_ELEVE } from '../actions/types';
import _ from 'lodash';
import { v1 as uuidv1 } from 'uuid';

const initialState = {
    eleves : [],
    sexe: [{id: 0,value:"selectionner "},{id: 1,value:"M"}, {id:2,value : "F"}],
    comportement : [
        {id: 0 ,value : "selectionner "},
        {id: 1 ,value : "Bavardage"}, 
        {id: 2 ,value : "Calme"},
        {id: 3 ,value : "Correct"},
        {id: 4 ,value : "Exemplaire"},
        {id: 5 ,value : "Insupportable"},
        {id: 6 ,value : "Limite"},
        {id: 7 ,value : "Logorrhée"},
    ],
    travail : [
        {id: 0 ,value : "selectionner "},
        {id: 1 ,value : "Sérieux"}, 
        {id: 2 ,value : "Insuffisant"},
        {id: 3 ,value : "Inexistant"},
        {id: 4 ,value : "Minimum"},
        {id: 5 ,value : "Difficulté"},
        {id: 6 ,value : "Correct"}
    ],
    participation : [
        {id: 0 ,value : "selectionner "},
        {id: 1 ,value : "Effort à faire"}, 
        {id: 2 ,value : "Pertinente"},
        {id: 3 ,value : "Aucune"},
        {id: 4 ,value : "Correcte"},
        {id: 5 ,value : "Bonne"},
        {id: 6 ,value : "Inadaptée"},
        {id: 7 ,value : "Rare"},
        {id: 8 ,value : "Intensifier"}
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

        case UPDATE_ELEVE:
            var eleves = _.cloneDeep(state.eleves);
            var elevesToUpdate = action.payload;
            var index = eleves.map( e => e.id ).indexOf(elevesToUpdate.id);
            if (index !== -1) {   
                eleves[index] = elevesToUpdate;
            }
            return {
                ...state,
                eleves 
            }

        default:
            return state;
    }
}