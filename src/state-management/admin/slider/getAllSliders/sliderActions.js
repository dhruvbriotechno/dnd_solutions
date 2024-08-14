import axios from 'axios';
import {
  FETCH_SLIDERS_REQUEST,
  FETCH_SLIDERS_SUCCESS,
  FETCH_SLIDERS_FAILURE
} from './actionTypes';

export const fetchSlidersRequest = () => {
  return {
    type: FETCH_SLIDERS_REQUEST
  };
};

export const fetchSlidersSuccess = (sliders) => {
  return {
    type: FETCH_SLIDERS_SUCCESS,
    payload: sliders
  };
};

export const fetchSlidersFailure = (error) => {
  return {
    type: FETCH_SLIDERS_FAILURE,
    payload: error
  };
};

export const fetchSliders = () => {
  return (dispatch) => {
    dispatch(fetchSlidersRequest());
    axios.get('https://beauty-bee-server.onrender.com/sliders')
      .then(response => {
        const sliders = response.data.slider;
        dispatch(fetchSlidersSuccess(sliders));
      })
      .catch(error => {
        dispatch(fetchSlidersFailure(error.message));
      });
  };
};
