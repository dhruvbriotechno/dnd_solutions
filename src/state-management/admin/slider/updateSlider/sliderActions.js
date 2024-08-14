
import axios from 'axios';
import {
  UPDATE_SLIDER_REQUEST,
  UPDATE_SLIDER_SUCCESS,
  UPDATE_SLIDER_FAIL,
} from './actionTypes';
import { fetchSliders } from '../getAllSliders/sliderActions';

export const updateSlider = (sliderData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SLIDER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.put(`https://beauty-bee-server.onrender.com/updateSlider`, sliderData, config);

    dispatch({ type: UPDATE_SLIDER_SUCCESS, payload: data });
    dispatch(fetchSliders());
  } catch (error) {
    dispatch({
      type: UPDATE_SLIDER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
