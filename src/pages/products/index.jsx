import React, { useEffect } from 'react';
import { useStyles } from './products.style';
import { Box } from '@mui/material';
import TitleSection from '../../components/shared/TitleSection';
import { Container1200, ContainerFluid } from '../../components/shared/CustomContainer';
import HeroSec from '../../components/shared/HeroSec';
import CustomCard from '../../components/shared/CustomCard';



const Products = () => {
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

      {/* Products */}
      <Box className={classes.productsSliderStyle}>
        <HeroSec title={"Our Products"} />
        <Container1200 className={"  "} >
          <CustomCard />
        </Container1200>
      </Box>



    </>
  )
}

export default Products
