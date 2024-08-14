
import {
  GET_SLIDER_REQUEST,
  GET_SLIDER_SUCCESS,
  GET_SLIDER_FAIL,
} from './actionTypes';

const initialState = {
  singleSlider: null,
  singleLoading: false,
  singleError: null,
};

const SingleSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_REQUEST:
      return { ...state, singleLoading: true };
    case GET_SLIDER_SUCCESS:
      return { ...state, singleLoading: false, singleSlider: action.payload };
    case GET_SLIDER_FAIL:
      return { ...state, singleLoading: false, singleError: action.payload };
    default:
      return state;
  }
};

export default SingleSliderReducer;
