import axios from 'axios';
import { fetchSliders } from '../getAllSliders/sliderActions';

export const ADD_SLIDER_REQUEST = 'ADD_SLIDER_REQUEST';
export const ADD_SLIDER_SUCCESS = 'ADD_SLIDER_SUCCESS';
export const ADD_SLIDER_FAILURE = 'ADD_SLIDER_FAILURE';

const addSliderRequest = () => ({
  type: ADD_SLIDER_REQUEST,
});

const addSliderSuccess = (message) => ({
  type: ADD_SLIDER_SUCCESS,
  payload: message,
});

const addSliderFailure = (error) => ({
  type: ADD_SLIDER_FAILURE,
  payload: error,
});

export const addSlider = (sliderData) => async (dispatch) => {
  dispatch(addSliderRequest());
  try {
    const response = await axios.post('https://beauty-bee-server.onrender.com/addSlider', sliderData);
    dispatch(addSliderSuccess(response.data.message));
    dispatch(fetchSliders());
  } catch (error) {
    dispatch(addSliderFailure(error.response ? error.response.data.message : error.message));
  }
};
