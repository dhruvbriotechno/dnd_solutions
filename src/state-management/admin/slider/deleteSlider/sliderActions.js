import axios from 'axios';
import { DELETE_SLIDER_REQUEST, DELETE_SLIDER_SUCCESS, DELETE_SLIDER_FAILURE } from './actionTypes';
import { fetchSliders } from '../getAllSliders/sliderActions';

export const deleteSlider = (sliderId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SLIDER_REQUEST });

    const response = await axios.delete(`https://beauty-bee-server.onrender.com/deleteSlider?sliderid=${sliderId}`);
    dispatch({
      type: DELETE_SLIDER_SUCCESS,
      payload: response.data,
    });
    dispatch(fetchSliders());
  } catch (error) {
    dispatch({
      type: DELETE_SLIDER_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

