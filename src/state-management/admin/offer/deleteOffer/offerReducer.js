import { DELETE_OFFER_REQUEST, DELETE_OFFER_SUCCESS, DELETE_OFFER_FAILURE } from './actionTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const deleteOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_OFFER_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        error: '',
      };
    case DELETE_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: '',
      };
    case DELETE_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteOfferReducer;
