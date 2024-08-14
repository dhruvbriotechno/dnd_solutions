import {
    FETCH_SLIDERS_REQUEST,
    FETCH_SLIDERS_SUCCESS,
    FETCH_SLIDERS_FAILURE
  } from './actionTypes';
  
  const initialState = {
    loading: false,
    sliders: [],
    error: ''
  };
  
  const getAllSliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SLIDERS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_SLIDERS_SUCCESS:
        return {
          loading: false,
          sliders: action.payload,
          error: ''
        };
      case FETCH_SLIDERS_FAILURE:
        return {
          loading: false,
          sliders: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default getAllSliderReducer;
  