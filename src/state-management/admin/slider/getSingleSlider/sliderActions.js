
import axios from 'axios';
import {
  GET_SLIDER_REQUEST,
  GET_SLIDER_SUCCESS,
  GET_SLIDER_FAIL,
} from './actionTypes';

export const getSliderById = (sliderId) => async (dispatch) => {
  try {
    dispatch({ type: GET_SLIDER_REQUEST });

    const { data } = await axios.get(`https://beauty-bee-server.onrender.com/singleSlider/?sliderId=${sliderId}`);

    dispatch({ type: GET_SLIDER_SUCCESS, payload: data.slider });
  } catch (error) {
    dispatch({
      type: GET_SLIDER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
