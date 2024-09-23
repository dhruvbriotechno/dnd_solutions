import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import CustomCard from '../../components/shared/CustomCard';
import { Container1200 } from '../../components/shared/CustomContainer';
import HeroSec from '../../components/shared/HeroSec';
import { useStyles } from './products.style';
import { productsData } from './productsData';



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
        <Container1200 className={" pt-12 pb-6 "} >
          {productsData && productsData.map((db, index) => (
            <CustomCard index={index} image={db.image} rightImg={db.rightImg} title={db.title} description={db.description} />
          ))}
        </Container1200>
      </Box>



    </>
  )
}

export default Products
