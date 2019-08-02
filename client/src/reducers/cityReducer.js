import { GET_CITIES, CITIES_LOADING } from '../actions/types';

const initialState = {
    cities:  [],
    city: {},
    loading: false, 
    msg:"Hello world"
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
                loading: false
            };
        case CITIES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}