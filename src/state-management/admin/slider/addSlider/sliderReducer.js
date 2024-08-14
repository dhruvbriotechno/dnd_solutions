
import {
  ADD_SLIDER_REQUEST,
  ADD_SLIDER_SUCCESS,
  ADD_SLIDER_FAILURE,
} from './sliderActions';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const AddSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SLIDER_REQUEST:
      return { ...state, loading: true };
    case ADD_SLIDER_SUCCESS:
      return { ...state, loading: false, message: action.payload, error: '' };
    case ADD_SLIDER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default AddSliderReducer;
