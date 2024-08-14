import axios from 'axios';
import {
  UPDATE_OFFER_REQUEST,
  UPDATE_OFFER_SUCCESS,
  UPDATE_OFFER_FAILURE,
} from './actionTypes';
import { fetchOffer } from '../getAllOffer/offerActions';


export const updateOffer = (offerData) => async (dispatch) => {

  dispatch({ type: UPDATE_OFFER_REQUEST });
  try {
    const response = await axios.put('https://beauty-bee-server.onrender.com/updateOffer', offerData);
    dispatch({ type: UPDATE_OFFER_SUCCESS, payload: response.data });
    console.log("response",response)
    dispatch(fetchOffer());
  } catch (error) {
    dispatch({ type: UPDATE_OFFER_FAILURE, payload: error.message });
  }
};

