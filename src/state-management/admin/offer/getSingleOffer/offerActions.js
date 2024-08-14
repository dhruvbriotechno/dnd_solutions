import axios from 'axios';
import { GET_OFFER_REQUEST, GET_OFFER_SUCCESS, GET_OFFER_FAIL } from './actionTypes';

export const getOfferById = (offerId) => async (dispatch) => {
  try {
    dispatch({ type: GET_OFFER_REQUEST });

    const { data } = await axios.get(`https://beauty-bee-server.onrender.com/singleOffer/?offerId=${offerId}`);

    dispatch({ type: GET_OFFER_SUCCESS, payload: data.offer });
  } catch (error) {
    dispatch({
      type: GET_OFFER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
