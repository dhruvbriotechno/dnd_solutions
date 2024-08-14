import axios from 'axios';
import { DELETE_OFFER_REQUEST, DELETE_OFFER_SUCCESS, DELETE_OFFER_FAILURE } from './actionTypes';
import { fetchOffer } from '../getAllOffer/offerActions';

export const deleteOffer = (offerId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_OFFER_REQUEST });

    const response = await axios.delete(`https://beauty-bee-server.onrender.com/deleteOffer?offerid=${offerId}`);
    dispatch({
      type: DELETE_OFFER_SUCCESS,
      payload: response.data,
    });
    dispatch(fetchOffer());
  } catch (error) {
    dispatch({
      type: DELETE_OFFER_FAILURE,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

