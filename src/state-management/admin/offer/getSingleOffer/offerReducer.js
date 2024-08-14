import { GET_OFFER_REQUEST, GET_OFFER_SUCCESS, GET_OFFER_FAIL } from './actionTypes';

const initialState = {
  singleOffer: null,
  singleLoading: false,
  singleError: null,
};

const SingleOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFER_REQUEST:
      return { ...state, singleLoading: true };
    case GET_OFFER_SUCCESS:
      return { ...state, singleLoading: false, singleOffer: action.payload };
    case GET_OFFER_FAIL:
      return { ...state, singleLoading: false, singleError: action.payload };
    default:
      return state;
  }
};

export default SingleOfferReducer;
