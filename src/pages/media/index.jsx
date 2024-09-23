import React, { useEffect } from 'react';
import { useStyles } from './media.style';
import { Box } from '@mui/material';
import HeroSec from '../../components/shared/HeroSec';
import { Container1200 } from '../../components/shared/CustomContainer';



const Media = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Box className={classes.productsSliderStyle}>
        <HeroSec title={"Media"} />
        <Container1200 className={" pt-12 pb-6 "} >
          
        </Container1200>
      </Box>
    </>
  )
}

export default Media
