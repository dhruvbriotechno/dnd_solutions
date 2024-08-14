// src/state-management/admin/offer/offerActions.js
import axios from 'axios';
import {
  ADD_OFFER_REQUEST,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAILURE,
} from './actionTypes';
import { fetchOffer } from '../getAllOffer/offerActions';

const addOfferRequest = () => ({
  type: ADD_OFFER_REQUEST,
});

const addOfferSuccess = (message) => ({
  type: ADD_OFFER_SUCCESS,
  payload: message,
});

const addOfferFailure = (error) => ({
  type: ADD_OFFER_FAILURE,
  payload: error,
});

export const addOffer = (offerData) => async (dispatch) => {
  dispatch(addOfferRequest());
  try {
    const response = await axios.post('https://beauty-bee-server.onrender.com/addOffer', offerData);
    dispatch(addOfferSuccess(response.data.message));
    dispatch(fetchOffer());
  } catch (error) {
    const errorMsg = error.response ? error.response.data.message : error.message;
    console.error('Error adding offer:', errorMsg);
    dispatch(addOfferFailure(errorMsg));
  }
};
