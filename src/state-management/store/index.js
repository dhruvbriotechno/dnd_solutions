import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import AddSliderReducer from "../admin/slider/addSlider/sliderReducer";
import getAllSliderReducer from "../admin/slider/getAllSliders/sliderReducer";
import deleteSliderReducer from "../admin/slider/deleteSlider/sliderReducer"; 
import AddOfferReducer from '../admin/offer/addOffer/offerReducer';
import getAllOfferReducer from '../admin/offer/getAllOffer/offerReducer';
import deleteOfferReducer from '../admin/offer/deleteOffer/offerReducer';
import UpdateOfferReducer from '../admin/offer/updateOffer/offerReducer';
import SingleOfferReducer from '../admin/offer/getSingleOffer/offerReducer'

// import offerReducer from '../admin/offer/offerReducer';
import SingleSliderReducer from "../admin/slider/getSingleSlider/sliderReducer";
import UpdateSliderReducer from "../admin/slider/updateSlider/sliderReducer";
import {loginReducer} from "../admin/login/loginReducer";

const rootReducer = combineReducers({
  adminLogin: loginReducer,
  addSlider: AddSliderReducer,
  AddOffer: AddOfferReducer,
  allOffer: getAllOfferReducer,
  deleteOffer:deleteOfferReducer,
  singleOffer: SingleOfferReducer,
  updateOffer: UpdateOfferReducer,
  allSlider: getAllSliderReducer,
  deleteSlider: deleteSliderReducer,
  singleSlider: SingleSliderReducer,
  updateSlider: UpdateSliderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
