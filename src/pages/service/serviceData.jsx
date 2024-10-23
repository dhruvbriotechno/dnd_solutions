import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image1 from '../../assets/Images/service-slider1.jpg';
import { default as image2, default as image3 } from '../../assets/Images/service-slider2.jpg';
import image4 from '../../assets/Images/service-slider3.jpg';

export const slidesMain = [
    { image: image1},
    { image: image2},
    { image: image3},
    { image: image4},
];

// Main Slider Setting 
export const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <ArrowBackIosNewIcon/>,
    nextArrow:<ArrowForwardIosIcon/>
};
