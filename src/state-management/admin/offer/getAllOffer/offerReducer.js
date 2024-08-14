import {
  FETCH_OFFER_REQUEST,
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAILURE
} from './actionTypes';

const initialState = {
    loading: false,
    offers: [],
    error: null,
};

const offerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OFFER_REQUEST:
            return { ...state, loading: true };
        case FETCH_OFFER_SUCCESS:
            console.log('action.payload',action.payload)
            return { ...state, loading: false, offers: action.payload };
        case FETCH_OFFER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default offerReducer;

