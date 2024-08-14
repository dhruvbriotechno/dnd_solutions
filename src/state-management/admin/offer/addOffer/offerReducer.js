// src/state-management/admin/offer/offerReducer.js
import {
  ADD_OFFER_REQUEST,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAILURE,
} from './actionTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const AddOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OFFER_REQUEST:
      return { ...state, loading: true };
    case ADD_OFFER_SUCCESS:
      return { ...state, loading: false, message: action.payload, error: '' };
    case ADD_OFFER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default AddOfferReducer;
