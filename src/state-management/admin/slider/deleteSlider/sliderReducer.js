import { DELETE_SLIDER_REQUEST, DELETE_SLIDER_SUCCESS, DELETE_SLIDER_FAILURE } from './actionTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const deleteSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
        error: '',
      };
    case DELETE_SLIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: '',
      };
    case DELETE_SLIDER_FAILURE:
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

export default deleteSliderReducer;
