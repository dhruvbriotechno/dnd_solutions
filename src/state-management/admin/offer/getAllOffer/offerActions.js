import axios from 'axios';
import {
  FETCH_OFFER_REQUEST,
  FETCH_OFFER_SUCCESS,
  FETCH_OFFER_FAILURE
} from './actionTypes';

export const fetchOfferRequest = () => {
  return {
    type: FETCH_OFFER_REQUEST
  };
};

export const fetchOfferSuccess = (offers) => {
  console.log('offer data',offers)
  return {
    type: FETCH_OFFER_SUCCESS,
    payload: offers,
  };
};

export const fetchOfferFailure = (error) => {
  return {
    type: FETCH_OFFER_FAILURE,
    payload: error
  };
};

export const fetchOffer = () => {
  return (dispatch) => {
    dispatch(fetchOfferRequest());
    axios.get('https://beauty-bee-server.onrender.com/offers')
    .then(response => {
       console.log("respnsoe",response)
        const offers = response.data.offer; 
        dispatch(fetchOfferSuccess(offers));
    })
    .catch(error => {
        dispatch(fetchOfferFailure(error.message));
    });
  
  };
};
