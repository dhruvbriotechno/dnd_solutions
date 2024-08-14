// src/state-management/admin/slider/sliderReducer.js
import {
  UPDATE_SLIDER_REQUEST,
  UPDATE_SLIDER_SUCCESS,
  UPDATE_SLIDER_FAIL,
} from './actionTypes';

const initialState = {
  loading: false,
  success: false,
  message: '',
  error: null,
};

const UpdateSliderReducer = (state = initialState, action) => {
  // console.log("action___",action.payload)
  switch (action.type) {
    case UPDATE_SLIDER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_SLIDER_SUCCESS:
      return { ...state, loading: false, success: true, message: action.payload, };
    case UPDATE_SLIDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default UpdateSliderReducer;
