import {
  UPDATE_OFFER_REQUEST,
  UPDATE_OFFER_SUCCESS,
  UPDATE_OFFER_FAILURE,
} from './actionTypes';

const initialState = {
  loading: false,
  offer: null,
  error: null,
};

const UpdateOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OFFER_REQUEST:
      return { ...state, loading: true, error: null };
    case UPDATE_OFFER_SUCCESS:
      return { ...state, loading: false, offer: action.payload };
    case UPDATE_OFFER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default UpdateOfferReducer;


// import { UPDATE_OFFER_REQUEST, UPDATE_OFFER_SUCCESS, UPDATE_OFFER_FAIL } from './actionTypes';

// const initialState = {
//   loading: false,
//   success: false,
//   error: null,
// };

// const UpdateOfferReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_OFFER_REQUEST:
//       return { ...state, loading: true };
//     case UPDATE_OFFER_SUCCESS:
//       return { ...state, loading: false, success: true };
//     case UPDATE_OFFER_FAIL:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default UpdateOfferReducer;
