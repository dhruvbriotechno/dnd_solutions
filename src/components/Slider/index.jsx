// CarouselComponent.jsx
import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { useStyles } from './slider.style';

const CarouselComponent = ({settings, children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.carouselContainer}>
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
